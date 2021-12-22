import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import AuthContextProvider from 'context/auth';
import SidemenuContextProvider from 'context/sidemenu';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from 'redux/configureStore'

const { store, persistor } = createStore()

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContextProvider>
          <SidemenuContextProvider>
            <Component {...pageProps} />
          </SidemenuContextProvider>
        </AuthContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
