import React, {useState, useContext} from 'react';
import IUser from 'interfaces/IUser'

interface Props {
  children: React.ReactNode;
}

interface IAuthContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

const defaultUser: IUser = {
  photo: 'assets/front-view-elegant-businesswoman-holding-clipboard-with-copy-space_23-2148788842@2x.png',
  name: 'Alejandra Langford',
  email: 'a.langford@mxmarket.mx'
}

const defaultAuth: IAuthContext = {
  user: defaultUser,
  setUser: () => {}
}

const AuthContext = React.createContext<IAuthContext>(defaultAuth);

const AuthContextProvider = ({children}: Props) => {
  const [user, setUser] = useState<IUser>(defaultUser);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const store = useContext(AuthContext);

  return store;
};

export default AuthContextProvider;
