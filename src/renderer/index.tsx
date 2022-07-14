import { createRoot } from 'react-dom/client';
import MainRoute from './routes/main';
import './static/js/iconfont.js'
import './index.css'



// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<MainRoute />);
