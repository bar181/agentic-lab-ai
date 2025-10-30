import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TipsGrid from "@/components/TipsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TipsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
