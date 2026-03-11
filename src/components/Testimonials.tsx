import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Alhamdulillah perjalanan umrah bersama Al-Hikmah sangat nyaman. Mulai dari pendaftaran hingga kepulangan, semua diurus dengan profesional. Pembimbing ibadahnya sangat jelas menerangkan manasik.",
      author: "Ibu Siti Aisyah",
      role: "Jemaah Umrah Plus Turki",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Hotelnya di Madinah dan Makkah benar-benar dekat dengan masjid, hanya jalan kaki 3 menit. Sangat membantu sekali buat orang tua kami yang ikut berangkat. Makanan juga sangat cocok di lidah.",
      author: "Bapak Budi Santoso",
      role: "Jemaah Paket VIP",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Masya Allah pelayanan mutawwif di sana sangat luar biasa dan sabar membimbing tawaf dan sa'i. Bimbingan tarbiyah setiap harinya sangat mengisi ruhiyah kami selama di tanah suci.",
      author: "Keluarga Rahman",
      role: "Jemaah Reguler",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-arabic">شَهَادَاتُهُمْ</span>
          <h2 className="section-title">Apa Kata Jemaah Kami?</h2>
          <p className="section-subtitle">Ribuan jemaah telah mempercayakan perjalanan spiritual mereka kepada Al-Hikmah</p>
        </div>
        
        <div className="testi-grid">
          {reviews.map((review, index) => (
            <div className="testi-card" key={index}>
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              <p className="testi-content">"{review.text}"</p>
              <div className="testi-author">
                <img src={review.image} alt={review.author} className="author-img" />
                <div className="author-info">
                  <h5>{review.author}</h5>
                  <p>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
