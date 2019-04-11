import * as React from "react"
import { NavLink, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { ActionsRender } from './ActionsRender';
import { AdvancedUseReducer } from './AdvancedUseReducer';
import { ContextRender } from './ContextRender';
import { Cycle } from './Cycle';
import { Memo, NoneMemo } from "./Memo";
import { RefRender } from './RefRender';
import { RenderSequence } from './RenderSequence';
export function TipsNav({ path }: { path: string }) {
  return (
    <>
      <NavLink className="link" to={`${path}/context-render`} >ContextRender</NavLink>
      <NavLink className="link" to={`${path}/memo`} >Memo</NavLink>
      <NavLink className="link" to={`${path}/none-memo`} >None Memo</NavLink>
      <NavLink className="link" to={`${path}/render-sequence`} >Render Sequence</NavLink>
      <NavLink className="link" to={`${path}/ref-render`} >Ref Render</NavLink>
      <NavLink className="link" to={`${path}/actions-render`} >Actions Render</NavLink>
      <NavLink className="link" to={`${path}/advancedUseReducer`} >Advanced Use Render</NavLink>
      <NavLink className="link" to={`${path}/cycle`} >Cycle</NavLink>
    </>
  )
}
export function TipsMain({ match: { path } }: RouteComponentProps) {
  return (
    <Switch>
      <Route path={`${path}/context-render`} component={ContextRender} />
      <Route path={`${path}/memo`} component={Memo} />
      <Route path={`${path}/none-memo`} component={NoneMemo} />
      <Route path={`${path}/render-sequence`} component={RenderSequence} />
      <Route path={`${path}/ref-render`} component={RefRender} />
      <Route path={`${path}/actions-render`} component={ActionsRender} />
      <Route path={`${path}/advancedUseReducer`} component={AdvancedUseReducer} />
      <Route path={`${path}/cycle`} component={Cycle} />
      <Redirect to={`${path}/context-render`} />
    </Switch>
  )
}