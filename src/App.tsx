import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Features';
import Packages from './components/Packages';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
