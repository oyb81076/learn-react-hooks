import * as React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { ReduxHooks } from './redux-hooks/redux-hooks/ReduxHooks';
import { TodoList } from './redux-hooks/todo-list';

export default function App() {
  return (
    <>
      <nav>
        <NavLink className="link" to={`/redux-hooks`}>redux-hooks</NavLink>
        <NavLink className="link" to={`/todo-list`}>todo list</NavLink>
      </nav>
      <Switch>
        <Route path={`/redux-hooks`} component={ReduxHooks} />
        <Route path={`/todo-list`} component={TodoList} />
        <Redirect to={`/redux-hooks`} />
      </Switch>
    </>
  )
}