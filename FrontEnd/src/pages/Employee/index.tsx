import { useEffect, useState } from 'react'
import { Container } from './styled'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { product } from '../../types/product'
import api from '../../services/api'


const cols: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nome',
    flex: 1
  },
  {
    field: 'cpf',
    headerName: 'CPF',
    flex: 1
  },
  {
    field: 'birthDate',
    headerName: 'Aniversário',
    flex: 1
  },
  {
    field: 'role',
    headerName: 'Função',
    width: 150
  },
  {
    field: 'admissionDate',
    headerName: 'Data de Admissão',
    flex: 1
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1
  }
]


const Employee: React.FC = () => {
  const [employees, setemployees] = useState<any[]>([])

  useEffect(() => {
    (async() => {
      let data
      try {
        data = (await api.get('/employee')).data
      } catch(e) {
        console.log(encodeURI)
      }
      if (data) {
        setemployees(data)
      }
      console.log({data})
    })()
  }, [])

  return (
    <Container>
      <div className='table-container'>
        <h2>Empregados</h2>
        <DataGrid 
          getRowId={data => data.cpf}
          columns={cols}
          rows={employees}
          autoHeight
          density='compact'
          hideFooter
        />
      </div>
    </Container>
  )
}


export default Employee