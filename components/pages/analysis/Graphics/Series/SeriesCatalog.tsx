import styled from 'styled-components'
import { ISeriesCatalog } from "interfaces/ISeries"
import {Card} from 'react-bootstrap'
import SerieChart from './SerieChart'

interface Props {
  catalog: ISeriesCatalog;
}

const SeriesCatalog = (props: Props) => {
  return (
    <Card style={{ flex: 1 }}>
      <Card.Header className="catalog-name">{props.catalog.name}</Card.Header>
      <CustomBody className="serie-cards">
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
  height: 100%;
`

export default SeriesCatalog