// =========================================================
// Regras de negócio do carrinho (fáceis de ajustar em um só lugar)
// =========================================================

// A partir deste subtotal (R$) o frete é grátis
export const FRETE_GRATIS_A_PARTIR = 299

// Valor do frete quando o subtotal é menor que o limite acima
export const VALOR_FRETE = 19.9

// Cupons válidos: código -> percentual de desconto (0.1 = 10%)
export const CUPONS = { MENINOMAU10: 0.1 }
