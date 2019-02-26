import * as React from 'react';
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom"
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UseDebugValue from './UseDebugValue';
import UseEffect from "./UseEffect";
import { UseImperativeHandle } from './UseImperativeHandle';
import UseLayoutEffect from './UseLayoutEffect';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseState from './UseState';
export function HookNav({ path }: { path: string }) {
  return (
    <>
      <NavLink className="link" to={`${path}/useState`}>useState</NavLink>
      <NavLink className="link" to={`${path}/useEffect`}>useEffect</NavLink>
      <NavLink className="link" to={`${path}/useLayoutEffect`}>useLayoutEffect</NavLink>
      <NavLink className="link" to={`${path}/useContext`} >useContext</NavLink>
      <NavLink className="link" to={`${path}/useReducer`} >useReducer</NavLink>
      <NavLink className="link" to={`${path}/useCallback`} >useCallback</NavLink>
      <NavLink className="link" to={`${path}/useMemo`} >useMemo</NavLink>
      <NavLink className="link" to={`${path}/useRef`} >useRef</NavLink>
      <NavLink className="link" to={`${path}/useDebugValue`} >useDebugValue</NavLink>
      <NavLink className="link" to={`${path}/useImperativeHandle`} >useImperativeHandle</NavLink>
    </>
  )
}

export function HookMain({ match: { path } }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${path}/useState`} component={UseState} />
      <Route path={`${path}/useEffect`} component={UseEffect} />
      <Route path={`${path}/useContext`} component={UseContext} />
      <Route path={`${path}/useLayoutEffect`} component={UseLayoutEffect} />
      <Route path={`${path}/useReducer`} component={UseReducer} />
      <Route path={`${path}/useCallback`} component={UseCallback} />
      <Route path={`${path}/useMemo`} component={UseMemo} />
      <Route path={`${path}/useRef`} component={UseRef} />
      <Route path={`${path}/useImperativeHandle`} component={UseImperativeHandle} />
      <Route path={`${path}/useDebugValue`} component={UseDebugValue} />
      <Redirect to={`${path}/useState`} />
    </Switch>
  )
}