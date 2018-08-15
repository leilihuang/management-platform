import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Boss from 'ROOT/components/boss/index';
import ECM from 'ROOT/components/ecm/index';
import RBAC from 'ROOT/components/rbac/index';
import NoError from 'ROOT/components/no-page/index';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => (
        <Redirect to='boss' />
      )} />
      <Route path='/boss' component={Boss} />
      <Route path='/ecm' component={ECM} />
      <Route path='/rbac' component={RBAC} />
      <Route component={NoError} />
    </Switch>
  </Router>
);
