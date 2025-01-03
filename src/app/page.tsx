import HeroSection from '../components/HeroSection';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import FormSection from '../components/FormSection';
import RecommendedSchemes from '../components/RecommendedSchemes';
import DocumentUpload from '../components/DocumentUpload';
import Tracker from '@/components/Tracker';
import OfflineAccess from '@/components/OfflineAccess';
import Divider from '@/components/Divider';

export default function Home() {
    return (
      <main>
        {/* <h1>Welcome to CivAI</h1>
        <p>Your AI assistant is here to help!</p> */}
        <Header />
        <HeroSection />
        <FormSection />
        <Divider width='medium'/>
        <RecommendedSchemes />
        <Divider width='medium'/>
        <DocumentUpload />
        <Tracker />
        <Divider width='medium'/>
        <OfflineAccess />
        <Footer />
      </main>
    );
  }
  