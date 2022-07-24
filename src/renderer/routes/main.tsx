import React from 'react';
import {
  RouteObject,
  useNavigate,
  useRoutes,
  useLocation,
} from 'react-router-dom';
import MainLayout from '../component/layout';
import Home from '../component/home';
import Career from '../component/career';
import Achievement from '../component/achievement';
import Setting from 'renderer/component/setting';

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
      {
        path: 'setting',
        element: <Setting />,
      },
    ],
  },
];

const MainRoute: React.FC<MainRouteProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname == '/') {
      navigate('/career');
    }
  }, [location]);

  return useRoutes(routes);
};

export default MainRoute;
