import styled from 'styled-components'
import { ISeriesCatalog } from "interfaces/ISeries"
import {Card} from 'react-bootstrap'
import SerieChart from './SerieChart'
import SerieCatalogDragDropZone from './SerieCatalogDragDropZone'
import SerieCatalogItemDraggable from './SerieCatalogItemDraggable'
import { useSelector } from 'react-redux'
import { IReduxState } from 'interfaces/IRedux'
interface Props {
  catalog: ISeriesCatalog;
}

const DropZone = styled.div``;

const SeriesCatalog = (props: Props) => {
  return (
    <Card style={{ flex: 1 }}>
      <Card.Header className="catalog-name">{props.catalog.name}</Card.Header>
      <SerieCatalogDragDropZone>
        {(dropProvided) => 
          <CustomBody className="serie-cards">
            <DropZone ref={dropProvided.innerRef}>
              {props.catalog.series.map((serie, idx) => 
                <SerieCatalogItemDraggable key={serie.serieId} item={serie} idx={idx}>
                  <SerieChart serie={serie} idx={idx} />
                </SerieCatalogItemDraggable>
              )}
              {dropProvided.placeholder}
            </DropZone>
          </CustomBody>
        }
      </SerieCatalogDragDropZone>
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