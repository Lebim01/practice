import React, { useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import { IResponseSerieData, IResponseSerieMetaData, ISerie } from "interfaces/ISeries"
import {Card} from 'react-bootstrap'
import {BsPlus} from 'react-icons/bs'
import Separator from './Separator'
import { useMemo } from 'react'
import LineChart from 'components/UI/Chart/LineChart'
import MiniLineChart from '../Chart/MiniLineChart'

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
  const ultimoValor = useMemo(() => props.data[props.data.length-1], [props.data])
  const penultimoValor = useMemo(() => props.data[props.data.length-2], [props.data])
  const cambioPorcentual = useMemo(() => calcCambioPorcentual(ultimoValor, penultimoValor), [ultimoValor, penultimoValor])
  const chartData = useMemo(() => props.data.map(formatData), [props.data])

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
      </CustomHeader>

      <CustomBody>
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

        <LineChart width={'100%'} height={300} data={chartData} />
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

const CustomBody = styled(Card.Body)`
  background-color: #202837 !important;
  font-size: 12px;
  max-width: 100%;
  transition: height 0.5s;
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

export default SerieChartCard