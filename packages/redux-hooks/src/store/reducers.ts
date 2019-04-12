import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { mapStateReducer } from 'src/mapState';
import { thunkDispatchReducer } from 'src/thunk-dispatch';
import { CounterAction, counterReducer } from '../counter/counterReducer';
import { todoReducer } from '../todo-list/todoReducer';
import { ValuesAction, valuesReducer } from '../values/valuesReducer';

export type ReduxAction = CounterAction | ValuesAction;
export type ReduxState = ReturnType<typeof reducers>;
export type ReduxThunkAction = ThunkAction<any, ReduxState, void, ReduxAction>
export const reducers = combineReducers({
  counter: counterReducer,
  mapState: mapStateReducer,
  thunkDispatch: thunkDispatchReducer,
  todo: todoReducer,
  values: valuesReducer,
});
