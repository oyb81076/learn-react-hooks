import { combineReducers } from 'redux';
import { todoReducer } from '../todo-list/todoReducer';
import { CounterAction, counterReducer } from './counterReducer';
import { TimerAction, timerReducer } from './timerReducer';

export type ReduxAction = TimerAction | CounterAction;
export type ReduxState = ReturnType<typeof reducers>;
export const reducers = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
  todo: todoReducer,
});
