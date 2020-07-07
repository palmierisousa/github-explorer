import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // Switch garante que apenas uma rota aparece por vez, sem o switch, as duas rotas iriam aparecer ao mesmo tempo.
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
