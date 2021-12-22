import type {NextPage} from 'next';
import Layout from 'components/Layout'
import { paths } from 'routes';
import PathContextProvider from 'context/path';
import IPath from 'interfaces/IPath';

const Home: NextPage = () => {
  const path: IPath = paths.find(r => r.url === '/analysis')!
  return (
    <PathContextProvider path={path}>
      <Layout>
        CUSTOM LAYOUT
      </Layout>
    </PathContextProvider>
  );
};

export default Home;
