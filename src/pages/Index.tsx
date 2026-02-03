import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import LocalTrust from "@/components/LocalTrust";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <LocalTrust />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;
