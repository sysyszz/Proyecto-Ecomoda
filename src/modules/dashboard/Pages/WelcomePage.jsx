import React from 'react';
import useWelcome from '../hooks/useWelcome';
import UpdateForm from '../components/UpdateForm';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Welcome = () => {
    const {
        user,
        isModalOpen,
        formData,
        handleLogout,
        handleInputChange,
        handleUpdate,
        openModal,
        closeModal
    } = useWelcome();

    if (!user) return <div>Loading...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar username={user.username} onLogout={handleLogout} />
            
            <main style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                <Hero user={user} onUpdate={openModal} />
            </main>

            <Footer />

            <UpdateForm 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                formData={formData} 
                onChange={handleInputChange} 
                onUpdate={handleUpdate} 
            />
        </div>
    );
};

export default Welcome;
