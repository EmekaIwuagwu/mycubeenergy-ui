import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Login, Dashboard, Transactions, Bills, Settings, SignUp, ResetPassword, Shareunits,
   Topupwallet, Topupunits, AdminLogin, AdminSignup, AdminDashboard, AdminOrder, AdminDashboardOrder,
    AdminBilling, AdminUser, AdminManagement, AdminManagementDetails, AdminSettings} from './modules/website/pages';

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
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin_reg' element={<AdminSignup />} />
        <Route path='/admin_dashboard' element={<AdminDashboard />} />
        <Route path='/admin_order' element={<AdminOrder />} />
        
        <Route path='/admin_dashboard_order' element={<AdminDashboardOrder />} />
        <Route path='/admin_billing_setup' element={<AdminBilling />} />

        <Route path='/user_manager' element={<AdminUser />} />
        
        
        <Route path='/admin_manager' element={<AdminManagement />} />
        
        <Route path='/adminmanagementdetails' element={<AdminManagementDetails />} />
        
        <Route path='/admin_settings' element={<AdminSettings />} />

        


        







        


      </Routes>
    </Router>
  );
};

export default AppRoutes;