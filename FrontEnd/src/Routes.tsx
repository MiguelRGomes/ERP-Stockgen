import { 
  BrowserRouter, Routes as RRDRoutes, Route, Navigate, useLocation
} from 'react-router-dom'
import useAuth from './hooks/useAuth'
import Employee from './pages/Employee'
import Login from './pages/Login'
import Products from './pages/Products'
import Requisicoes from './pages/Requisicoes'
import Category from './pages/Category'


export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRoutes>
        <Route index path='/' element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        } />
        <Route path='/requests' element={
          <RequireAuth>
            <Requisicoes />
          </RequireAuth>
        } />
        <Route path='/employees' element={
          <RequireAuth>
            <Employee />
          </RequireAuth>
        } />
        <Route path='/categories' element={
          <RequireAuth>
            <Category />
          </RequireAuth>
        } />
        <Route path='/session' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </RRDRoutes>
    </BrowserRouter>
  )
}


function RequireAuth({ children }: { children: JSX.Element}) {
  const { token, loadingSession } = useAuth()
  const location = useLocation()

  console.log({token})

  if (loadingSession) {
    return <h1>Loading</h1>
  } else if (!token) {
    return <Navigate to={'/session'} state={{ from: location }} replace />
  } else {
    return (
      <div>
        {children}
      </div>
    )
  }
}

function NotFound() {
  return (
    <h1>Não encontrado</h1>
  )
}