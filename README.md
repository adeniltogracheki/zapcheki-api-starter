<div align="center">

<img src="assets/logo.svg" alt="ZapCheki API" width="96" height="96" />

# ZapCheki API — Starter Kit & Exemplos Grátis

**Conecte WhatsApp + Ligações de Voz (VoIP) no seu sistema, n8n, Chatwoot ou CRM em 2 minutos.**

[**🚀 Gerar Chave Grátis (24h)**](https://api.gmtec.tec.br/) · [**📦 Coleção Postman**](zapcheki-api.postman_collection.json) · [**💳 Planos a partir de R$ 57/mês**](https://api.gmtec.tec.br/#planos)

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
