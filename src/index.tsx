import { createRoot } from 'react-dom/client';
import Routes from './Routes'; 

const root = document.getElementById('root')!;
const reactRoot = createRoot(root);
reactRoot.render(<Routes />);
