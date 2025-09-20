import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Grid, List, Search, Filter, Heart, MessageCircle } from "lucide-react";

const Resources = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const resources = [
    {
      id: 1,
      title: "Computer Networks Textbook",
      price: "₹850",
      originalPrice: "₹1200",
      seller: "Priya Sharma",
      department: "Computer Science",
      year: "3rd Year",
      image: "data:image/jpeg;base64,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",
      isFavorited: false,
      type: "Book"
    },
    {
      id: 2,
      title: "Digital Logic Design Notes",
      price: "Free",
      seller: "Rahul Kumar",
      department: "Electronics",
      year: "2nd Year",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-f-qD6y9ajO-kL0fbH-2MQudo6kMxxA-f-w&s",
      isFavorited: true,
      type: "Notes"
    },
    {
      id: 3,
      title: "Python Programming Video Course",
      price: "₹500",
      seller: "Anita Singh",
      department: "Computer Science",
      year: "1st Year",
      image: "data:image/jpeg;base64,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",
      isFavorited: false,
      type: "Video"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-retro-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resource Marketplace
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover academic resources shared by your fellow students
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-80 space-y-6">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search resources..." className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Department</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="ece">Electronics</SelectItem>
                      <SelectItem value="me">Mechanical</SelectItem>
                      <SelectItem value="civil">Civil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Year</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Resource Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="notes">Notes</SelectItem>
                      <SelectItem value="videos">Videos</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Price</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="under500">Under ₹500</SelectItem>
                      <SelectItem value="500-1000">₹500 - ₹1000</SelectItem>
                      <SelectItem value="above1000">Above ₹1000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {resources.length} resources
              </p>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Resources Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {resources.map((resource) => (
                <Card key={resource.id} className="retro-card hover-glow group cursor-pointer">
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                    >
                      <Heart className={`h-4 w-4 ${resource.isFavorited ? 'fill-primary text-primary' : ''}`} />
                    </Button>
                    <Badge className="absolute top-2 left-2">
                      {resource.type}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary text-xl">{resource.price}</span>
                      {resource.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {resource.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">
                      By {resource.seller}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{resource.department}</span>
                      <span>{resource.year}</span>
                    </div>

                    <Button className="w-full" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat with Seller
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;