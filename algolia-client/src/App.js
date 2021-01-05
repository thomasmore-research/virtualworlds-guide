import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Tool from './components/Tool';

import 'instantsearch.css/themes/algolia.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/:docId">
          <Tool />
        </Route>
      </Switch>
    </Router>
  );
}
