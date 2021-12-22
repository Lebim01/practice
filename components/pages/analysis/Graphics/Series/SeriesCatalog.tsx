import styled from 'styled-components'
import { ISeriesCatalog } from "interfaces/ISeries"
import {Card} from 'react-bootstrap'
import SerieChart from './SerieChart'

interface Props {
  catalog: ISeriesCatalog;
}

const SeriesCatalog = (props: Props) => {
  return (
    <Card>
      <Card.Header>{props.catalog.name}</Card.Header>
      <CustomBody>
        {props.catalog.series.map((serie, idx) => 
          <SerieChart serie={serie} key={serie.serieId} />
        )}
      </CustomBody>
    </Card>
  )
}

const CustomBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  gap: 11px;
`

export default SeriesCatalog