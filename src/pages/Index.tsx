import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { WhyWeDoThis } from "@/components/home/WhyWeDoThis";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyDifferent } from "@/components/home/WhyDifferent";
import { WhyVietnam } from "@/components/home/WhyVietnam";
import { ChoosePath } from "@/components/home/ChoosePath";
import { Footer } from "@/components/Footer";
import { Mascot } from "@/components/Mascot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhyWeDoThis />
      <WhatWeDo />
      <WhyDifferent />
      <WhyVietnam />
      <ChoosePath />
      <Footer />
      <Mascot message="Hi! 👋 Need help with your project?" />
    </div>
  );
};

export default Index;

