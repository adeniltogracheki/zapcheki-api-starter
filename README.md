<div align="center">

<img src="assets/logo.svg" alt="ZapCheki API" width="96" height="96" />

# ZapCheki API — Starter Kit & Exemplos Grátis

**Conecte WhatsApp + Ligações de Voz (VoIP) no seu sistema, n8n, Chatwoot ou CRM em 2 minutos.**

[**🚀 Gerar Chave Grátis (24h)**](https://api.gmtec.tec.br/) · [**🖥️ Instalar no seu servidor (grátis)**](#rodar-no-seu-próprio-servidor-self-hosted-grátis) · [**📦 Coleção Postman**](zapcheki-api.postman_collection.json) · [**💳 Planos a partir de R$ 57/mês**](https://api.gmtec.tec.br/#planos)

</div>

---

## Como testar grátis em 1 minuto

1. Acesse **[https://api.gmtec.tec.br](https://api.gmtec.tec.br)** e clique em **Testar Grátis 24h**.
2. Copie sua `apikey` e o nome da sua instância (`trial-...`), e leia o QR Code na própria tela.
3. Clone este repositório ou importe [`zapcheki-api.postman_collection.json`](zapcheki-api.postman_collection.json) no Postman:

```bash
git clone https://github.com/adeniltogracheki/zapcheki-api-starter.git
cd zapcheki-api-starter
```

---

## Rodar no seu próprio servidor (self-hosted, grátis)

Prefere rodar a API dentro do seu próprio servidor Linux, com os dados ficando só aí? Dá pra instalar com um comando — é o mesmo binário que roda em produção, assinado digitalmente e verificado pelo próprio instalador antes de rodar qualquer coisa.

```bash
curl -fsSL https://api.gmtec.tec.br/dl/instalar.sh | sudo bash
```

Isso instala a API como serviço do sistema (systemd), já isolado (sem root, sistema de arquivos protegido) e com atualização automática diária. Ao final, o instalador mostra a chave mestra e o endereço do painel (`http://localhost:8085`).

**O que o plano grátis inclui, sem cartão e sem prazo:**
- 1 linha de WhatsApp conectada, mensagens (texto, mídia, áudio) **sem limite**.
- **3 ligações de teste**, pra você ouvir a chamada de voz funcionando de verdade antes de decidir.
- Painel local completo, com um aviso mostrando quantas ligações de teste ainda restam.

Quando quiser ligações ilimitadas, múltiplas linhas ou gravação sem teto, assine um dos [planos pagos](https://api.gmtec.tec.br/#planos) — inclusive o plano **Instalação própria**, que libera tudo isso no mesmo servidor que você já instalou, sem reinstalar nada: só rodar o comando acima de novo com a sua licença:

```bash
curl -fsSL https://api.gmtec.tec.br/dl/instalar.sh | sudo ZAPCHEKI_LICENSE_KEY='sua-licenca-aqui' bash
```

> O instalador baixa só o binário compilado (fechado) e verifica a assinatura antes de instalar — o código-fonte do motor não é público. Os exemplos e o Postman desta pasta são.

Mais detalhes, desinstalação e outros sistemas operacionais: veja o guia completo em [**docs/self-hosted.md**](docs/self-hosted.md).

---

## Exemplos prontos incluídos

| Pasta / Arquivo | O que faz |
|---|---|
| [`examples/node/enviar-texto-e-audio.mjs`](examples/node/enviar-texto-e-audio.mjs) | Envia texto, áudio PTT e inicia ligação VoIP via `fetch` nativo (Node 18+) |
| [`examples/node/webhook-hmac.mjs`](examples/node/webhook-hmac.mjs) | Servidor HTTP pronto validando a assinatura HMAC-SHA256 (`x-zapcheki-signature`) |
| [`examples/python/enviar_mensagem.py`](examples/python/enviar_mensagem.py) | Exemplo simples em Python usando `urllib` (sem dependências extras) |
| [`examples/n8n/README.md`](examples/n8n/README.md) | Como conectar n8n, Typebot ou Chatwoot trocando apenas URL e `apikey` |

---

## Por que usar a ZapCheki API?
- **Compatível com Evolution API v2:** se o seu sistema já usa Evolution v2, troque apenas a URL base para `https://api.gmtec.tec.br` e o header `apikey`.
- **VoIP nativo do WhatsApp:** faça e receba chamadas de voz com gravação `.ogg`.
- **Sem servidor pesado:** toda a infraestrutura roda hospedada e gerenciada para você.
