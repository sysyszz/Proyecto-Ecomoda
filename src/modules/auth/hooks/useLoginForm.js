import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialData = {
    email: '',
    password: ''
};

const initialErrors = {
    email: '',
    password: ''
};

const initialTouched = {
    email: false,
    password: false
};

const useLoginForm = () => {
    const [loginData, setLoginData] = useState(initialData);
    const [fieldErrors, setFieldErrors] = useState(initialErrors);
    const [touched, setTouched] = useState(initialTouched);
    const [submitError, setSubmitError] = useState('');
    const navigate = useNavigate();

    const validateField = (field, value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return 'Este campo es obligatorio';
        }

        if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
            return 'Por favor ingrese un email valido';
        }

        return '';
    };

    const validateForm = (data) => ({
        email: validateField('email', data.email),
        password: validateField('password', data.password)
    });

    const hasErrors = (errors) => Object.values(errors).some((error) => error);

    const handleChange = (e) => {
        const { id, value } = e.target;
        const updatedData = {
            ...loginData,
            [id]: value
        };

        setLoginData(updatedData);

        if (touched[id]) {
            setFieldErrors((prevState) => ({
                ...prevState,
                [id]: validateField(id, value)
            }));
        }

        if (submitError) {
            setSubmitError('');
        }
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;

        setTouched((prevState) => ({
            ...prevState,
            [id]: true
        }));

        setFieldErrors((prevState) => ({
            ...prevState,
            [id]: validateField(id, value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const touchedAll = {
            email: true,
            password: true
        };
        const validation = validateForm(loginData);

        setTouched(touchedAll);
        setFieldErrors(validation);
        setSubmitError('');

        if (hasErrors(validation)) {
            return;
        }

        const email = loginData.email.trim().toLowerCase();
        const password = loginData.password.trim();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find((u) => u.email.toLowerCase() === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/welcome');
            return;
        }

        setSubmitError('Email o contrasena incorrectos');
    };

    return {
        loginData,
        fieldErrors,
        touched,
        submitError,
        handleChange,
        handleBlur,
        handleSubmit
    };
};

export default useLoginForm;
