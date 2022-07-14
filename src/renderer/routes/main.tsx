import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from 'renderer/component/layout';
import Home from 'renderer/component/home';
import Setting from 'renderer/component/setting';

type MainRouteProps = {};

const MainRoute: React.FC<MainRouteProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoute;
