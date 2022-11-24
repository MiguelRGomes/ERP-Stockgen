import { useEffect, useState } from 'react'
import { Container } from './styled'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { product } from '../../types/product'
import api from '../../services/api'


const cols: GridColDef[] = [
  {
    field: 'nameEmployee',
    headerName: 'Empregado',
    flex: 1
  },
  {
    field: 'product',
    headerName: 'Produto',
    flex: 1
  },
  {
    field: 'quantity',
    headerName: 'Quantidade',
    width: 200
  }
]


const Requisicoes: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([])

  useEffect(() => {
    (async() => {
      let data
      try {
        data = (await api.get('/request')).data
      } catch(e) {
        console.log(encodeURI)
      }
      if (data) {
        setRequests(data)
      }
      console.log({data})
    })()
  }, [])

  return (
    <Container>
      <div className='table-container'>
        <h2>Pedidos</h2>
        <DataGrid 
          columns={cols}
          rows={requests}
          autoHeight
          density='compact'
          hideFooter
        />
      </div>
    </Container>
  )
}


export default Requisicoes