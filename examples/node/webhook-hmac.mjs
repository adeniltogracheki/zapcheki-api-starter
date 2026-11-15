// Servidor receptor de Webhooks ZapCheki API com validação HMAC-SHA256
import http from "node:http";
import { createHmac, timingSafeEqual } from "node:crypto";

const PORT = Number(process.env.PORT || 4000);
const WEBHOOK_SECRET = process.env.ZAPCHEKI_WEBHOOK_SECRET || "SEU_SEGREDO";

function assinaturaValida(ts, rawBody, signature) {
  if (!ts || Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false;
  const esperado = "sha256=" + createHmac("sha256", WEBHOOK_SECRET).update(`${ts}.${rawBody}`).digest("hex");
  const a = Buffer.from(esperado);
  const b = Buffer.from(signature || "");
  return a.length === b.length && timingSafeEqual(a, b);
}

http.createServer((req, res) => {
  if (req.method !== "POST") return res.writeHead(404).end();
  const chunks = [];
  req.on("data", (c) => chunks.push(c));
  req.on("end", () => {
    const raw = Buffer.concat(chunks).toString("utf8");
    const ts = req.headers["x-zapcheki-timestamp"];
    const sig = req.headers["x-zapcheki-signature"];
    if (WEBHOOK_SECRET && !assinaturaValida(ts, raw, sig)) {
      return res.writeHead(401).end("assinatura inválida");
    }
    const evento = JSON.parse(raw);
    console.log("Evento recebido:", evento.event, evento.instance);
    res.writeHead(200).end("ok");
  });
}).listen(PORT, () => console.log(`Webhook ouvindo em http://localhost:${PORT}`));
