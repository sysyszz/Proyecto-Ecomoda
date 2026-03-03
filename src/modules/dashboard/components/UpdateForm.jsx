import React from 'react';
import './UpdateForm.css';

const UpdateForm = ({ isOpen, onClose, formData, onChange, onUpdate }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Actualizar Perfil</h2>
                </div>
                <form onSubmit={onUpdate} className="modal-form">
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            required
                            disabled
                            className="input-disabled"
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono:</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de Nacimiento:</label>
                        <input
                            type="date"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="save-button">Guardar Cambios</button>
                        <button 
                            type="button" 
                            className="cancel-button"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;
