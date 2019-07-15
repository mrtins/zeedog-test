import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import './styles.css';

import Home from './pages/Home';
import Selection from './pages/Selection';
import Dog from './pages/Dog';

const App = () => (
  <Router basename="/">
    <div className="heigth-full">
      <Route exact path='/' component={Home} />
      <Route exact path='/selection/:lang' component={Selection} />
      <Route exact path='/dog/:breed' component={Dog} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
