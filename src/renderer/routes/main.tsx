import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import MainLayout from '../component/layout';
import Home from '../component/home';
import Career from '../component/career';
import Achievement from '../component/achievement';

type MainRouteProps = {};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        children: [
          {
            index: true,
            element: <Achievement />,
          },
          {
            path: 'ac',
            element: <Achievement />,
          },
          { path: 'ca', element: <Career /> },
        ],
      },
    ],
  },
];

const MainRoute: React.FC<MainRouteProps> = () => {
  return useRoutes(routes);
};

export default MainRoute;
