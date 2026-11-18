# Rodar a ZapCheki API no seu próprio servidor

Este guia é para quem quer rodar a API inteira dentro da própria infraestrutura (servidor Linux próprio, VPS, datacenter da empresa), em vez de usar a versão hospedada em `api.gmtec.tec.br`.

## Requisitos

- Linux (amd64 ou arm64) com systemd — Ubuntu, Debian, Oracle Linux, Rocky, Amazon Linux, etc.
- Acesso root (`sudo`).
- `curl` e `openssl` 3.x (já vêm na maioria das distribuições atuais).
- Uma porta livre para o painel/API (padrão `127.0.0.1:8085`, só local por padrão).

## Instalar

```bash
curl -fsSL https://api.gmtec.tec.br/dl/instalar.sh | sudo bash
```

O instalador:
1. Baixa o manifesto da release e a assinatura, e confere com a chave pública embutida no próprio script.
2. Baixa o binário (e o painel web) e confere o hash de cada arquivo contra o manifesto assinado.
3. Só então instala — qualquer adulteração em qualquer etapa faz o instalador parar com erro, sem instalar nada.
4. Cria um usuário de sistema sem privilégios (`zapcheki`), gera uma chave mestra aleatória e sobe o serviço via systemd, já isolado: sem root, sem acesso ao resto do sistema de arquivos, sem novas permissões.
5. Agenda uma verificação diária de atualização (`zapcheki-atualizar.timer`), que só troca de versão se a nova também vier assinada; se a atualização não subir saudável, ele volta sozinho para a versão anterior.

Ao final, ele mostra:
- O endereço do painel local (`http://localhost:8085`).
- Onde fica a chave mestra (`/etc/zapcheki/config.env`, legível só pelo root e pelo serviço).
- O identificador da sua máquina (necessário só se for ativar uma licença paga).

## Plano grátis

Sem nenhuma licença informada, a API sobe automaticamente no plano grátis:

| Recurso | Grátis |
|---|---|
| Linhas de WhatsApp | 1 |
| Mensagens (texto, mídia, áudio) | Sem limite |
| Ligações de voz | 3 ligações de teste (total, não por dia) |
| Gravação de ligação | Disponível nas ligações de teste |

O painel mostra um aviso no topo com quantas ligações de teste ainda restam, e um link para os planos pagos quando acabarem.

## Ativar uma licença paga

Qualquer um dos [planos pagos](https://api.gmtec.tec.br/#planos) — incluindo o plano **Instalação própria** — libera o mesmo servidor que você já instalou. Depois de assinar, você recebe a licença por e-mail; para aplicá-la, rode o instalador de novo informando-a:

```bash
curl -fsSL https://api.gmtec.tec.br/dl/instalar.sh | sudo ZAPCHEKI_LICENSE_KEY='ZC1....' bash
```

A licença se vincula automaticamente a esta máquina na primeira confirmação online (a cada ~12h). Ela não funciona em outra máquina.

## Atualizar, verificar e desinstalar

```bash
sudo /opt/zapcheki-api/instalar.sh --atualizar        # força checar/aplicar atualização agora
sudo /opt/zapcheki-api/instalar.sh --verificar-somente /caminho/de/uma/release   # confere assinatura sem instalar
sudo /opt/zapcheki-api/instalar.sh --desinstalar       # remove o serviço (mantém os dados e a config)
```

## O que é aberto e o que não é

O **código-fonte do motor não é público** — você recebe um binário compilado e assinado, não os fontes. O que é aberto neste repositório: os exemplos de integração, a coleção Postman e este próprio instalador (é um script de shell comum, leia-o antes de rodar se quiser auditar). A verificação de assinatura e hash acontece sempre, mesmo baixando de fora deste repositório.

## Dúvidas comuns

**Rodei num contêiner sem `/etc/machine-id` e o identificador da máquina veio vazio.** Isso é normal em contêineres mínimos de teste; em qualquer instalação real num servidor Linux normal (com systemd), esse arquivo existe.

**Perdi acesso ao painel / esqueci a chave mestra.** Ela está em `/etc/zapcheki/config.env`, legível só como root.

**Quero rodar sem systemd (ex.: dentro de outro orquestrador).** Use `--sem-systemd` — o instalador só baixa, verifica e coloca os arquivos em `/opt/zapcheki-api`, sem mexer em serviços do sistema.
