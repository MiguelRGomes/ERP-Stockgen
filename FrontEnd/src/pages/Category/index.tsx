import { useEffect, useState } from 'react'
import { Container } from './styled'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import api from '../../services/api'


const cols: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nome',
    flex: 1
  } 
]


const Category: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    (async() => {
      let data
      try {
        data = (await api.get('/category')).data

      } catch(e) {
        console.log(e)
      }
      if (data) {
        setCategories(data)
      }
      console.log({data})
    })()
  }, [])

  return (
    <Container>
      <div className='table-container'>
        <h2>Categorias</h2>
        <DataGrid 
          columns={cols}
          rows={categories}
          autoHeight
          density='compact'
          hideFooter
        />
      </div>
    </Container>
  )
}


export default Category