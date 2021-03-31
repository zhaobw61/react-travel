import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomePage, SignInPage, RegisterPage } from './pages';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
