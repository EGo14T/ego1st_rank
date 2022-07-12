import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const onclick = () => {
  window.electron.ipcRenderer.sendMessage('ipc-ttt', ['ping']);
}

const Hello = () => {
  return (
    <button onClick={onclick}>
      123
    </button>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
