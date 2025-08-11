import { Link } from 'react-router-dom';

 
export default function HomePage() {
  return (
    <div>
      <header className="header">
        <h1>My Website</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Our Website</h2>
        <p>
          We provide high-quality services to help you grow and succeed. Let’s
          work together to achieve your goals.
        </p>
        <button>Get Started</button>
      </section>

      <Link to="/login" className="login-link">login</Link>

      <footer className="footer">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.

      </footer>
    </div>
  );
}
