import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import  Dashboard  from './Dashboard';
import Team  from './Team';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Sidebar />
        <NavigationBar />
        <Switch >
          <Route exact path="/" component={Dashboard} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
