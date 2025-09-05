import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import profilePic from '../assets/logo.jpg';

export default function LoginPage() {

   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login", {
      email,
      password,
    }).then((res) => {
      console.log("Login button clicked", email, password);

      if (res.data.user == null) {
        toast.error(res.data);
        return;
      }

      toast.success("Login successful");
      localStorage.setItem("token", res.data.token);

      if (res.data.user.type === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    }).catch((err) => {
      toast.error("Login failed");
      console.error(err);
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 flex flex-col items-center"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 border-4 border-blue-300"
        />

        <h2 className="text-2xl font-bold text-blue-700 mb-6">Login to Your Account</h2>

        {/* Email */}
        <div className="w-full mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="w-full mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
