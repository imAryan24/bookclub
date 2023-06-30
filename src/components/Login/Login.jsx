import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function login(e) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
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
      <div>Login</div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button
        style={{
          background: 'white',
          padding: '10px',
          borderRadius: '10px'
        }}
        onClick={login}>LOGIN</button>
    </form>
  )
}

export default Login