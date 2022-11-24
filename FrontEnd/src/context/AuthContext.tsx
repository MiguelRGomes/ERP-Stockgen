import { createContext, FC, useEffect, useState } from "react";
import api from "../services/api";

const defaultAuthContext = {
  token: null,
  user: {
    id: ''
  },
  signIn() { },
  signOut() {}
}

type auth = {
  token: string | null
  loadingSession: boolean
  signOut(redirectCallback?: VoidFunction): void
  signIn(email: string, password: string): void
}

export const AuthContext = createContext<auth>(null!)

export default function AuthProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [token, setToken] = useState<null | string>(null)
  const [loadingSession, setLoadingSession] = useState(true)
  
  useEffect(() => {
    loginFromExistingSession()
    return () => {
      if (token) localStorage.setItem('!token', token)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ token, signIn, signOut, loadingSession }}>
      {children}
    </AuthContext.Provider>
  )

  function signOut(redirectCallback?: VoidFunction) {
    localStorage.removeItem("!token")
    setToken(null)
    if (redirectCallback) redirectCallback()
  }

  async function signIn(email: string, password: string) {
    const { token } = (await api.post<{token: string}>('/session', {email, password})).data
    localStorage.setItem('!token', token)
    api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    setToken(token)
  }

  async function loginFromExistingSession() {
    setLoadingSession(true)
    const token = localStorage.getItem('!token')
    if (token) {
      api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
      setToken(token)
    }
    setLoadingSession(false)
  }
}