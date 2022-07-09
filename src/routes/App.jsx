import { useContext } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userContext } from '../components/Auth/Auth'
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar'


import Home            from '../Pages/Home/Home'
import History         from '../Pages/History/History'

function App() {
  let { user } = useContext(userContext)

  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/"              element={<Home                               />} />
        <Route path="history"        element={<History                            />} />
        <Route path="*"              element={<Navigate to="/" replace            />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
