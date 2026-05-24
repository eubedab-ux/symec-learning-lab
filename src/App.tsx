import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';
import Analytics from './components/Analytics';
import Mobile from './components/Mobile';
import Teaser from './components/Teaser';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Methodology />
        <Analytics />
        <Mobile />
        <Teaser />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
