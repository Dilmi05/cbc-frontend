 import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-blue-50 to-white text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-blue-600">My Website</h1>
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500 transition">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500 transition">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-500 transition">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</a>
        </nav>
      </header>

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
