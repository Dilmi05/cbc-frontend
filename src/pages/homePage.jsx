 import { Link } from 'react-router-dom';
 import Header from '../components/header';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-blue-50 to-white text-gray-800">
      
      {/* Header */}
      <Header/>

      <div>

         
      </div>
          
 
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-blue-100 via-white to-blue-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Welcome to Our Website
        </h2>
        <p className="max-w-xl text-lg text-gray-700 mb-8">
          We provide high-quality services to help you grow and succeed.
          Let’s work together to achieve your goals.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          Get Started
        </button>
      </section>

      {/* Login Link */}
      <div className="text-center my-6">
        <Link
          to="/login"
          className="text-blue-600 hover:underline font-medium text-lg"
        >
          Login
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 mt-auto">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </footer>
    </div>
  );
}
