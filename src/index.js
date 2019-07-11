import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import './styles.css';

import Home from './pages/Home';

const App = () => (
  <Router basename="/">
    <div className="heigth-full">
      <Route exact path='/' component={Home} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
