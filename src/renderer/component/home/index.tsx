import React from 'react';
import Header from './header';
import Main from './main';
import './index.scss';

type HomeProps = {};

const Home: React.FC<HomeProps> = (props) => {
  const onclick = () => {
    console.log(props);
    window.electron.ipcRenderer.sendMessage('ipc-ttt', ['ping']);
  };

  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
      <main>
        <Main></Main>
      </main>
    </div>
  );
};

export default Home;
