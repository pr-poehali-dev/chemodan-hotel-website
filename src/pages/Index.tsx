import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Services />
      <Gallery />
      <Booking />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
