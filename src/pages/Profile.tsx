import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Edit, 
  Package, 
  ShoppingBag, 
  Gift, 
  Star, 
  Calendar,
  MapPin,
  GraduationCap,
  Mail,
  Phone
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "Arjun Patel",
    email: "arjun.patel@student.edu",
    phone: "+91 9876543210",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    college: "ABC Institute of Technology",
    location: "Mumbai, Maharashtra",
    joinDate: "September 2022",
    avatar: "/placeholder.svg",
    rating: 4.8,
    totalRatings: 24
  };

  const listedItems = [
    {
      id: 1,
      title: "Data Structures & Algorithms Book",
      price: "₹750",
      status: "Active",
      views: 45,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Python Programming Notes",
      price: "Free",
      status: "Active",
      views: 23,
      image: "/placeholder.svg"
    }
  ];

  const purchasedItems = [
    {
      id: 1,
      title: "Operating Systems Textbook",
      price: "₹650",
      seller: "Priya Sharma",
      date: "15 Jan 2024",
      image: "/placeholder.svg"
    }
  ];

  const claimedGiveaways = [
    {
      id: 1,
      title: "Premium Laptop Bag Set",
      sponsor: "TechCorp Solutions",
      claimedDate: "10 Jan 2024",
      status: "Delivered",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="retro-card mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                    <AvatarFallback className="text-lg font-bold">
                      {userProfile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(userProfile.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {userProfile.rating} ({userProfile.totalRatings} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="font-retro-display text-3xl font-bold text-foreground mb-2">
                        {userProfile.name}
                      </h1>
                      <Badge variant="secondary" className="mb-2">
                        {userProfile.year} Student
                      </Badge>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2"
                    >
                      <Edit className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{userProfile.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{userProfile.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>{userProfile.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{userProfile.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Joined {userProfile.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="listed" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="listed" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Listed Items ({listedItems.length})
              </TabsTrigger>
              <TabsTrigger value="purchased" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Purchased ({purchasedItems.length})
              </TabsTrigger>
              <TabsTrigger value="giveaways" className="flex items-center gap-2">
                <Gift className="h-4 w-4" />
                Giveaways ({claimedGiveaways.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="listed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {listedItems.map((item) => (
                  <Card key={item.id} className="retro-card hover-glow">
                    <div className="flex gap-4 p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-lg font-bold text-primary mb-1">{item.price}</p>
                        <div className="flex items-center justify-between text-sm">
                          <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                          <span className="text-muted-foreground">{item.views} views</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {listedItems.length === 0 && (
                  <div className="col-span-2 text-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No items listed yet</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="purchased">
              <div className="space-y-4">
                {purchasedItems.map((item) => (
                  <Card key={item.id} className="retro-card">
                    <div className="flex gap-4 p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-lg font-bold text-primary mb-1">{item.price}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Seller: {item.seller}</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {purchasedItems.length === 0 && (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No purchases yet</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="giveaways">
              <div className="space-y-4">
                {claimedGiveaways.map((item) => (
                  <Card key={item.id} className="retro-card">
                    <div className="flex gap-4 p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Sponsored by {item.sponsor}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <Badge variant={item.status === 'Delivered' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                          <span className="text-muted-foreground">Claimed on {item.claimedDate}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {claimedGiveaways.length === 0 && (
                  <div className="text-center py-12">
                    <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No giveaways claimed yet</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;