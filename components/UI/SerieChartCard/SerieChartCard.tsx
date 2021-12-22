import React, { useMemo } from 'react'
import styled from 'styled-components'
import { IResponseSerieData, IResponseSerieMetaData, ISerie } from "interfaces/ISeries"
import {Button, Card} from 'react-bootstrap'
import {BsPlus, BsListUl, BsChevronDown, BsChevronLeft} from 'react-icons/bs'
import {BiLineChart} from 'react-icons/bi'
import Separator from './Separator'
import LineChart from 'components/UI/Chart/LineChart'
import MiniLineChart from '../Chart/MiniLineChart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleChart, toggleSerie, toggleDataTable } from 'redux/actions/series'
import {IReduxState} from 'interfaces/IRedux'

interface Props {
  serie: ISerie;
  metadata: IResponseSerieMetaData;
  data: IResponseSerieData[];
}

const parseNumber = (value: string): number => {
  return parseFloat(value.replace(/,/g, ''))
}

const calcCambioPorcentual = (ultimo: IResponseSerieData, penultimo: IResponseSerieData): number => {
  const res = 100*(parseNumber(ultimo.dato) - parseNumber(penultimo.dato))/parseNumber(penultimo.dato)
  return Math.ceil(res * 100)/100
}

const formatData = (item: IResponseSerieData): { name: string, value: number } => {
  return {
    name: item.fecha,
    value: parseNumber(item.dato)/ 1000000
  }
}

const SerieChartCard = React.memo((props: Props) => {
  const dispatch = useDispatch()
  const isOpenChart = useSelector((state: IReduxState) => !!state.series.uncollapsedSeriesCharts.find(r => r.serieId === props.serie.serieId))
  const isOpenCard = useSelector((state: IReduxState) => !!state.series.uncollapsedSeries.find(r => r.serieId === props.serie.serieId))
  const isOpenTable = useSelector((state: IReduxState) => state.series.openedTableSerie?.serieId === props.serie.serieId)

  const ultimoValor = useMemo(() => props.data[props.data.length-1], [props.data])
  const penultimoValor = useMemo(() => props.data[props.data.length-2], [props.data])
  const cambioPorcentual = useMemo(() => calcCambioPorcentual(ultimoValor, penultimoValor), [ultimoValor, penultimoValor])
  const chartData = useMemo(() => props.data.map(formatData), [props.data])

  const _toggleChart = () => {
    dispatch(toggleChart(props.serie))
  }

  const _toggleSerie = () => {
    dispatch(toggleSerie(props.serie))
  }

  const _toggleDataTable = () => {
    dispatch(toggleDataTable(props.serie))
  }

  return (
    <Card>
      <CustomHeader>
        {props.serie.name}
        <Separator />
        <AlignCenter>
          <Puntito /> 
          {ultimoValor.dato}
        </AlignCenter>
        <Separator />
        {props.metadata.fechaFin}
        <Separator />
        <MiniLineChart width={100} height={35} data={chartData} />
        <CustomButton active={isOpenChart} variant="outline-dark" onClick={_toggleChart}>
          <BiLineChart size={20} />
        </CustomButton>
        <CustomButton active={isOpenTable} variant='outline-dark' onClick={_toggleDataTable}>
          <BsListUl size={20} />
        </CustomButton>
        <HeaderRight>
          <CustomButtonOutlined variant='outline-dark' onClick={_toggleSerie}>
            {isOpenCard ? <BsChevronDown /> : <BsChevronLeft />}
          </CustomButtonOutlined>
        </HeaderRight>
      </CustomHeader>

      <CustomBody open={isOpenCard}>
        <div style={{ overflow: 'auto', paddingBottom: 10 }}>
          <Table>
            <thead>
              <tr>
                <td>Serie ID</td>
                <td>Título</td>
                <td>Última fecha</td>
                <td>Último valor</td>
                <td>Unidad</td>
                <td>Cambio porcentual(%)</td>
                <td>Fecha inicio</td>
                <td>Fecha fin</td>
                <td>Periodicidad</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.serie.serieId}</td>
                <td>{props.serie.name}</td>
                <td>{ultimoValor.fecha}</td>
                <td>{ultimoValor.dato}</td>
                <td>{props.metadata.unidad}</td>
                <td>
                  <CambioPorcentual value={cambioPorcentual}>
                    <BsPlus size={12} />{cambioPorcentual}%{' '}
                  </CambioPorcentual>
                </td>
                <td>{props.data[0].dato}</td>
                <td>{props.data[0].fecha}</td>
                <td>{props.metadata.periodicidad}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />

        <BodyChart open={isOpenChart}>
          {isOpenChart && <LineChart width={'100%'} height={300} data={chartData} />}
        </BodyChart>
      </CustomBody>
    </Card>
  )
})

SerieChartCard.displayName = 'SerieChartCard'

const AlignCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

const Puntito = styled.div`
  background-color: #FFFFFF;
  border-radius: 50%;
  height: 6px;
  width: 6px;
`

const CustomHeader = styled(Card.Header)`
  background-color: #000000 !important;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`

const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const CustomBody = styled(Card.Body)`
  background-color: #202837 !important;
  font-size: 12px;
  max-width: 100%;
  display: ${props => props.open ? 'unset' : 'none'};
`

const Table = styled.table`
  width: 100%;
  overflow: auto;

  td:not(:first-child) {
    border-left: 1px solid white;
  }

  td {
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
  }
`

const CambioPorcentual = styled.div<any>`
  background-color: ${props => props.value > 0 ? '#48BB7833' : '#E31B0D' };
  display: inline-block;

  svg {
    fill: ${props => props.value > 0 ? '#48BB78' : '#E31B0D' };
  }
`

const CustomButton = styled(Button)`
  padding: 5px 8px !important;
  ${props => props.active && `
    background-color: #FFFFFF !important;
    * {
      color: #000 !important;
    }
  `}
`

const CustomButtonOutlined = styled(CustomButton)`
  border: unset;
`

const BodyChart = styled.div<any>`
  height: ${props => props.open ? '300px' : '0px'};
  transition: height 0.5s;
`

export default SerieChartCard