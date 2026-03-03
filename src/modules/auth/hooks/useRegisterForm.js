import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialData = {
    username: '',
    password: '',
    email: '',
    telefono: '',
    fechaNacimiento: ''
};

const initialErrors = {
    username: '',
    password: '',
    email: '',
    telefono: '',
    fechaNacimiento: ''
};

const initialTouched = {
    username: false,
    password: false,
    email: false,
    telefono: false,
    fechaNacimiento: false
};

const useRegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData);
    const [fieldErrors, setFieldErrors] = useState(initialErrors);
    const [touched, setTouched] = useState(initialTouched);
    const [submitError, setSubmitError] = useState('');

    const validateField = (field, value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return 'Este campo es obligatorio';
        }

        if (field === 'username' && trimmedValue.length < 3) {
            return 'El nombre debe tener minimo 3 caracteres';
        }

        if (field === 'email') {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
                return 'Por favor ingrese un correo electronico valido';
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some((user) => user.email.toLowerCase() === trimmedValue.toLowerCase());
            if (userExists) {
                return 'El email ya esta registrado';
            }
        }

        if (field === 'password' && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(trimmedValue)) {
            return 'La clave debe tener minimo 8 caracteres, una mayuscula, una minuscula y un numero';
        }

        if (field === 'telefono' && !/^\d{7,15}$/.test(trimmedValue)) {
            return 'Telefono invalido: use solo numeros (7 a 15 digitos)';
        }

        if (field === 'fechaNacimiento') {
            const selectedDate = new Date(trimmedValue);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate > today) {
                return 'La fecha de nacimiento no puede ser futura';
            }
        }

        return '';
    };

    const validateForm = (data) => ({
        username: validateField('username', data.username),
        password: validateField('password', data.password),
        email: validateField('email', data.email),
        telefono: validateField('telefono', data.telefono),
        fechaNacimiento: validateField('fechaNacimiento', data.fechaNacimiento)
    });

    const hasErrors = (errors) => Object.values(errors).some((error) => error);

    const handleChange = (e) => {
        const { id, value } = e.target;
        const updatedData = {
            ...formData,
            [id]: value
        };

        setFormData(updatedData);

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
            username: true,
            password: true,
            email: true,
            telefono: true,
            fechaNacimiento: true
        };
        const validation = validateForm(formData);

        setTouched(touchedAll);
        setFieldErrors(validation);
        setSubmitError('');

        if (hasErrors(validation)) {
            setSubmitError('Corrija los errores antes de continuar');
            return;
        }

        const username = formData.username.trim();
        const email = formData.email.trim().toLowerCase();
        const password = formData.password.trim();
        const telefono = formData.telefono.trim();
        const fechaNacimiento = formData.fechaNacimiento.trim();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const newUser = {
            id: Date.now(),
            ...formData,
            username,
            email,
            password,
            telefono,
            fechaNacimiento,
            fechaRegistro: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setFormData(initialData);
        setFieldErrors(initialErrors);
        setTouched(initialTouched);
        setSubmitError('');

        alert('Registro exitoso. Ahora inicia sesion.');
        navigate('/login');
    };

    return {
        formData,
        fieldErrors,
        touched,
        submitError,
        handleChange,
        handleBlur,
        handleSubmit
    };
};

export default useRegisterForm;
