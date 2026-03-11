import React from 'react';
import { Moon, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="section-title">Niatkan Perjalanan Suci Anda Hari Ini</h2>
            <p className="cta-desc">
              Pendaftaran Umrah untuk musim ini masih terbuka. Hubungi kami untuk berkonsultasi mengenai paket yang pas dengan jadwal Anda.
            </p>
            <div className="flex gap-4 justify-center" style={{display: 'flex', gap: '1.5rem', justifyContent: 'center'}}>
              <button className="btn btn-gold">Pesan Paket Anda</button>
              <button className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Download Jadwal 2026</button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="footer-logo">
                <Moon className="logo-icon" />
                <span className="logo-text" style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)'}}>Al-Hikmah Travel</span>
              </a>
              <p className="footer-desc">
                Biro Perjalanan Wisata dan Umrah resmi terdaftar Kemenag RI, menjembatani ibadah Anda menuju Baitullah dengan amanah dan sunnah.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><Instagram size={20} /></a>
                <a href="#" className="social-link"><Facebook size={20} /></a>
                <a href="#" className="social-link"><Youtube size={20} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Perusahaan</h4>
              <ul className="footer-links">
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Visi & Misi</a></li>
                <li><a href="#">Tim Pembimbing</a></li>
                <li><a href="#">Legalitas</a></li>
                <li><a href="#">Galeri Jemaah</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Layanan</h4>
              <ul className="footer-links">
                <li><a href="#">Paket Umrah Promo</a></li>
                <li><a href="#">Paket Umrah Reguler</a></li>
                <li><a href="#">Paket Umrah VIP</a></li>
                <li><a href="#">Umrah Plus Turki</a></li>
                <li><a href="#">Haji Furoda</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Pusat Informasi</h4>
              <ul className="footer-links">
                <li className="contact-item">
                  <MapPin size={20} className="contact-icon" />
                  <span>Graha Bintang Lt.3<br/>Jl. Sudirman No. 45<br/>Jakarta Selatan</span>
                </li>
                <li className="contact-item">
                  <Phone size={20} className="contact-icon" />
                  <span>+62 812-3456-7890<br/>(021) 1234-5678</span>
                </li>
                <li className="contact-item">
                  <Mail size={20} className="contact-icon" />
                  <span>info@alhikmah-umrah.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Al-Hikmah Umrah Travel. Hak Cipta Dilindungi Undang-Undang.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
