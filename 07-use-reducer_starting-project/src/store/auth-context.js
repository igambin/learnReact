import React from 'react';

const AuthContext = React.createContext(
  {
    isLoggedIn: false,
    onLogout: () => console.log("AuthContext.onLogout not set"),
    onLogin: () => console.log("AuthContext.onLogin not set")
  }
);

export default AuthContext;
