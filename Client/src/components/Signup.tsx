import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate()
  const handleSubmit = async () => {
    if (!email) {
      alert('Please enter an email');
      return;
    }

    if (!password || password !== confirmPass) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      alert(data.message);
      navigate("/")
    } catch (e) {
      console.error('Error received:', e);
      alert('Something went wrong');
    }
  };
  const handleLogin=()=>{
    navigate("/login")
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <span onClick={handleLogin}>already signed up then login</span>
    </div>
  );
};

export default Signup;
