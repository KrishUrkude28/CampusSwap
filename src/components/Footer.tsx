import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-retro-display font-bold text-2xl text-foreground mb-4">
            Stay Updated with StudyResource
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified about new resources, exclusive giveaways, and platform updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-card border-border/50 focus:border-primary"
            />
            <Button className="bg-gradient-primary hover:shadow-retro-glow font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">SR</span>
                </div>
                <span className="font-retro-display font-bold text-lg text-foreground">
                  StudyResource
                </span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Empowering students to share, save, and sustain academic resources for a better learning experience.
              </p>
              <div className="flex space-x-3">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/50"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/50"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/50"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-retro font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Browse Resources', 'Post Item', 'Giveaways', 'How It Works'].map((link) => (
                  <li key={link}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-retro font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-2">
                {['Books', 'Notes', 'Videos', 'Lab Kits', 'Accessories', 'Instruments'].map((category) => (
                  <li key={category}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                    >
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-retro font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  help@studyresource.com
                </li>
                <li className="flex items-center text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  +91 9876543210
                </li>
                <li className="flex items-start text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary mt-0.5" />
                  <span>Student Hub, Tech Campus<br />New Delhi, India</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-border/50 text-muted-foreground hover:border-primary hover:text-primary"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 StudyResource Exchange Platform. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'FAQs', 'About Us'].map((link) => (
                <Button 
                  key={link}
                  variant="ghost" 
                  size="sm" 
                  className="h-auto p-0 text-muted-foreground hover:text-primary text-sm"
                >
                  {link}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;