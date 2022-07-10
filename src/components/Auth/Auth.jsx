import { createContext } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const userContext = createContext({ })

function Auth({ signOut, user, children }) {
  return (
    <userContext.Provider value={{user, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default withAuthenticator(Auth);
export { userContext };