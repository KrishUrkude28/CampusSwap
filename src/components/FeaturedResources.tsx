import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Eye, Star } from "lucide-react";

const featuredResources = [
  {
    id: 1,
    title: "Data Structures & Algorithms Complete Notes",
    description: "Comprehensive notes covering all DSA topics with examples and practice problems.",
    price: "Free",
    category: "Notes",
    department: "Computer Science",
    year: "2nd Year",
    seller: "Alex Kumar",
    rating: 4.9,
    views: 1200,
    likes: 89,
    image: "/api/placeholder/300/200",
    tags: ["Programming", "DSA", "Interview Prep"]
  },
  {
    id: 2,
    title: "Circuit Analysis Lab Kit",
    description: "Complete electronics lab kit with resistors, capacitors, breadboard, and multimeter.",
    price: "₹2,500",
    category: "Lab Kit",
    department: "Electronics",
    year: "1st Year",
    seller: "Priya Singh",
    rating: 4.8,
    views: 856,
    likes: 67,
    image: "/api/placeholder/300/200",
    tags: ["Electronics", "Lab", "Hardware"]
  },
  {
    id: 3,
    title: "Machine Learning Video Series",
    description: "40+ hours of ML tutorials covering theory and practical implementation.",
    price: "₹1,200",
    category: "Videos",
    department: "Computer Science",
    year: "3rd Year",
    seller: "Rahul Verma",
    rating: 4.7,
    views: 2100,
    likes: 156,
    image: "/api/placeholder/300/200",
    tags: ["AI/ML", "Python", "Projects"]
  },
  {
    id: 4,
    title: "Engineering Mathematics Textbook",
    description: "Standard textbook for engineering mathematics with solved examples.",
    price: "₹800",
    category: "Books",
    department: "All",
    year: "1st Year",
    seller: "Neha Sharma",
    rating: 4.6,
    views: 943,
    likes: 74,
    image: "/api/placeholder/300/200",
    tags: ["Mathematics", "Engineering", "Reference"]
  }
];

const FeaturedResources = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-retro-display font-bold text-3xl text-foreground mb-4">
            Featured Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most popular and highly-rated academic resources shared by your peers
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {featuredResources.map((resource, index) => (
            <div
              key={resource.id}
              className="group bg-gradient-card rounded-xl overflow-hidden shadow-retro-card border border-border/50 hover:shadow-retro-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-background/80 text-foreground">
                    {resource.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant={resource.price === "Free" ? "default" : "outline"}
                    className={resource.price === "Free" ? "bg-green-600 text-white" : "bg-background/80 text-foreground"}
                  >
                    {resource.price}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-retro font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {resource.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>{resource.department}</span>
                  <span>{resource.year}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {resource.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span>{resource.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>{resource.views}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      <span>{resource.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Seller */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    by <span className="text-primary">{resource.seller}</span>
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-retro-glow font-semibold"
                  >
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-border/50 hover:border-primary hover:text-primary"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-retro-glow font-semibold px-8"
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;