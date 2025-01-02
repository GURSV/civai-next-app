import HeroSection from '../components/HeroSection';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
      <main>
        {/* <h1>Welcome to CivAI</h1>
        <p>Your AI assistant is here to help!</p> */}
        <Header />
        <HeroSection />
        <Footer />
      </main>
    );
  }
  