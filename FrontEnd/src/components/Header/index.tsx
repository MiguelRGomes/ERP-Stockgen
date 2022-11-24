import { Container } from './styled'
import IconButton from '@mui/material/IconButton'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import useAuth from '../../hooks/useAuth'
import Logo from '../../assets/Logo.png'

const Header: React.FC = () => {
  const { signOut, token } = useAuth()
  return (
    <Container>
      <div className='nav'>
        <h1>Stockgen</h1>
        <div className='image'>
          <img src={Logo} alt='Logo' height='100%'/>
        </div>
        <nav>
          {
            token && (
            <ul>
              <li><a href='/'>Produtos</a></li>
              <li><a href='/requests'>Pedidos</a></li>
              <li><a href='/Employees'>Empregados</a></li>
              <li><a href='/categories'>Categorias</a></li>
            </ul>
            )
          }
        </nav>
      </div>
      <div className='signout'>
        {
          token && (
          <IconButton
            onClick={() => signOut()}
          >
            <ExitToAppIcon 
              sx={{color: 'white'}}
            />
          </IconButton>
          )
        }
      </div>
    </Container>
  )
}


export default Header