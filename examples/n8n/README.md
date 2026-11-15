# Usando ZapCheki API no n8n, Typebot ou Chatwoot

Como a ZapCheki API é compatível com as rotas da **Evolution API v2**, basta configurar:

- **Base URL:** `https://api.gmtec.tec.br`
- **Header de autenticação:** `apikey: SUA_CHAVE_API`
- **Nome da instância:** o identificador gerado no seu painel (ex.: `trial-xxxxxx` ou `zc-xxxxxx-1`)

### Exemplo no nó HTTP Request do n8n
- **Method:** `POST`
- **URL:** `https://api.gmtec.tec.br/message/sendText/SUA_INSTANCIA`
- **Headers:** `apikey` = `SUA_CHAVE_API`
- **Body (JSON):**
  ```json
  {
    "number": "5565999999999",
    "text": "Mensagem automática do n8n!"
  }
  ```
