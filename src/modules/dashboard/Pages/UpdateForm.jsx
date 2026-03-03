import React from 'react';
import '../components/UpdateForm.css';

const UpdateForm = ({ isOpen, onClose, formData, onChange, onUpdate }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Actualizar Perfil</h2>
                <form onSubmit={onUpdate}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            required
                            disabled
                            style={{ backgroundColor: '#e9ecef' }}
                        />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div>
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
                        <button type="submit">Guardar Cambios</button>
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
