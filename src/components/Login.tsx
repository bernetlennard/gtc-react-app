import React, {useState} from 'react';
import {useUser} from '../context/UserContext';

const Login: React.FC = () => {
    const {login} = useUser();
    const [formData, setFormData] = useState({firstname: '', lastname: '', username: '', password: ''});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.username && formData.password) {
            login({
                id: Date.now(),
                firstName: formData.firstname,
                lastName: formData.lastname,
                userLogin: formData.username
            });
        }
    };

    return (
        <div className="card p-4 shadow-sm mx-auto" style={{maxWidth: '400px'}}>
            <h4>Login (REQ 0009)</h4>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    placeholder="Vorname"
                    onChange={e => setFormData({...formData, firstname: e.target.value})}
                    required
                />
                <input
                    className="form-control mb-2"
                    placeholder="Nachname"
                    onChange={e => setFormData({...formData, lastname: e.target.value})}
                    required
                />
                <input
                    className="form-control mb-2"
                    placeholder="Benutzername"
                    onChange={e => setFormData({...formData, username: e.target.value})}
                    required
                />
                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Passwort"
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    required
                />
                <button type="submit" className="btn btn-primary w-100">Anmelden</button>
            </form>
        </div>
    );
};

export default Login;