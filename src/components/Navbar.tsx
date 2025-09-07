import { Button } from "@/components/ui/button";
import { User, MessageCircle, Plus, Gift, Home, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-card/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-retro-glow">
              <span className="text-primary-foreground font-bold text-xl">SR</span>
            </div>
            <div>
              <h1 className="font-retro-display font-bold text-xl text-foreground">
                StudyResource
              </h1>
              <p className="text-xs text-muted-foreground">Exchange Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Search className="w-4 h-4 mr-2" />
              Resources
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Plus className="w-4 h-4 mr-2" />
              Post Item
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Gift className="w-4 h-4 mr-2" />
              Giveaway
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chatbot
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-retro-glow">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;