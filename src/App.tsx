import * as React from 'react';
import { Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import { HookMain, HookNav } from './hooks';
import { LifeCycleMain, LifeCycleNav } from './lifecycle';
import logo from './logo.svg';
import { RxMain, RxNav } from './rxjs';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
              <div className="nav-title">Rxjs</div>
              <RxNav path="/rxjs" />
            </div>
          </nav>
          <main className="main">
            <Switch>
              <Route path="/hooks" component={HookMain} />
              <Route path="/lifecycle" component={LifeCycleMain} />
              <Route path="/rxjs" component={RxMain} />
              <Redirect to="/hooks/useState" />
            </Switch>
          </main>
        </section>
      </div>
    );
  }
}

export default App;
