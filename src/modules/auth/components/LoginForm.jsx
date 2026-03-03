import React from 'react';
import useLoginForm from '../hooks/useLoginForm';
import './Auth.css';

import Logo from '../../../shared/assets/Logo.webp';

const LoginForm = () => {
    const { loginData, fieldErrors, touched, submitError, handleChange, handleBlur, handleSubmit } =
        useLoginForm();

    return (
        <div className="login-container">
            <h2>
                Login{' '}
                <img
                    src={Logo}
                    alt=""
                    width="80"
                />
            </h2>

            <form id="loginForm" onSubmit={handleSubmit} noValidate>
                {submitError && (
                    <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                        {submitError}
                    </div>
                )}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={loginData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="username"
                    />
                    {touched.email && fieldErrors.email && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.email}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Contrasena:</label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={loginData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="current-password"
                    />
                    {touched.password && fieldErrors.password && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.password}</small>
                    )}
                </div>

                <button type="submit">Ingresar</button>
                <p>
                    No tienes una cuenta? <a href="/register">Registrarse</a>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
