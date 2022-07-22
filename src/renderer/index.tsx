import { createRoot } from 'react-dom/client';
import IndexRoute from './routes';
import './static/js/iconfont.js';
import './index.scss';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<IndexRoute />);
