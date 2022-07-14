import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'renderer/component/home';

type MainRouteProps = {

}

const MainRoute: React.FC<MainRouteProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default MainRoute;
