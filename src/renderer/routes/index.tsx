import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MainRoute from './main';

type IndexRouteProps = {};

const IndexRoute: React.FC<IndexRouteProps> = () => {
  return (
    <Router>
      <MainRoute></MainRoute>
    </Router>
  );
};

export default IndexRoute;
