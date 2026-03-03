import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from '../modules/auth/Pages/LoginForm';
import RegisterForm from '../modules/auth/Pages/RegisterForm';
import WelcomePage from '../modules/dashboard/Pages/WelcomePage';

import { BrowserRouter } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
