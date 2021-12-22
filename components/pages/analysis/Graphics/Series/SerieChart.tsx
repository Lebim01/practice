import { useState } from 'react'
import axios from 'axios'
import SerieChartCard from "components/UI/SerieChartCard/SerieChartCard"
import { IResponseSerieData, IResponseSerieMetaData, ISerie } from "interfaces/ISeries"
import { useEffect } from 'react'

interface Props {
  serie: ISerie;
}

const SerieChart = (props: Props) => {
  const [serieMetadata, setSerieMetadata] = useState<IResponseSerieMetaData | null>(null)
  const [serieData, setSerieData] = useState<IResponseSerieData[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      const meta = await axios.get(`/api/bmx/${props.serie.serieId}`)
      const data = await axios.get(`/api/bmx/${props.serie.serieId}/datos`)
      setSerieMetadata(meta.data)
      setSerieData(data.data)
    }catch(err: any){
      setError(err.toString())
    }
  }

  useEffect(() => {
    loadData()
  }, [props.serie.serieId])

  if(error) return <p>{error}</p>

  if(serieMetadata === null || serieData === null) return null

  return (
    <SerieChartCard serie={props.serie} metadata={serieMetadata} data={serieData} />
  )
}

export default SerieChart