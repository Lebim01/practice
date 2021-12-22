import axios from 'axios'
import { API_TOKEN } from '@constants';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IResponseSerieMetaData } from 'interfaces/ISeries';

interface SerieResponse {
  bmx: {
    series: IResponseSerieMetaData[];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseSerieMetaData>,
) {
  const { idSerie } = req.query
  const apires = await axios.get<SerieResponse>(`https://www.banxico.org.mx/SieAPIRest/service/v1/series/${idSerie}?token=${API_TOKEN}`)
  res.send(apires.data.bmx.series[0])
}
