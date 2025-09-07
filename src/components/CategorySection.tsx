import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Laptop, Backpack, Calculator } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    name: "Books",
    count: "2,500+",
    description: "Textbooks, References, Guides",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FileText,
    name: "Notes",
    count: "5,000+",
    description: "Study Notes, Assignments, PDFs",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Video,
    name: "Videos",
    count: "1,200+",
    description: "Lectures, Tutorials, Demos",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Laptop,
    name: "Lab Kits",
    count: "800+",
    description: "Hardware, Components, Tools",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Backpack,
    name: "Accessories",
    count: "1,500+",
    description: "Stationery, Bags, Supplies",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Calculator,
    name: "Instruments",
    count: "600+",
    description: "Calculators, Scales, Meters",
    color: "from-teal-500 to-teal-600"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-retro-display font-bold text-3xl text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover academic resources organized by type to find exactly what you need
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group relative bg-gradient-card p-6 rounded-xl shadow-retro-card border border-border/50 hover:shadow-retro-glow transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:animate-float">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-retro font-bold text-xl text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-primary font-semibold text-lg mb-2">
                  {category.count}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Browse Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-primary hover:text-primary-foreground hover:bg-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Browse {category.name}
                </Button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold font-semibold px-8"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;