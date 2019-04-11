import * as React from 'react';
import { Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import { CustomHooksMain, CustomHooksNav } from './custom-hooks';
import { HookMain, HookNav } from './hooks';
import { LifeCycleMain, LifeCycleNav } from './lifecycle';
import logo from './logo.svg';
import { RxMain, RxNav } from './rxjs';
import { RxjsHooksMain, RxjsHooksNav } from './rxjs-hooks';
import { TipsMain, TipsNav } from './tips';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-title">React</span>
      </header>
      <section className="section">
        <nav className="nav">
          <div>
            <div className="nav-title">Hooks</div>
            <HookNav path="/hooks" />
          </div>
          <div>
            <div className="nav-title">LifeCycle</div>
            <LifeCycleNav path="/lifecycle" />
          </div>
          <div>
            <div className="nav-title">Custom Hooks</div>
            <CustomHooksNav path="/custom-hooks" />
          </div>
          <div>
            <div className="nav-title">Tips</div>
            <TipsNav path="/tips" />
          </div>
          <div>
            <div className="nav-title">Rxjs</div>
            <RxNav path="/rxjs" />
          </div>
          <div>
            <div className="nav-title">RxjsHooks</div>
            <RxjsHooksNav path="/rxjs-hooks" />
          </div>
        </nav>
        <main className="main">
          <Switch>
            <Route path="/hooks" component={HookMain} />
            <Route path="/custom-hooks" component={CustomHooksMain} />
            <Route path="/lifecycle" component={LifeCycleMain} />
            <Route path="/tips" component={TipsMain} />
            <Route path="/rxjs" component={RxMain} />
            <Route path="/rxjs-hooks" component={RxjsHooksMain} />
            <Redirect to="/hooks" />
          </Switch>
        </main>
      </section>
    </div>
  );
}
