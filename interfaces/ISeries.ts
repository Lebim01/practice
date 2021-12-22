export type ISerie = {
  name: string;
  serieId: string;
  metadata?: IResponseSerieMetaData;
  data?: IResponseSerieData[];
}

export type ISeriesCatalog = {
  name: string;
  series: ISerie[];
}

export interface IResponseSerieMetaData {
  cifra: string;
  fechaFin: string;
  fechaInicio: string;
  idSerie: string;
  periodicidad: string;
  titulo: string;
  unidad: string;
  versionada: boolean;
}

export interface IResponseSerieData {
  dato: string;
  fecha: string;
}