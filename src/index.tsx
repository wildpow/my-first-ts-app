import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello2 from './Hello2';

ReactDOM.render(
  <Hello2 name="TypeScript" enthusiasmLevel={10}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
