import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Login, Dashboard, Transactions, Bills, Settings, SignUp, ResetPassword, Shareunits, Topupwallet, Topupunits} from './modules/website/pages';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/bills' element={<Bills />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/shareunits' element={<Shareunits />} />
        <Route path='/topupwallet' element={<Topupwallet />} />
        <Route path='/topupunits' element={<Topupunits />} />



        


      </Routes>
    </Router>
  );
};

export default AppRoutes;