import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Users, Star } from "lucide-react";

const Giveaway = () => {
  const giveaways = [
    {
      id: 1,
      title: "Premium Laptop Bag Set",
      description: "High-quality laptop bag with accessories for CS students",
      sponsor: "TechCorp Solutions",
      participants: 142,
      timeLeft: "2 days",
      image: "/placeholder.svg",
      category: "Accessories",
      value: "₹2,500"
    },
    {
      id: 2,
      title: "Engineering Stationery Kit",
      description: "Complete set of drawing instruments and technical pens",
      sponsor: "StudyMart",
      participants: 89,
      timeLeft: "5 days",
      image: "/placeholder.svg",
      category: "Stationery",
      value: "₹1,200"
    },
    {
      id: 3,
      title: "Programming Books Bundle",
      description: "Collection of latest programming and algorithms books",
      sponsor: "BookWorld",
      participants: 234,
      timeLeft: "1 week",
      image: "/placeholder.svg",
      category: "Books",
      value: "₹3,000"
    },
    {
      id: 4,
      title: "Lab Equipment Kit",
      description: "Essential lab equipment for electronics students",
      sponsor: "ElectroHub",
      participants: 67,
      timeLeft: "3 days",
      image: "/placeholder.svg",
      category: "Lab Kit",
      value: "₹4,500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-primary bg-clip-text text-transparent mb-4">
            <Gift className="h-8 w-8 text-primary" />
            <h1 className="font-retro-display text-4xl md:text-6xl font-bold">
              Exciting Student Giveaways
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Participate in amazing giveaways and win college merchandise, kits, stationery, and accessories
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="retro-card text-center">
            <CardContent className="p-6">
              <Gift className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="text-sm text-muted-foreground">Active Giveaways</div>
            </CardContent>
          </Card>
          
          <Card className="retro-card text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">1,247</div>
              <div className="text-sm text-muted-foreground">Total Participants</div>
            </CardContent>
          </Card>
          
          <Card className="retro-card text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹89,000</div>
              <div className="text-sm text-muted-foreground">Total Prize Value</div>
            </CardContent>
          </Card>
        </div>

        {/* Giveaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {giveaways.map((giveaway) => (
            <Card key={giveaway.id} className="retro-card hover-glow group cursor-pointer">
              <div className="relative">
                <img
                  src={giveaway.image}
                  alt={giveaway.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-primary">
                  {giveaway.category}
                </Badge>
                <Badge variant="secondary" className="absolute top-2 left-2">
                  {giveaway.value}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {giveaway.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {giveaway.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sponsor:</span>
                    <span className="font-medium">{giveaway.sponsor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Participants:
                    </span>
                    <span className="font-medium">{giveaway.participants}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Time Left:
                    </span>
                    <span className="font-medium text-primary">{giveaway.timeLeft}</span>
                  </div>
                </div>

                <Button className="w-full retro-button">
                  <Gift className="h-4 w-4 mr-2" />
                  Participate Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="retro-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-retro-display text-2xl font-bold mb-4">
                Want to sponsor a giveaway?
              </h2>
              <p className="text-muted-foreground mb-6">
                Partner with us to reach thousands of students and boost your brand visibility
              </p>
              <Button size="lg" className="retro-button">
                Become a Sponsor
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Giveaway;