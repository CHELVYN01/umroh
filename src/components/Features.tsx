import React from 'react';
import { BookOpen, Plane, Shield, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen />,
      title: "Bimbingan Sesuai Sunnah",
      desc: "Didampingi oleh asatidz berpengalaman yang akan membimbing ibadah sesuai tuntunan Al-Qur'an dan As-Sunnah."
    },
    {
      icon: <Plane />,
      title: "Penerbangan Nyaman",
      desc: "Menggunakan maskapai penerbangan terkemuka dengan rute langsung (Direct Flight) atau transit yang nyaman."
    },
    {
      icon: <Shield />,
      title: "Legalitas Terjamin",
      desc: "Resmi terdaftar di Kementerian Agama RI dengan rekam jejak yang jelas dan tepercaya."
    },
    {
      icon: <Heart />,
      title: "Pelayanan Sepenuh Hati",
      desc: "Fokus pada kenyamanan jemaah agar dapat beribadah dengan khusyuk tanpa memikirkan hal-hal teknis."
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <span className="section-arabic">خِدْمَتُنَا</span>
          <h2 className="section-title">Keunggulan Pelayanan Kami</h2>
          <p className="section-subtitle">Kami berkomitmen memberikan pengalaman ibadah terbaik dengan standar pelayanan eksklusif untuk setiap tamu Allah.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
