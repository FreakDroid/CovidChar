import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { internalRoutes } from './routes/routes';
import CountryData from './components/CountryData';
import StateData from './components/StateData';
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={internalRoutes.root} component={CountryData} />
          <Route exact path={internalRoutes.state} component={StateData} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
