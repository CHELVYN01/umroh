import { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <Moon className="logo-icon" />
          <span className="logo-text">Al-Hikmah Umrah</span>
        </a>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Beranda</a>
          <a href="#features" className="nav-link">Layanan</a>
          <a href="#packages" className="nav-link">Paket Umrah</a>
          <a href="#experience" className="nav-link">Pengalaman</a>
          <a href="#testimonials" className="nav-link">Testimoni</a>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
