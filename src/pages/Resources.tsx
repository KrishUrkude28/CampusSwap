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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
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