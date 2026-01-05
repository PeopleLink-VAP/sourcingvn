import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyDifferent } from "@/components/home/WhyDifferent";
import { ChoosePath } from "@/components/home/ChoosePath";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <WhyDifferent />
      <ChoosePath />
      <Footer />
    </div>
  );
};

export default Index;
