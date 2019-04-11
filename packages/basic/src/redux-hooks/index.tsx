import * as React from "react";
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { ReduxStoreContext } from './hooks';
import { ReduxHooks } from './redux-hooks/ReduxHooks';
import { store } from './store/store';
import { TodoList } from './todo-list';
export function ReduxHooksNav({ path }: { path: string }) {
  return (
    <>
      <NavLink className="link" to={`${path}/redux-hooks`}>redux-hooks</NavLink>
      <NavLink className="link" to={`${path}/todo-list`}>todo list</NavLink>
    </>
  )
}
export function ReduxHooksMain({ match: { path } }: RouteComponentProps) {
  return (
    <ReduxStoreContext.Provider value={store}>
      <Switch>
        <Route path={`${path}/redux-hooks`} component={ReduxHooks} />
        <Route path={`${path}/todo-list`} component={TodoList} />
        <Redirect to={`${path}/redux-hooks`} />
      </Switch>
    </ReduxStoreContext.Provider>
  )
}