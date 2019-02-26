import * as React from 'react';
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom"
import ComponentDidMount from './ComponentDidMount';
import Memo from './Memo';
export function LifeCycleNav({ path }: { path: string }) {
  return (
    <>
      <NavLink className="link" to={`${path}/componentDidMount`} >ComponentDidMount</NavLink>
      <NavLink className="link" to={`${path}/memo`} >Memo</NavLink>
    </>
  )
}

export function LifeCycleMain({ match: { path } }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${path}/componentDidMount`} component={ComponentDidMount} />
      <Route path={`${path}/memo`} component={Memo} />
      <Redirect to={`${path}/componentDidMount`} />
    </Switch>
  )
}
