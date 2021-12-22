import { IReduxAction } from 'interfaces/IRedux';
import { ISerie, ISeriesCatalog } from 'interfaces/ISeries';
import { TYPES } from 'redux/actions/series';

export interface ISeriesStore {
  dataCatalog: ISeriesCatalog;
  series: ISerie[];
  // persist custom view
  openedTableSerie?: ISerie; // opened serie datatable
  uncollapsedSeries: ISerie[]; // toggle open/close serie card
  uncollapsedSeriesCharts: ISerie[]; // toggle open/close serie chart
}

const defaultState: ISeriesStore = {
  dataCatalog: {
    name: '',
    series : []
  },
  series: [],
  openedTableSerie: undefined,
  uncollapsedSeries: [],
  uncollapsedSeriesCharts: []
};

export default function(state = defaultState, action: IReduxAction = { type: '', payload: null }) {
  switch(action.type) {
    case TYPES.SET_CATALOG:
      return {...state, dataCatalog: action.payload}
      
    case TYPES.SET_CATALOG_SERIES:
      const _series = [...state.series]
      const index = _series.findIndex(r => r.serieId === action.payload.serieId)
      if(index > -1){
        _series[index] = action.payload
      }else{
        _series.push(action.payload)
      }
      return {...state, series: _series}

    case TYPES.REORDER_SERIES:
      return {...state, series: action.payload}

    case TYPES.COLLAPSE_SERIE:
      /**
       * delete serie from uncollapsedSeries
       */
      const _uncollapsedSeries = [...state.uncollapsedSeries]
      const _index = _uncollapsedSeries.findIndex(r => r.serieId === action.payload.serieId)
      if(_index > -1){
        _uncollapsedSeries.splice(_index, 1)
      }
      return {...state, uncollapsedSeries: _uncollapsedSeries }

    case TYPES.UNCOLLAPSE_SERIE:
      /**
       * add serie to uncollapsedSeries
       */
       const __uncollapsedSeries = [...state.uncollapsedSeries]
       const __index = __uncollapsedSeries.findIndex(r => r.serieId === action.payload.serieId)
       if(__index === 0){
         __uncollapsedSeries.push(action.payload)
       }
       return {...state, uncollapsedSeries: __uncollapsedSeries }

    case TYPES.OPEN_TABLE_SERIE:
      return {...state, openedTableSerie: action.payload}
    default:
      return state;
  }
}