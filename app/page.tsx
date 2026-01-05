import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCards from './components/StatsCards';
import Journey from './components/Journey';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import CryptoUniverse from './components/CryptoUniverse';
import WalletSection from './components/WalletSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsCards />
      <Journey />
      <DashboardPreview />
      <Features />
      <CryptoUniverse />
      <WalletSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}