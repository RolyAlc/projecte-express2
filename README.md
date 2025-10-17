# 1

##

```bash
Servidor ----- Client
ts -------- futter
```

```bash
npm run dev
curl -X POST http://localhost:3000/api/usuaris -H "Content-Type: application/json" -d '{"nom": "Maria", "edat": 30}'
curl http://localhost:3000/api/usuaris
curl -X DELETE http://localhost:3000/api/usuaris/0
```
