import * as React from "react"
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom"
import RxEvent from './RxEvent';
import RxInterval from './RxInterval';
import RxSubscribe from './RxSubscribe';
export function RxNav({ path }: { path: string }) {
  return (
    <>
      <NavLink className="link" to={`${path}/RxInterval`} >RxInterval</NavLink>
      <NavLink className="link" to={`${path}/RxEvent`} >RxEvent</NavLink>
      <NavLink className="link" to={`${path}/RxSubscribe`} >RxSubscribe</NavLink>
    </>
  )
}

export function RxMain({ match: { path } }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${path}/RxInterval`} component={RxInterval} />
      <Route path={`${path}/RxEvent`} component={RxEvent} />
      <Route path={`${path}/RxSubscribe`} component={RxSubscribe} />
      <Redirect to={`${path}/RxInterval`} />
    </Switch>
  )
}