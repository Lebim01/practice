import { Draggable } from 'react-beautiful-dnd';
import DraggableContextProvider from 'context/draggable'
import { ISerie } from 'interfaces/ISeries';
import { ReactNode } from 'react';

interface Props {
  item: ISerie;
  idx: number;
  children: ReactNode;
}

const SerieCatalogItemDraggable = ({ item, idx, ...props }: Props) => {
  return (
    <div>
      <Draggable draggableId={item.serieId} index={idx}>
        {(dragProvided, dragSnapshot) => 
          <DraggableContextProvider 
            provided={dragProvided} 
            isDragging={dragSnapshot.isDragging} 
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
          >
            {props.children}
          </DraggableContextProvider>
        }
      </Draggable>
    </div>
  )
}

export default SerieCatalogItemDraggable