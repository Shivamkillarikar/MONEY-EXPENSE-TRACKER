import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        await axios.post('http://localhost:5000/api/register', formData);
        alert('Registration Successful!');
      } else {
        await axios.post('http://localhost:5000/api/login', {
          email: formData.email,
          password: formData.password,
        });
        alert('Login Successful!');
        navigate('/navbar');
      }
      
    } catch (error) {
      console.error('Error during authentication:', error);
      alert('Authentication failed!');
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500">
        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-center text-teal-600 mb-6">
            {isRegister ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-center text-gray-500 mb-8">
            {isRegister
              ? 'Sign up to start managing your budget effortlessly.'
              : 'Log in to access your budget dashboard.'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your full name"
                  required={isRegister}
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter a secure password"
                required
              />
            </div>
            {isRegister && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Re-enter your password"
                  required={isRegister}
                />
              </div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-300"
              >
                {isRegister ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={toggleForm}
              className="text-teal-500 hover:text-teal-700 font-medium transition duration-300"
            >
              {isRegister ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
