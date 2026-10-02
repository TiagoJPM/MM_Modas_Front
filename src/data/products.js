// =========================================================
// Catálogo fictício da MM MODAS (moda masculina)
// ---------------------------------------------------------
// - categories: lista de categorias exibidas na Home, na Loja e no rodapé.
//   O campo "art" diz qual ilustração representa a categoria.
// - products: cada produto tem um "type" que define qual peça o
//   componente ProductArt desenha (tee, shirt, boxer, beanie...).
// - tags: ['novo'] faz o produto aparecer em "Novidades" na Home.
// - oldPrice (opcional): preço antigo, usado para mostrar o desconto.
// =========================================================

// Paleta de cores reaproveitada nos produtos (evita repetir hex)
const cor = {
  lavanda: { name: 'Lavanda', hex: '#c8b3f0' },
  roxoClaro: { name: 'Roxo claro', hex: '#b7a0ea' },
  lilas: { name: 'Lilás', hex: '#d3c1f5' },
  pessego: { name: 'Pêssego', hex: '#ffc596' },
  laranja: { name: 'Laranja suave', hex: '#ffb57d' },
  offWhite: { name: 'Off-white', hex: '#fbf6ee' },
  areia: { name: 'Areia', hex: '#e9d6bf' },
  grafite: { name: 'Grafite lilás', hex: '#6e6190' },
  azulCeu: { name: 'Azul céu', hex: '#bcd3f2' },
  verdeMenta: { name: 'Verde menta', hex: '#bfe3cf' },
}

// Grades de tamanho usadas pelos produtos
const TAM_ROUPA = ['6L', '8L', '10L', '20L']
const TAM_CALCA = ['6L', '8L', '10L', '20L']
const TAM_MEIA =  ['6L', '8L', '10L', '20L']
const TAM_UNICO = ['6L', '8L', '10L', '20L']

export const categories = [
  { id: 'camisetas', name: 'RPG', art: 'tee', bg: 'var(--laranja-200)' },
  { id: 'camisas', name: 'FAMILIA', art: 'shirt', bg: 'var(--roxo-200)' },
  { id: 'moletons', name: 'ACESSORIOS', art: 'hoodie', bg: 'var(--roxo-100)' },
  { id: 'jaquetas', name: 'CARTAS', art: 'jacket', bg: 'var(--laranja-100)' },
 // { id: 'calcas-bermudas', name: 'Calças & Bermudas', art: 'pants', bg: 'var(--roxo-200)' },
  //{ id: 'underwear', name: 'Underwear', art: 'boxer', bg: 'var(--laranja-200)' },
  //{ id: 'training', name: 'Training', art: 'dryfit', bg: 'var(--laranja-100)' },
//{ id: 'acessorios', name: 'Acessórios', art: 'cap', bg: 'var(--roxo-100)' },
]

