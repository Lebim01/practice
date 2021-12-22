import { useEffect, useState } from 'react'
import axios from 'axios'
import { ISeriesCatalog } from 'interfaces/ISeries'
import SeriesCatalog from './Series/SeriesCatalog'

const GraphicsContainer = () => {
  const [seriesCatalog, setSeriesCatalog] = useState<ISeriesCatalog | null>(null)

  const loadCatalog = async () => {
    const res = await axios.get(`/api/bmx`)
    setSeriesCatalog(res.data)
  }

  useEffect(() => {
    loadCatalog()
  }, [])

  if(seriesCatalog === null) return null

  return (
    <div>
      <SeriesCatalog catalog={seriesCatalog} />
    </div>
  )
}

export default GraphicsContainer