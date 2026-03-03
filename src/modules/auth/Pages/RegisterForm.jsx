import React from 'react';
import useRegisterForm from '../hooks/useRegisterForm';
import Logo from '../../../shared/assets/Logo.webp';
import '../components/Auth.css';
const RegisterForm = () => {
    const { formData, fieldErrors, touched, submitError, handleChange, handleBlur, handleSubmit } =
        useRegisterForm();

    return (
         <div>
        <div className="login-container">
            <form id="registerForm" autoComplete="off" onSubmit={handleSubmit} noValidate>
                <h2>
                    Registro{' '}
                    <img
                        src={Logo}
                        alt=""
                        width="80"
                    />
                </h2>

                {submitError && (
                    <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                        {submitError}
                    </div>
                )}

                <div>
                    <label htmlFor="username">Nombre:</label>
                    <input
                        type="text"
                        id="username"
                        required
                        autoComplete="off"
                        value={formData.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.username && fieldErrors.username && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.username}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Contrasena:</label>
                    <input
                        type="password"
                        id="password"
                        required
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.password && fieldErrors.password && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.password}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        required
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && fieldErrors.email && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.email}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="telefono">Telefono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        required
                        autoComplete="off"
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.telefono && fieldErrors.telefono && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.telefono}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                    <input
                        type="date"
                        id="fechaNacimiento"
                        required
                        autoComplete="off"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.fechaNacimiento && fieldErrors.fechaNacimiento && (
                        <small style={{ color: 'red', display: 'block' }}>{fieldErrors.fechaNacimiento}</small>
                    )}
                </div>
                <button type="submit">Registrar</button>
            </form>
            <p>
                Ya tienes una cuenta? <a href="/login">Iniciar sesion</a>
            </p>
           </div>
        </div>
    );
};

export default RegisterForm;
