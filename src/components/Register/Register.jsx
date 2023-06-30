import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function register(e) {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            window.location.href = "/"
            window.location.reload();
            console.log(user);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'purple',
                gap: '25px',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '10px',
            }}
        >
            <div>Register</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
            <button
                style={{
                    background: 'white',
                    padding: '10px',
                    borderRadius: '10px'
                }}
                onClick={register}>REGISTER</button>
        </form>
    )
}

export default Register