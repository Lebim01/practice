import { useEffect, useState } from 'react'
import axios from 'axios'
import SeriesCatalog from './Series/SeriesCatalog'
import { useDispatch, useSelector } from 'react-redux'
import { setCatalog } from 'redux/actions/series'
import { IReduxState } from 'interfaces/IRedux'

const GraphicsContainer = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState<string | null>(null)
  const dataCatalog = useSelector((state: IReduxState) => state.series.dataCatalog)

  const loadCatalog = async () => {
    try {
      const res = await axios.get(`/api/bmx`)
      dispatch(setCatalog(res.data))
    }catch(err){
      setError('Error al cargar los datos')
    }
  }

  useEffect(() => {
    if(dataCatalog.series.length === 0) loadCatalog()
  }, [dataCatalog.series])

  if(error) return <p>{error}</p>

  if(dataCatalog.series.length === 0) return null

  return (
    <div>
      <SeriesCatalog catalog={dataCatalog} />
    </div>
  )
}

export default GraphicsContainer