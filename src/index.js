import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CitasPages from './pages/CitasPage';
import PadecimientosPage from './pages/PadecimientosPage';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CitasPages />
      <PadecimientosPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

