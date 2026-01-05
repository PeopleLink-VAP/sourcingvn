import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyDifferent } from "@/components/home/WhyDifferent";
import { ChoosePath } from "@/components/home/ChoosePath";
import { Footer } from "@/components/Footer";
import { Mascot } from "@/components/Mascot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <WhyDifferent />
      <ChoosePath />
      <Footer />
      <Mascot message="Hi! 👋 Need help with your project?" />
    </div>
  );
};

export default Index;
