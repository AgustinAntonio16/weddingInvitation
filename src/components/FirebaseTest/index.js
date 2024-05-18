import React, { useState } from 'react';
 // Asegúrate de que la ruta al archivo de configuración sea correcta
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase-config';

const FirebaseTest = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            setError('');
            console.log('Usuario registrado con éxito');
        } catch (error) {
            setError(error.message);
            console.error('Error al registrar el usuario:', error.message);
        }
    };

    return (
        <div>
            <h1>Registro de Usuario</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default FirebaseTest;
