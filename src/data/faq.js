// =========================================================
// Perguntas frequentes (FAQ)
// ---------------------------------------------------------
// Usadas em dois lugares:
//  - página Contato: lista as perguntas (cada uma com id="faq-<id>");
//  - rodapé (coluna "Ajuda"): cada link leva direto à pergunta,
//    ex.: /contato#faq-trocas abre e rola até "Trocas e devoluções".
// =========================================================
export const faq = [
  {
    id: 'entrega',
    label: 'Prazo de entrega',
    q: 'Qual o prazo de entrega?',
    a: 'De 3 a 8 dias úteis, dependendo da sua região. Assim que o pedido sai, você recebe o código de rastreio por e-mail.',
  },
  {
    id: 'trocas',
    label: 'Trocas e devoluções',
    q: 'Como faço uma troca ou devolução?',
    a: 'Você tem até 30 dias depois de receber. Chama a gente pelo formulário ou WhatsApp — a primeira troca é por nossa conta.',
  },
  {
    id: 'pagamento',
    label: 'Formas de pagamento',
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Pix (aprovação na hora), cartão de crédito em até 3x sem juros e boleto (vence em 2 dias úteis).',
  },
  {
    id: 'tamanhos',
    label: 'Guia de tamanhos',
    q: 'Como escolho o tamanho certo?',
    a: 'Nossas camisetas e moletons têm modelagem mais solta. Na dúvida entre dois tamanhos, vai no menor. Calças seguem a numeração 38 a 46.',
  },
  {
    id: 'cadastro',
    label: 'Cadastro e conta',
    q: 'Preciso de cadastro para comprar?',
    a: 'Sim. Para finalizar a compra é preciso ter cadastro (cliente ou funcionário). Leva 1 minuto e o endereço já fica salvo pra próxima.',
  },
]
