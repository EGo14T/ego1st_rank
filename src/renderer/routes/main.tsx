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
          { index: true, element: <Career /> },
          { path: 'career', element: <Career /> },
          {
            index: true,
            path: 'achievement',
            element: <Achievement />,
          },
        ],
      },
    ],
  },
];

const MainRoute: React.FC<MainRouteProps> = () => {
  return useRoutes(routes);
};

export default MainRoute;
