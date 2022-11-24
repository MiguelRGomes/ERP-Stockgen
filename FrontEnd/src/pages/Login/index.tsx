import { Container } from './styled'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo2.png'


const Login: React.FC = () => {
  const [onLogin, setOnLogin] = useState(true)
  const [email, setEmail] = useState('admin@email.com')
  const [password, setPassword] = useState('1')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = useAuth()
  const navigate = useNavigate()

  if (auth.token) {
    navigate('/')
  }

  async function signUp() {
    setLoading(true)
    try {
      await api.post('/user', {
        name, email, password
      })
      setName('')
      setEmail('')
      setPassword('')
    } catch {

    }
    setLoading(false)
  }

  return (

    <Container>
      <div className='image'>
        <img src={Logo} height='100%' alt='Logo'/>
      </div>
      {
        onLogin ? (
          <form action="">
            <TextField label="Email" variant='outlined'
              value={email} onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <TextField label="Senha" variant='outlined' type='password'
              value={password} onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />
            <div>
              <Button variant='contained'
                onClick={() => {
                  auth.signIn(email, password)
                  navigate('/')
                }}
                disabled={loading}
              >
                Entrar
              </Button>
              <Button variant='outlined' onClick={() => setOnLogin(false)} disabled={loading} >
                Registrar-se
              </Button>
            </div>
          </form>
        ) : (
          <form action="">
            <TextField label="Nome" variant='outlined'
              value={name} onChange={e => setName(e.target.value)}
              disabled={loading}
            />
            <TextField label="Email" variant='outlined'
              value={email} onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <TextField label="Senha" variant='outlined' type='password'
              value={password} onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />
            <div>
              <Button variant='contained' disabled={loading}
                onClick={() => signUp()}
              >
                Registrar
              </Button>
              <Button variant='outlined' onClick={() => setOnLogin(true)} disabled={loading}>
                Ja tenho uma conta
              </Button>
            </div>
          </form>
        )
      }

    </Container>
  )
}


export default Login