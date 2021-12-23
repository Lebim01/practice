import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import {BiLineChart} from 'react-icons/bi'
import {BsListUl} from 'react-icons/bs'
import {toggleChart, toggleDataTable} from 'redux/actions/series'
import { ISerie } from 'interfaces/ISeries'
import { IReduxState } from 'interfaces/IRedux'

interface Props {
  serie: ISerie;
}

const SerieToggleButtons = (props: Props) => {
  const dispatch = useDispatch()
  const isOpenChart = useSelector((state: IReduxState) => !!state.series.uncollapsedSeriesCharts.find(r => r.serieId === props.serie.serieId))
  const isOpenTable = useSelector((state: IReduxState) => state.series.openedTableSerie?.serieId === props.serie.serieId)

  const _toggleChart = () => {
    dispatch(toggleChart(props.serie))
  }

  const _toggleDataTable = () => {
    dispatch(toggleDataTable(props.serie))
  }

  return (
    <>
      <CustomButton className="serie-toggle-chart" active={isOpenChart} variant="outline-dark" onClick={_toggleChart}>
        <BiLineChart size={20} />
      </CustomButton>
      <CustomButton className="serie-toggle-data-table" active={isOpenTable} variant='outline-dark' onClick={_toggleDataTable}>
        <BsListUl size={20} />
      </CustomButton>
    </>
  )
}

const CustomButton = styled(Button)`
  padding: 5px 8px !important;
  ${props => props.active && `
    background-color: #FFFFFF !important;
    * {
      color: #000 !important;
    }
  `}
`


export default SerieToggleButtons