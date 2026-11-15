import json
import os
import urllib.request

BASE_URL = os.environ.get("ZAPCHEKI_URL", "https://api.gmtec.tec.br")
API_KEY = os.environ.get("ZAPCHEKI_API_KEY", "COLE_SUA_APIKEY_AQUI")
INSTANCE = os.environ.get("ZAPCHEKI_INSTANCE", "trial-000000")
DESTINO = os.environ.get("DESTINO", "5565999999999")

req = urllib.request.Request(
    f"{BASE_URL}/message/sendText/{INSTANCE}",
    data=json.dumps({"number": DESTINO, "text": "Olá do Python via ZapCheki API!"}).encode("utf-8"),
    headers={"apikey": API_KEY, "Content-Type": "application/json"},
    method="POST",
)

with urllib.request.urlopen(req, timeout=15) as resp:
    print(resp.status, resp.read().decode("utf-8"))
