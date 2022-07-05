import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home            from '../Pages/Home/Home'
import Profile         from '../Pages/Profile/Profile'
import Recomendations  from '../Pages/Recomendations/Recomendations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<Home                               />} />
        <Route path="profile"        element={<Profile                            />} />
        <Route path="recomendations" element={<Recomendations                     />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
