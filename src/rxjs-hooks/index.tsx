import * as React from "react"
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import UseEventCallback from './UseEventCallback';
import UseObservable from './UseObservable';
export function RxjsHooksNav({ path }: { path: string }) {
  return (
    <>
      <NavLink className="link" to={`${path}/useObservable`} >UseObservable</NavLink>
      <NavLink className="link" to={`${path}/useEventCallback`} >UseEventCallback</NavLink>
    </>
  )
}
export function RxjsHooksMain({ match: { path } }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${path}/useObservable`} component={UseObservable} />
      <Route path={`${path}/useEventCallback`} component={UseEventCallback} />
      <Redirect to={`${path}/useObservable`} />
    </Switch>
  )
}