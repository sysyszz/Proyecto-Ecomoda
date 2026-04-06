import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from '../modules/auth/Pages/LoginForm';
import RegisterForm from '../modules/auth/Pages/RegisterForm';
import WelcomePage from '../modules/dashboard/Pages/WelcomePage';
import Home from '../modules/home/pages/Home'
import Us from '../modules/home/pages/Us'

import { BrowserRouter } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/us" element={<Us />} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
