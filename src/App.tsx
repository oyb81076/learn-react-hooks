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
        <nav style={{ borderBottom: "4px solid black" }}>
          <p><HookNav path="/hooks" /></p>
          <p><LifeCycleNav /></p>
          <p><RxNav path="/rxjs" /></p>
        </nav>
        <Switch>
          <Route path="/hooks" component={HookMain} />
          <Route path="/lifecycle" component={LifeCycleMain} />
          <Route path="/rxjs" component={RxMain} />
          <Redirect to="/hooks/useState" />
        </Switch>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
