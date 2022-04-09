import React, { useState, useEffect } from 'react';

type LoginProps = {
    handleSubmit: (user: object) => void,
}
export default function LoginView({ handleSubmit }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    handleSubmit(userDetails);
  }, [userDetails, handleSubmit]);
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setUserDetails({ username, password });
      }}
      >
        <div>
          <h2>Login</h2>
          <input placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value); }} />
          <input placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
