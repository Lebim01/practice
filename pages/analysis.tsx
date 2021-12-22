import type {NextPage} from 'next';
import Layout from 'components/Layout'
import { paths } from 'routes';
import PathContextProvider from 'context/path';
import IPath from 'interfaces/IPath';
import GraphicsContainer from 'components/pages/analysis/Graphics/GraphicsContainer';

const Home: NextPage = () => {
  const path: IPath = paths.find(r => r.url === '/analysis')!
  return (
    <PathContextProvider path={path}>
      <Layout>
        <GraphicsContainer />
      </Layout>
    </PathContextProvider>
  );
};

export default Home;
