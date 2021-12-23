import React, { useMemo } from 'react'
import styled from 'styled-components'
import { IResponseSerieData, IResponseSerieMetaData, ISerie } from "interfaces/ISeries"
import {Button, Card} from 'react-bootstrap'
import {BsPlus, BsChevronDown, BsChevronLeft} from 'react-icons/bs'
import Separator from './Separator'
import LineChart from 'components/UI/Chart/LineChart'
import MiniLineChart from '../Chart/MiniLineChart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSerie } from 'redux/actions/series'
import {IReduxState} from 'interfaces/IRedux'
import useWindowSize, { MD } from 'hooks/useWindowSize'
import ToggleButtons from './SerieToggleButtons'

interface Props {
  serie: ISerie;
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
  const { deviceSize } = useWindowSize()

  const dispatch = useDispatch()
  const isOpenChart = useSelector((state: IReduxState) => !!state.series.uncollapsedSeriesCharts.find(r => r.serieId === props.serie.serieId))
  const isOpenCard = useSelector((state: IReduxState) => !!state.series.uncollapsedSeries.find(r => r.serieId === props.serie.serieId))

  const ultimoValor = useMemo(() => props.serie.data![props.serie.data!.length-1], [props.serie.data])
  const penultimoValor = useMemo(() => props.serie.data![props.serie.data!.length-2], [props.serie.data])
  const cambioPorcentual = useMemo(() => calcCambioPorcentual(ultimoValor, penultimoValor), [ultimoValor, penultimoValor])
  const chartData = useMemo(() => props.serie.data!.map(formatData), [props.serie.data])

  const _toggleSerie = () => {
    dispatch(toggleSerie(props.serie))
  }

  const responsive = deviceSize <=  MD

  return (
    <CustomCard>
      <CustomHeader>
        {props.serie.name}
        {!responsive && 
          <>
            <Separator />
            <AlignCenter>
              <Puntito /> 
              {ultimoValor.dato}
            </AlignCenter>
            <Separator />
            {props.serie.metadata!.fechaFin}
            <Separator />
            <MiniLineChart width={100} height={35} data={chartData} />
            <ToggleButtons serie={props.serie} />
          </>
        }
        <HeaderRight>
          <CustomButtonOutlined className="serie-toggle-card" variant='outline-dark' onClick={_toggleSerie}>
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
                <td>{props.serie.metadata!.unidad}</td>
                <td>
                  <CambioPorcentual value={cambioPorcentual}>
                    <BsPlus size={12} />{cambioPorcentual}%{' '}
                  </CambioPorcentual>
                </td>
                <td>{props.serie.data![0].dato}</td>
                <td>{props.serie.data![0].fecha}</td>
                <td>{props.serie.metadata!.periodicidad}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {responsive && 
          <AlignHorizontal>
            <ToggleButtons serie={props.serie} />
          </AlignHorizontal>
        }

        <br />

        <BodyChart open={isOpenChart}>
          {isOpenChart && <LineChart width={'100%'} height={300} data={chartData} />}
        </BodyChart>
      </CustomBody>
    </CustomCard>
  )
})

SerieChartCard.displayName = 'SerieChartCard'

const CustomCard = styled(Card)`
  border-top: 5px solid #202837 !important;
  border-bottom: 5px solid #202837 !important;
`

const AlignCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

const AlignHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  border: unset !important;
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

const CustomButtonOutlined = styled(Button)`
  border: unset;
`

const BodyChart = styled.div<any>`
  height: ${props => props.open ? '300px' : '0px'};
  transition: height 0.5s;
`

export default SerieChartCard