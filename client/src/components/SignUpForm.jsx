import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
const SignUpForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [signup, { error }] = useMutation(SIGNUP_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...formState },
      });
      localStorage.setItem('token', data.signup.token);
      // redirect or show success message
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
      {error && <div>Sign-up failed</div>}
    </form>
  );
};
export default SignUpForm;