import { applyMiddleware, createStore } from "redux";
import { batchNotifier } from "redux-batch-action";
import { batchedSubscribe } from "redux-batched-subscribe";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { reducers } from './reducers';
export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
  batchedSubscribe(batchNotifier),
))