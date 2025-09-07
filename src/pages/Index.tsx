import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import CategorySection from "@/components/CategorySection";
import FeaturedResources from "@/components/FeaturedResources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <CategorySection />
      <FeaturedResources />
      <Footer />
    </div>
  );
};

export default Index;
