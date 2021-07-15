import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/pages/home';
import Login from './components/pages/login';
import LoginAuthor from './components/pages/loginAuthor';
import LoginReviewer from './components/pages/loginReviewer';
import Register from './components/pages/register';
import RegisterAuthor from './components/pages/registerAuthor';
import RegisterReviewer from './components/pages/registerReviewer';
import SubmitPaper from './components/pages/submitPaper';
import ReviewPaper from './components/pages/reviewPaper';
import Reports from './components/pages/reports';


axios.defaults.withCredentials = true;

function App() {
  return (
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/loginAuthor' component={LoginAuthor} />
          <Route path='/loginReviewer' component={LoginReviewer} />
          <Route path='/register' component={Register} />
          <Route path='/registerAuthor' component={RegisterAuthor} />
          <Route path='/registerReviewer' component={RegisterReviewer} />
          <Route path='/submitPaper' component={SubmitPaper} />
          <Route path='/reviewPaper' component={ReviewPaper} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>
  );
}

export default App;
