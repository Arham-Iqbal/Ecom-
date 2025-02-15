import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloggedin,setloggedin]=useState(false)
  const navigate=useNavigate()

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Email and Password are required!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await response.json(); // Ensure response is JSON
      } catch (err) {
        throw new Error('Invalid JSON response from server');
      }

      if (response.ok) {
        alert(data.message || 'Login successful!'); // Fallback message
        console.log('Login successful:', data);
        setloggedin(true)
        navigate("/", { state: { isloggedin: true } })
      } else {
        alert(data.message || 'Invalid credentials!');
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong! Try again later.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '250px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '250px' }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
