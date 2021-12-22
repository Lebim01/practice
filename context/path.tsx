import IPath from 'interfaces/IPath';
import React, {useState, useContext} from 'react';

interface Props {
  children: React.ReactNode;
  path: IPath;
}

interface IPathContext {
  path: IPath;
}

const defaultState: IPathContext = {
  path: {
    url: '/',
    title: '',
    color: ''
  }
}

const PathContext = React.createContext<IPathContext>(defaultState);

const PathContextProvider = ({children, ...props}: Props) => {
  const [path, setPath] = useState<IPath>(props.path);

  return (
    <PathContext.Provider value={{path}}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = () => {
  const store = useContext(PathContext);

  return store;
};

export default PathContextProvider;
