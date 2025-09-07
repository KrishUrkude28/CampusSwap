import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Gift } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold-primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-retro-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Share • Save • 
            <span className="text-foreground">
              Sustain
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for students to exchange academic resources, 
            connect with peers, and build a sustainable learning community.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-retro-glow transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg"
          >
            Start Exploring
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold font-semibold px-8 py-4 text-lg"
          >
            Post Your First Item
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-full shadow-retro-card mb-4 group-hover:animate-float">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2,500+</h3>
            <p className="text-muted-foreground">Active Students</p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-full shadow-retro-card mb-4 group-hover:animate-float">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">15,000+</h3>
            <p className="text-muted-foreground">Resources Shared</p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-full shadow-retro-card mb-4 group-hover:animate-float">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Giveaways Claimed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;