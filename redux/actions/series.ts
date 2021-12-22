import { ISeriesCatalog, ISerie } from "interfaces/ISeries"

export const TYPES = {
  "SET_CATALOG": "SERIES.SET_CATALOG",
  "SET_CATALOG_SERIES": "SERIES.SET_CATALOG_SERIES",
  "UNCOLLAPSE_SERIE": "SERIES.UNCOLLAPSE_SERIE",
  "COLLAPSE_SERIE": "SERIES.COLLAPSE_SERIE",
  "OPEN_TABLE_SERIE": "SERIES.OPEN_TABLE_SERIE",
  "REORDER_SERIES": "SERIES.REORDER_SERIES"
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

export const uncollapseSerie = (serie: ISerie) => {
  return {
    type: TYPES.UNCOLLAPSE_SERIE,
    payload: serie
  }
}

export const collapseSerie = (serie: ISerie) => {
  return {
    type: TYPES.COLLAPSE_SERIE,
    payload: serie
  }
}

export const openTableSerie = (serie: ISerie) => {
  return {
    type: TYPES.OPEN_TABLE_SERIE,
    payload: serie
  }
}

export const reorderSeries = (series: ISerie[]) => {
  return {
    type: TYPES.REORDER_SERIES,
    payload: series
  }
}