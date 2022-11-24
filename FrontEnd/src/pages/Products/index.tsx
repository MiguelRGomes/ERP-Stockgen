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
    field: 'price',
    headerName: 'Preço',
    flex: 1
  },
  {
    field: 'quantity',
    headerName: 'Quantidade',
    width: 200
  }
]

const Products: React.FC = () => {
  const [products, setProducts] = useState<product[]>([])

  useEffect(() => {
    (async() => {
      let data
      try {
        data = (await api.get('/product')).data
      } catch(e) {
        console.log(encodeURI)
      }
      if (data) {
        setProducts(data)
      }
      console.log({data})
    })()
  }, [])

  return (
    <Container>
      <div className='table-container'>
        <h2>Produtos</h2>
        <DataGrid 
          columns={cols}
          rows={products}
          autoHeight
          density='compact'
          hideFooter
        />
      </div>
    </Container>
  )
}


export default Products