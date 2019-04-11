import * as React from "react";
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import UseDebounce from './UseDebounce';
import UseInput from './UseInput';
import UseThrottle from './UseThrottle';
import UseToggle from './useToggle';
export const CustomHooksNav: React.SFC<{ path: string }> = ({ path }) => {
  console.log("render ho")
  return (
    <>
      <NavLink className="link" to={`${path}/useInput`} >useInput</NavLink>
      <NavLink className="link" to={`${path}/useToggle`} >useToggle</NavLink>
      <NavLink className="link" to={`${path}/useDebounce`} >useDebounce</NavLink>
      <NavLink className="link" to={`${path}/useThrottle`} >useThrottle</NavLink>
    </>
  )
};

export const CustomHooksMain: React.SFC<RouteComponentProps> = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/useInput`} component={UseInput} />
      <Route path={`${path}/useToggle`} component={UseToggle} />
      <Route path={`${path}/useDebounce`} component={UseDebounce} />
      <Route path={`${path}/useThrottle`} component={UseThrottle} />
      <Redirect to={`${path}/useInput`} />
    </Switch>
  )
}