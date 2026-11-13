import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mascot } from "@/components/Mascot";
import { HomeHero } from "@/components/home/v2/HomeHero";
import { Categories } from "@/components/home/v2/Categories";
import { FounderStory } from "@/components/home/v2/FounderStory";
import { ServicesPricing } from "@/components/home/v2/ServicesPricing";
import { OnTheFloor } from "@/components/home/v2/OnTheFloor";
import { TeamOnGround } from "@/components/home/v2/TeamOnGround";
import { ProcessFaqCta } from "@/components/home/v2/ProcessFaqCta";


const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <HomeHero />
    <Categories />
    <OnTheFloor />
    <FounderStory />
    <TeamOnGround />
    <ServicesPricing />
    <ProcessFaqCta />
    <Footer />
    <Mascot message="Hi! 👋 Need help with your project?" />
  </div>
);

export default Index;
