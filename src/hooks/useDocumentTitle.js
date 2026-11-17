// =========================================================
// useDocumentTitle — muda o título da aba do navegador
// ---------------------------------------------------------
// Uso: useDocumentTitle('Loja')  ->  "Loja · MM MODAS"
// Sem argumento, volta ao título padrão do site.
// =========================================================
import { useEffect } from 'react'

const SITE = 'MM MODAS'
const DEFAULT_TITLE = 'MM MODAS — Roupas com personalidade'

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : DEFAULT_TITLE
  }, [title])
}
