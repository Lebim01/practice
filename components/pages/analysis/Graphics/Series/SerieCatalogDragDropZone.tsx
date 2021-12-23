import styled from 'styled-components'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { reorderSeries, setCatalog } from 'redux/actions/series'
import { reorder } from 'utils/array';
import { IReduxState } from 'interfaces/IRedux';
import { ReactElement } from 'react';

interface Props {
  children: (dropProvided: any, dropSnapshot: any) => ReactElement;
}

const SerieCatalogDragDropZone = (props: Props) => {
  const dispatch = useDispatch()
  const catalog = useSelector((state: IReduxState) => state.series.dataCatalog)
  const series = useSelector((state: IReduxState) => state.series.series)

  function onDragStart() {
    // Add a little vibration if the browser supports it.
    // Add's a nice little physical feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  }

  function onDragEnd(result: DropResult) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const seriesOrdered = reorder(
      series,
      result.source.index,
      result.destination.index
    )
    
    dispatch(reorderSeries(seriesOrdered));
    dispatch(setCatalog({...catalog , series: seriesOrdered}))
  }
  
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(dropProvided, dropSnapshot) => 
          <DropZone 
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
            {...dropProvided.droppableProps}
            style={{ flex: 1 }}
          >
            {props.children(dropProvided, dropSnapshot)}
          </DropZone>
        }
      </Droppable>
    </DragDropContext>
  )
}

const DropZone = styled.div<any>``

export default SerieCatalogDragDropZone