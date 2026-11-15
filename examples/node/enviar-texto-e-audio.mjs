// Exemplo Node.js (18+) sem dependências externas — Texto, Áudio PTT e Ligação VoIP
const BASE_URL = process.env.ZAPCHEKI_URL || "https://api.gmtec.tec.br";
const API_KEY = process.env.ZAPCHEKI_API_KEY || "COLE_SUA_APIKEY_AQUI";
const INSTANCE = process.env.ZAPCHEKI_INSTANCE || "trial-000000";
const DESTINO = process.env.DESTINO || "5565999999999";

async function post(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { apikey: API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status}: ${JSON.stringify(data)}`);
  return data;
}

const msg = await post(`/message/sendText/${INSTANCE}`, {
  number: DESTINO,
  text: "Olá! Mensagem enviada pela ZapCheki API.",
});
console.log("Texto enviado:", msg);
