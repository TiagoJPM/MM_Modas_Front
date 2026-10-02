// =========================================================
// UserContext — usuário cadastrado (cliente ou funcionário)
// ---------------------------------------------------------
// Guarda o cadastro feito na página /cadastro e deixa disponível
// para o site inteiro com useUser(). É usado para:
//  - mostrar "Olá, Nome" no header;
//  - liberar o checkout (só finaliza compra quem tem cadastro);
//  - preencher automaticamente o endereço de entrega.
// Obs.: projeto só de front-end, então o cadastro fica no
// localStorage do navegador (não existe servidor/banco de dados).
// =========================================================
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext(null)
const STORAGE_KEY = 'mm-modas:usuario'

// Lê o usuário salvo anteriormente (se existir)
function loadUser() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(loadUser)

  // Mantém o localStorage sincronizado com o estado
  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* sem armazenamento: segue só em memória */
    }
  }, [user])

  // Salva o cadastro. A senha NÃO é guardada (em um sistema real,
  // ela iria para o servidor já criptografada).
  const register = (data) => {
    // eslint-disable-next-line no-unused-vars
    const { senha, confirmarSenha, ...safeData } = data
    setUser({ ...safeData, criadoEm: new Date().toISOString() })
  }

  // "Sair": apaga o cadastro deste navegador
  const logout = () => setUser(null)

  return <UserContext.Provider value={{ user, register, logout }}>{children}</UserContext.Provider>
}

// Hook de acesso: const { user, register, logout } = useUser()
// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser precisa estar dentro de <UserProvider>')
  return ctx
}
