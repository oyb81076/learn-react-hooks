import * as React from 'react';
import { NavLink, Redirect, Route, Switch } from "react-router-dom"
import ComponentDidMount from './ComponentDidMount';
export function LifeCycleNav() {
  return (
    <>
      <NavLink className="link" to="/lifecycle/componentDidMount" >ComponentDidMount</NavLink>
    </>
  )
}

export function LifeCycleMain() {
  return (
    <Switch>
      <Route path="/lifecycle/componentDidMount" component={ComponentDidMount} />
      <Redirect to="/lifecycle/componentDidMount" />
    </Switch>
  )
}
