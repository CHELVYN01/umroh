import { Calendar, Check } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      title: "Umrah Reguler",
      badge: "Terlaris",
      duration: "9 Hari",
      price: "27.5 Juta",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80&fit=crop",
      features: [
        "Penerbangan Kelas Ekonomi (Direct)",
        "Hotel Madinah: Dallah Taibah / Setaraf 4*",
        "Hotel Makkah: Azka Al Safa / Setaraf 4*",
        "Visa Umrah & Asuransi",
        "Makan 3x Sehari (Menu Indonesia)",
        "Mutawwif Berpengalaman"
      ]
    },
    {
      title: "Umrah VIP Exclusive",
      badge: "Premium",
      duration: "12 Hari",
      price: "42.0 Juta",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&q=80&fit=crop",
      features: [
        "Penerbangan Kelas Bisnis",
        "Hotel Madinah: The Oberoi / Setaraf 5+",
        "Hotel Makkah: Fairmont Makkah Clock Royal Tower",
        "Visa Umrah & Asuransi VIP",
        "Makan Full Board (Buffet Hotel)",
        "Akses Lounge & Fast Track",
        "Kereta Cepat Haramain Makkah-Madinah"
      ]
    },
    {
      title: "Umrah Plus Turki",
      badge: "Promo",
      duration: "14 Hari",
      price: "35.5 Juta",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80&fit=crop",
      features: [
        "Penerbangan Turkish Airlines",
        "Hotel Madinah: Rove / Setaraf 4*",
        "Hotel Makkah: Swissôtel Al Maqam / Setaraf 5*",
        "Hotel Istanbul: Mercure / Setaraf 5*",
        "City Tour Istanbul & Bosphorus Cruise",
        "Semua Tiket Masuk Wisata Turki",
        "Makan Full Board"
      ]
    }
  ];

  return (
    <section id="packages" className="packages">
      <div className="container">
        <div className="section-header">
          <span className="section-arabic">بَرَامِجُ العُمْرَةِ</span>
          <h2 className="section-title">Pilihan Paket Umrah</h2>
          <p className="section-subtitle">Sesuaikan dengan kebutuhan spiritual dan kenyamanan perjalanan Anda</p>
        </div>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              {pkg.badge && <div className="package-badge">{pkg.badge}</div>}
              <div className="package-img-wrap">
                <img src={pkg.image} alt={pkg.title} className="package-img" />
                <div className="package-duration">
                  <Calendar size={18} /> {pkg.duration}
                </div>
              </div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-price">
                  Rp {pkg.price} <span>/ pax</span>
                </div>
                <ul className="package-list">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={20} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-gold" style={{width: '100%'}}>Pesan Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
