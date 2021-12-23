import useWindowSize, { LG } from "hooks/useWindowSize"
import { IReduxState } from "interfaces/IRedux"
import { useSelector } from "react-redux"
import styled from "styled-components"
import {BsListUl} from 'react-icons/bs'

const SeriesDataTable = () => {
  const datatable = useSelector((state: IReduxState) => state.series.openedTableSerie)
  const { deviceSize } = useWindowSize()

  const responsive = deviceSize <= LG

  return (
    <SerieDataTable responsive={responsive} id="data-table">
      <DataTableTitle>
        <BsListUl size={20} />
        <span id="data-table-title">{datatable?.name}</span>
      </DataTableTitle>
      <Table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {datatable && datatable.data && datatable.data.map((data => 
            <tr>
              <td>{data.fecha}</td>
              <td>{data.dato}</td>
            </tr>  
          ))}
        </tbody>
      </Table>
    </SerieDataTable>
  )
}

const SerieDataTable = styled.div<any>`
  width: ${props => props.responsive ? '100%' : '320px'};
  border: 1px solid white;
  border-radius: 4px;
`

const DataTableTitle = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const Table = styled.table`
  width: 100%;
  text-align: center;

  thead {
    background-color: #000;
  }

  th {
    border-bottom: 1px solid #fff;
  }

  td {
    border-bottom: 1px solid #444;
  }
`

export default SeriesDataTable