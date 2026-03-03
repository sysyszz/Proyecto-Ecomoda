import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useWelcome = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        telefono: '',
        password: '',
        fechaNacimiento: ''
    });

    useEffect(() => {
        // Verificar si hay usuario logueado
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            navigate('/login');
        } else {
            setUser(currentUser);
            setFormData(currentUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        
        // Obtener usuarios del localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Actualizar el usuario en la lista
        const updatedUsers = users.map(u => {
            if (u.id === user.id) { // Asumiendo que hay un ID único
                return { ...u, ...formData };
            }
            return u;
        });

        // Guardar cambios en localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('currentUser', JSON.stringify(formData));
        
        // Actualizar estado local
        setUser(formData);
        setIsModalOpen(false);
        alert('Información actualizada correctamente');
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setFormData(user); // Resetear formulario
    };

    return {
        user,
        isModalOpen,
        formData,
        handleLogout,
        handleInputChange,
        handleUpdate,
        openModal,
        closeModal
    };
};

export default useWelcome;
