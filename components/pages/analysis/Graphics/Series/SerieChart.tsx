import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import SerieChartCard from "components/UI/SerieChartCard/SerieChartCard"
import { IReduxState } from 'interfaces/IRedux'
import { setCatalogSeries } from 'redux/actions/series'
import { ISerie } from 'interfaces/ISeries'

interface Props {
  serie: ISerie;
}

const SerieChart = (props: Props) => {
  const dispatch = useDispatch()
  const serieData = useSelector((state: IReduxState) => state.series.series.find(r => r.serieId === props.serie.serieId))
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      const meta = await axios.get(`/api/bmx/${props.serie.serieId}`)
      const data = await axios.get(`/api/bmx/${props.serie.serieId}/datos`)
      dispatch(setCatalogSeries({
        ...props.serie,
        metadata: meta.data,
        data: data.data
      }))
    }catch(err: any){
      setError(err.toString())
    }
  }

  useEffect(() => {
    if(!serieData?.data || !serieData?.metadata) loadData()
  }, [props.serie.serieId])

  if(error) return <p>{error}</p>

  if(!serieData?.data || !serieData?.metadata) return null

  return (
    <SerieChartCard serie={serieData} />
  )
}

export default SerieChart