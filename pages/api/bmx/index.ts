import { ISeriesCatalog } from 'interfaces/ISeries';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISeriesCatalog>,
) {
  res.send(
    {
      name: 'Banco de México',
      series: [
        {
          name: 'Gasto total',
          serieId: 'SG46'
        },
        {
          name: 'Gasto programable',
          serieId: 'SG47'
        },
        {
          name: 'Gasto corriente',
          serieId: 'SG44'
        }
      ]
    }
  )
}
