import 'styles/globals.css';
import type { AppProps } from 'next/app';
import store from '~store/index';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App