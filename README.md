# MM MODAS — Front-end

E-commerce de roupas com personalidade. O nome vem do apelido de um dos integrantes do grupo: **Menino Mau**.

Stack: **React (componentes funcionais) · JavaScript · CSS tradicional · Vite · React Router**.

## Como rodar

```bash
npm install
npm run dev       # abre em http://localhost:5173
npm run build     # gera a versão de produção em /dist
npm run preview   # testa o build
```

## Páginas (rotas)

| Rota | Página |
| --- | --- |
| `/` | Início: hero, categorias, novidades, manifesto, newsletter |
| `/loja` | Catálogo com filtro por categoria (`?categoria=`), busca, promoções e ordenação |
| `/produto/:slug` | Detalhe do produto: cor, tamanho, quantidade, adicionar ao carrinho |
| `/carrinho` | Carrinho com barra de frete grátis e cupom (`MENINOMAU10`) |
| `/cadastro` | Cadastro de **cliente** ou **funcionário** (matrícula de 8 caracteres). Depois de cadastrado, vira "Minha conta" |
| `/checkout` | Só abre com cadastro feito; endereço vem preenchido; CEP limitado a 8 dígitos |
| `/sobre` | A história do Menino Mau |
| `/contato` | Formulário de contato + FAQ (os links "Ajuda" do rodapé abrem a pergunta certa, ex.: `/contato#faq-trocas`) |
| `*` | Página 404 |

## Estrutura

```
src/
├── components/        # Header, Footer, Logo/Mascot, ProductCard, ProductArt, Toast, Icons
├── context/           # CartContext (carrinho), UserContext (cadastro) e regras do carrinho
├── data/products.js   # catálogo fictício (8 categorias, 32 produtos)
├── data/faq.js        # perguntas frequentes (Contato + rodapé)
├── pages/             # uma pasta por página (JSX + CSS)
├── styles/global.css  # variáveis de cor, tipografia, botões, formulários
├── utils/format.js    # formatação de preço (R$)
└── utils/validators.js # máscaras e validações (CEP, CPF, telefone, matrícula) + busca de CEP (ViaCEP)
```

Cada componente tem o seu próprio arquivo `.css`, importado no `.jsx`. Todos os arquivos têm comentários explicando cada parte.

## Categorias

Camisetas & Regatas · Camisas · Moletons & Tricô · Jaquetas · Calças & Bermudas · **Underwear** · **Training** · Acessórios

## Cadastro

- Os dados ficam salvos no `localStorage` do navegador (não há servidor). A senha não é guardada.
- CPF validado pelos dígitos verificadores. CEP com 8 números preenche o endereço automaticamente pela API ViaCEP.
- Para testar: CPF válido de exemplo `529.982.247-25`.

## Identidade visual

- **Laranja claro** `#ffc596` e **roxo claro** `#c8b3f0` como cores de marca; tinta roxa escura `#2c1f4a` para textos.
- Botão principal em roxo `#6c4cbb` com texto branco (contraste AA).
- Fontes: *Bricolage Grotesque* (títulos) e *DM Sans* (texto), via Google Fonts.
- Mascote em SVG (`src/components/Logo/Mascot.jsx`) inspirado na caricatura do Menino Mau.

Todas as cores ficam em `:root` no `global.css` — mude ali e o site inteiro acompanha.

## Fotos dos produtos

As peças são ilustrações em SVG (`ProductArt`). Para usar fotos reais, troque o
`<ProductArt ... />` por `<img src={product.image} alt={product.name} />` e adicione
o campo `image` em `data/products.js`.
