# Evemon Brasil - Site pronto para Vercel

Arquivos principais:
- `index.html`
- `assets/mascote.png`
- `vercel.json`

## Como subir na Vercel

### Opção 1: GitHub
1. Extraia este ZIP.
2. Envie a pasta `evemon-brasil-vercel` para um repositório no GitHub.
3. Entre na Vercel.
4. Clique em **Add New > Project**.
5. Importe o repositório.
6. Framework: **Other**.
7. Build Command: deixe vazio.
8. Output Directory: deixe vazio ou use `.`.
9. Clique em **Deploy**.

### Opção 2: Vercel CLI
Dentro da pasta do site, rode:

```bash
npm i -g vercel
vercel --prod
```

## O que já está pronto
- Nome do site: Evemon Brasil
- Tema Brasil
- Mascote no topo e no início
- Categorias laterais
- Produtos no centro
- Carrinho na direita
- Janela de detalhes dos itens
- VIPs:
  - VIP Aventureiro
  - VIP Conquistador
  - VIP Celestial
  - VIP Titã
  - VIP Monarca
- Pacotes referentes a cada VIP:
  - Pacote Aventureiro
  - Pacote Conquistador
  - Pacote Celestial
  - Pacote Titã
  - Pacote Monarca

## Importante
Troque os links do Discord e de download dentro do `index.html` quando tiver os links finais.
