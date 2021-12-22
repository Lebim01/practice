import { ISeriesCatalog, ISerie } from "interfaces/ISeries"

export const TYPES = {
  "SET_CATALOG": "SERIES.SET_CATALOG",
  "SET_CATALOG_SERIES": "SERIES.SET_CATALOG_SERIES",
  "TOGGLE_SERIE": "SERIES.TOGGLE_SERIE",
  "TOGGLE_DATATABLE": "SERIES.TOGGLE_DATATABLE",
  "REORDER_SERIES": "SERIES.REORDER_SERIES",
  "TOGGLE_CHART_SERIE": "SERIES.TOGGLE_CHART_SERIE"
}

export const setCatalog = (catalog: ISeriesCatalog) => {
  return {
    type: TYPES.SET_CATALOG,
    payload: catalog
  }
}

export const setCatalogSeries = (serie: ISerie) => {
  return {
    type: TYPES.SET_CATALOG_SERIES,
    payload: serie
  }
}

export const toggleSerie = (serie: ISerie) => {
  return {
    type: TYPES.TOGGLE_SERIE,
    payload: serie
  }
}

export const toggleDataTable = (serie: ISerie) => {
  return {
    type: TYPES.TOGGLE_DATATABLE,
    payload: serie
  }
}

export const toggleChart = (serie: ISerie) => {
  return {
    type: TYPES.TOGGLE_CHART_SERIE,
    payload: serie
  }
}

export const reorderSeries = (series: ISerie[]) => {
  return {
    type: TYPES.REORDER_SERIES,
    payload: series
  }
}