import axios from 'axios'
import { API_TOKEN } from '@constants';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IResponseSerieData } from 'interfaces/ISeries';

interface SerieResponse {
  bmx: {
    series: {
      datos: IResponseSerieData[]
    }[];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseSerieData[]>,
) {
  const { idSerie } = req.query
  const apires = await axios.get<SerieResponse>(`https://www.banxico.org.mx/SieAPIRest/service/v1/series/${idSerie}/datos/2021-01-01/2021-12-31?token=${API_TOKEN}`)
  res.send(apires.data.bmx.series[0].datos)
}