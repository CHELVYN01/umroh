
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80&fit=crop" 
          alt="Masjid Al-Haram, Makkah" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Perjalanan Suci Penuh Makna</span>
          <span className="hero-arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          <h1 className="hero-title">Raih Ridha Illahi di Tanah Suci</h1>
          <p className="hero-description">
            Al-Hikmah Travel mendampingi perjalanan ibadah umrah Anda dengan layanan eksklusif, bimbingan sesuai sunnah, dan fasilitas premium untuk kekhusyukan ibadah Anda.
          </p>
          <div className="hero-actions">
            <a href="#packages" className="btn btn-gold">Lihat Paket</a>
            <a href="#contact" className="btn btn-outline" style={{color: 'white', borderColor: 'white'}}>Konsultasi Gratis</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