export const products = [
  // ---------- Camisetas & Regatas ----------
  {
    id: 1,
    slug: 'jogo-da-velha',
    name: 'jogo da velha',
    category: 'camisetas',
    type: 'tee',
    image: '/produtos/Jogodavelha.png',
    price: 89.9,
    oldPrice: 119.9,
    colors: [cor.lavanda, cor.pessego, cor.offWhite],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'Jogo da velha ou jogo de velha, um classico e bote classico nisso, talvez haja opções melhores',
  },
  {
    id: 2,
    slug: 'camiseta-sem-pedir-licenca',
    name: 'Camiseta Sem Pedir Licença',
    category: 'camisetas',
    type: 'tee',
    price: 79.9,
    colors: [cor.offWhite, cor.roxoClaro],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Básica? Nunca. Malha fio 30, gola canelada e a frase que resume a marca nas costas. Combina com tudo — principalmente com atitude.',
  },
  {
    id: 3,
    slug: 'Monopoli',
    name: 'Monopoli',
    category: 'camisetas',
    type: 'tank',
    image: '/produtos/monopoli.png',
    price: 69.9,
    colors: [cor.pessego, cor.lavanda, cor.offWhite],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'monopoli, a proposta de sempre, mostre a todos como que o capitalismo já consumiu sua mente e que você sabe como tirar dinheiro ao maximo dos outros',
  },
  {
    id: 4,
    slug: 'polo-menino-bom',
    name: 'Polo Menino Bom (Só na Aparência)',
    category: 'camisetas',
    type: 'polo',
    price: 139.9,
    colors: [cor.lilas, cor.areia],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Piquet de algodão, gola firme e dois botões. Cara de bom moço pro almoço de família — o resto a gente não conta.',
  },

  // ---------- Camisas ----------
  {
    id: 5,
    slug: 'camisa-botao-vibe',
    name: 'Camisa de Botão Vibe',
    category: 'camisas',
    type: 'shirt',
    price: 159.9,
    colors: [cor.lavanda, cor.areia],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Linho misto, caimento solto e botões de coco. Aberta por cima da camiseta ou fechada pro jantar — você escolhe a vibe.',
  },
  {
    id: 6,
    slug: 'camisa-social-maroto',
    name: 'xadrez',
    category: 'camisas',
    type: 'dressshirt',
    image: '/produtos/Xadrez.png',
    price: 189.9,
    colors: [cor.azulCeu, cor.offWhite, cor.lilas],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'não, você não é o magnus carlsen, porem, ainda pode derrotar seu amigo no mesmo jogo dele',
  },
  {
    id: 7,
    slug: 'camisa-flanela-role-frio',
    name: 'Camisa de Rolê Frio',
    category: 'camisas',
    type: 'flannel',
    price: 169.9,
    colors: [cor.laranja, cor.roxoClaro],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Xadrez em tons de laranja e lilás, flanela escovada macia e bolsos no peito. Vira jaqueta leve nas noites mais frias.',
  },

  // ---------- Moletons & Tricô ----------
  {
    id: 8,
    slug: 'moletom-sem-filtro',
    name: 'D&D',
    category: 'moletons',
    type: 'hoodie',
    image: '/produtos/DND.png',
    price: 219.9,
    colors: [cor.roxoClaro, cor.laranja],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'D&D talvez você seja realmente um nerd.',
  },
  {
    id: 9,
    slug: 'moletom-careta',
    name: 'Moletom Careta',
    category: 'moletons',
    type: 'hoodie',
    price: 229.9,
    colors: [cor.pessego, cor.offWhite],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Nosso moletom mais pesado, com caretas bordadas nas mangas. Pra quem faz careta pra regra de moda.',
  },
  {
    id: 10,
    slug: 'sueter-trico-aconchego',
    name: 'Suéter Tricô Aconchego',
    category: 'moletons',
    type: 'sweater',
    price: 199.9,
    colors: [cor.areia, cor.lavanda],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Tricô de algodão com gola careca e punhos canelados. Abraço em forma de roupa pros dias nublados.',
  },

  // ---------- Jaquetas ----------
  {
    id: 11,
    slug: 'jaqueta-corta-vento-atitude',
    name: 'Jaqueta Corta-Vento Atitude',
    category: 'jaquetas',
    type: 'jacket',
    price: 259.9,
    oldPrice: 299.9,
    colors: [cor.lilas, cor.laranja],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Nylon leve, repelente à água, forro em tela e zíper frontal. Dobra e cabe na mochila — a atitude vai com você.',
  },
  {
    id: 12,
    slug: 'jaqueta-jeans-cacheada',
    name: 'Jaqueta de Couro Cacheada',
    category: 'jaquetas',
    type: 'jacket',
    price: 279.9,
    colors: [cor.grafite, cor.lilas],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Couro com acabamento fosco, zíper frontal, bolsos laterais e o mascote estampado no peito. Uma peça pra usar por anos.',
  },

  // ---------- Calças & Bermudas ----------
  {
    id: 13,
    slug: 'calca-cargo-role',
    name: 'Calça Cargo Rolê',
    category: 'calcas-bermudas',
    type: 'pants',
    price: 179.9,
    colors: [cor.areia, cor.grafite],
    sizes: TAM_CALCA,
    tags: [],
    description:
      'Sarja com elastano, bolsos laterais de verdade e cordão ajustável na barra. Aguenta o dia inteiro de rolê.',
  },
  {
    id: 14,
    slug: 'calca-jogger-domingo',
    name: 'Call of the Cthulhu',
    category: 'calcas-bermudas',
    type: 'jogger',
    image: '/produtos/callofcthulhu.png',
    price: 159.9,
    colors: [cor.grafite, cor.lavanda],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'Vc é nerd, mas vc adora estar no hype',
  },
  {
    id: 15,
    slug: 'bermuda-sarja-solta',
    name: 'Bermuda de Sarja Solta',
    category: 'calcas-bermudas',
    type: 'shorts',
    price: 129.9,
    colors: [cor.areia, cor.azulCeu],
    sizes: TAM_CALCA,
    tags: [],
    description:
      'Sarja leve, comprimento acima do joelho e barra dobrável. A bermuda coringa do verão inteiro.',
  },
  {
    id: 16,
    slug: 'shorts-moletom-preguica',
    name: 'Shorts Moletom Preguiça',
    category: 'calcas-bermudas',
    type: 'shorts',
    price: 119.9,
    colors: [cor.pessego, cor.lilas],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Moletom leve, cós de elástico com cordão e bolsos fundos. Feito pro domingo, mas ninguém vai te julgar na segunda.',
  },

  // ---------- Underwear ----------
  {
    id: 17,
    slug: 'kit-3-cuecas-boxer-maroto',
    name: 'Ordem Paranormal',
    category: 'underwear',
    type: 'boxer',
    image: '/produtos/ordemparanormal.png',
    price: 99.9,
    oldPrice: 119.7,
    colors: [cor.lavanda, cor.pessego, cor.grafite],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'ordem paranormal, igualzinha a do celbit',
  },
  {
    id: 18,
    slug: 'cueca-boxer-cacheada',
    name: 'Cueca Boxer Cacheada',
    category: 'underwear',
    type: 'boxer',
    price: 39.9,
    colors: [cor.roxoClaro, cor.azulCeu],
    sizes: TAM_ROUPA,
    tags: [],
    description: 'Microfibra respirável, secagem rápida e cós macio que não marca. Ideal pra dias corridos.',
  },
  {
    id: 19,
    slug: 'samba-cancao-bolinhas',
    name: 'Samba-Canção Bolinhas',
    category: 'underwear',
    type: 'samba',
    price: 59.9,
    colors: [cor.lilas, cor.pessego],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Tricoline de algodão com estampa de bolinhas, elástico coberto e botão frontal. Clássico do vovô com atitude de neto.',
  },
  {
    id: 20,
    slug: 'kit-3-meias-sorriso',
    name: 'Tormenta20',
    category: 'underwear',
    type: 'socks',
    image: '/produtos/tormenta20.png',
    price: 49.9,
    colors: [cor.pessego, cor.lavanda, cor.offWhite],
    sizes: TAM_MEIA,
    tags: ['novo'],
    description:
      'Tormentar 20, o jogo de mesa mais famoso somente no brasil',
  },

  // ---------- Training ----------
  {
    id: 21,
    slug: 'camiseta-dry-fit-treino-pesado',
    name: 'war',
    category: 'training',
    type: 'dryfit',
    image: '/produtos/War.png',
    price: 99.9,
    colors: [cor.roxoClaro, cor.verdeMenta],
    sizes: TAM_ROUPA,
    tags: ['novo'],
    description:
      'Porque ?, só tenho isso a dizer.',
  },
  {
    id: 22,
    slug: 'regata-treino-sem-desculpa',
    name: 'Regata Treino Sem Desculpa',
    category: 'training',
    type: 'tank',
    price: 79.9,
    colors: [cor.grafite, cor.laranja],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Regata cavada em poliamida leve, costuras planas e barra alongada. Liberdade total no dia de braço.',
  },
  {
    id: 23,
    slug: 'bermuda-treino-leve',
    name: 'Bermuda de Treino Leve',
    category: 'training',
    type: 'shorts',
    price: 109.9,
    colors: [cor.grafite, cor.azulCeu],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Tecido com elastano em 4 direções, forro interno e bolso com zíper pro celular. Do agachamento à corrida.',
  },
  {
    id: 24,
    slug: 'calca-jogger-treino',
    name: 'Calça Jogger Treino',
    category: 'training',
    type: 'jogger',
    price: 169.9,
    colors: [cor.roxoClaro, cor.grafite],
    sizes: TAM_ROUPA,
    tags: [],
    description:
      'Tecido leve e respirável, punhos com ajuste e bolsos com zíper. Aquece antes do treino e segura o frio depois.',
  },
  {
    id: 25,
    slug: 'meia-cano-alto-treino',
    name: 'Meia Cano Alto Treino',
    category: 'training',
    type: 'socks',
    price: 29.9,
    colors: [cor.offWhite, cor.grafite],
    sizes: TAM_MEIA,
    tags: [],
    description: 'Cano alto com compressão leve, planta acolchoada e fio antiodor. Seu pé agradece no fim do treino.',
  },

  // ---------- Acessórios ----------
  {
    id: 26,
    slug: 'bone-menino-mau',
    name: 'Boné Menino Mau',
    category: 'acessorios',
    type: 'cap',
    price: 79.9,
    colors: [cor.pessego, cor.lavanda],
    sizes: TAM_UNICO,
    tags: [],
    description: 'Aba curva, fecho regulável e o mascote bordado na frente. O acessório oficial de quem tem cara de santo, mas não é.',
  },
  {
    id: 27,
    slug: 'gorro-cacheado',
    name: 'Gorro Cacheado',
    category: 'acessorios',
    type: 'beanie',
    price: 69.9,
    colors: [cor.lavanda, cor.laranja, cor.grafite],
    sizes: TAM_UNICO,
    tags: ['novo'],
    description: 'Tricô canelado com barra dobrada e pompom. Esconde o cabelo bagunçado, mas não a personalidade.',
  },
  {
    id: 28,
    slug: 'bucket-hat-maroto',
    name: 'Bucket Hat Maroto',
    category: 'acessorios',
    type: 'bucket',
    price: 89.9,
    colors: [cor.pessego, cor.lilas],
    sizes: TAM_UNICO,
    tags: [],
    description: 'Sarja de algodão, aba curta e costura pespontada. O chapéu de quem vai pro festival e volta com história.',
  },
  {
    id: 29,
    slug: 'pochete-role',
    name: 'Pochete Rolê',
    category: 'acessorios',
    type: 'pochete',
    price: 119.9,
    colors: [cor.roxoClaro, cor.laranja],
    sizes: TAM_UNICO,
    tags: [],
    description: 'Nylon resistente, dois compartimentos e alça regulável. Use na cintura ou atravessada no peito.',
  },
  {
    id: 30,
    slug: 'mochila-campus',
    name: 'Mochila Campus',
    category: 'acessorios',
    type: 'backpack',
    price: 199.9,
    colors: [cor.lavanda, cor.grafite],
    sizes: TAM_UNICO,
    tags: ['novo'],
    description: 'Compartimento acolchoado pra notebook de até 15", bolso frontal e alças ergonômicas. Nascida na faculdade, igual a marca.',
  },
  {
    id: 31,
    slug: 'oculos-sol-sem-filtro',
    name: 'Óculos de Sol Sem Filtro',
    category: 'acessorios',
    type: 'sunglasses',
    price: 149.9,
    colors: [cor.laranja, cor.lavanda],
    sizes: TAM_UNICO,
    tags: [],
    description: 'Armação em acetato colorido e lentes com proteção UV400. O nome é piada: filtro solar ele tem, e muito.',
  },
  {
    id: 32,
    slug: 'carteira-slim-mm',
    name: 'Carteira Slim MM',
    category: 'acessorios',
    type: 'wallet',
    price: 69.9,
    colors: [cor.grafite, cor.pessego],
    sizes: TAM_UNICO,
    tags: [],
    description: 'Couro sintético, seis divisórias pra cartões e bolso pra notas. Fininha pra caber no bolso da frente.',
  },
]

// Busca um produto pelo "slug" usado na URL (/produto/:slug)
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

// Converte o id da categoria no nome exibido (ex.: 'underwear' -> 'Underwear')
export function getCategoryName(id) {
  return categories.find((c) => c.id === id)?.name ?? id
}
