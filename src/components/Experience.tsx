import { Compass, Users, MapPin } from 'lucide-react';
import umrahPilgrims from '../assets/umrah-pilgrims.png';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="islamic-pattern absolute inset-0 opacity-10" />
      <div className="container relative z-10">
        <div className="exp-grid">
          <div className="exp-content">
            <span className="section-arabic">تَجْرِبَةٌ رُوحِيَّةٌ</span>
            <h2 className="section-title gold-gradient" style={{color: 'transparent'}}>Pengalaman Spiritual Terbaik</h2>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)', marginBottom: '2rem'}}>
              Setiap momen di Tanah Suci adalah ibadah. Kami merancang itinerary yang memaksimalkan waktu ibadah Anda tanpa mengesampingkan istirahat yang cukup.
            </p>
            
            <div className="exp-list">
              <div className="exp-item">
                <div className="exp-item-icon">
                  <MapPin />
                </div>
                <div className="exp-item-text">
                  <h4>Ziarah Kota Bersejarah</h4>
                  <p>Mengunjungi tempat-tempat bersejarah perkembangan Islam di Makkah dan Madinah dengan penjelasan sirah nabawiyah mendalam.</p>
                </div>
              </div>
              
              <div className="exp-item">
                <div className="exp-item-icon">
                  <Users />
                </div>
                <div className="exp-item-text">
                  <h4>Kajian Eksklusif</h4>
                  <p>Pendalaman agama dan persiapan ibadah melalui kelas-kelas kajian rutin selama di hotel maupun di pelataran masjid.</p>
                </div>
              </div>
              
              <div className="exp-item">
                <div className="exp-item-icon">
                  <Compass />
                </div>
                <div className="exp-item-text">
                  <h4>Layanan Handling Bandara</h4>
                  <p>Tim profesional kami akan menangani urusan bagasi dan check-in, sehingga Anda bisa fokus berdoa dan berniat ihram dengan tenang.</p>
                </div>
              </div>
            </div>
            
            <button className="btn btn-gold" style={{marginTop: '1rem'}}>Pelajari Jadwal Perjalanan</button>
          </div>
          
          <div className="exp-images">
            <div className="exp-img">
              <img src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80&fit=crop" alt="Masjid Nabawi" />
            </div>
            <div className="exp-img">
              <img src={umrahPilgrims} alt="Jemaah Berdoa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
