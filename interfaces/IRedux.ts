import { ISeriesStore } from "redux/reducers/series";

export interface IReduxState {
  series: ISeriesStore;
}

export interface IReduxAction {
  type: string;
  payload: any;
}