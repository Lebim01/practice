import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SeriesCatalog from './Series/SeriesCatalog'
import SeriesDataTable from './Series/SerieDataTable'
import { useDispatch, useSelector } from 'react-redux'
import { setCatalog } from 'redux/actions/series'
import { IReduxState } from 'interfaces/IRedux'
import useWindowSize, { LG } from 'hooks/useWindowSize'

const GraphicsContainer = () => {
  const dispatch = useDispatch()
  const dataCatalog = useSelector((state: IReduxState) => state.series.dataCatalog)
  const isOpenDataTable = useSelector((state: IReduxState) => !!state.series.openedTableSerie)

  const { deviceSize } = useWindowSize()
  const responsive = deviceSize <= LG

  const [error, setError] = useState<string | null>(null)


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
    <CustomGraphicsContainer responsive={responsive}>
      <SeriesCatalog catalog={dataCatalog} />
      {isOpenDataTable && <SeriesDataTable />}
    </CustomGraphicsContainer>
  )
}

const CustomGraphicsContainer = styled.div<any>`
  display: flex;
  flex-direction: ${props => props.responsive ? 'column' : 'row'};
  gap: 5px;
  flex: 1;
`

export default GraphicsContainer