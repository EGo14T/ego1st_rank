import { Provider } from 'mobx-react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import allStores from 'renderer/store';
import MainRoute from './main';

type IndexRouteProps = {};

const IndexRoute: React.FC<IndexRouteProps> = () => {
  return (
    <Provider {...allStores}>
      <Router>
        <MainRoute></MainRoute>
      </Router>
    </Provider>
  );
};

export default IndexRoute;
