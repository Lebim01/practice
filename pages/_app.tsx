import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import AuthContextProvider from 'context/auth';
import SidemenuContextProvider from 'context/sidemenu';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <SidemenuContextProvider>
        <Component {...pageProps} />
      </SidemenuContextProvider>
    </AuthContextProvider>
  );
};

export default MyApp;
