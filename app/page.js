import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemsSolutions from "./components/ProblemsSolutions";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSolutions />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <CTA />
      <Footer />
    </>
  );
}
