import App from './App';

import { BrowserRouter } from 'react-router-dom';

import userProvider from './context/userProvider';

const root = document.getElementById('root');

const rootElement = createElement(root);

rootElement.render(
  <BrowserRouter>
    <userProvider >
      <App/>
    </userProvider>
  </BrowserRouter>
);