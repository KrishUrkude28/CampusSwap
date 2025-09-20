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
    avatar: "https://img.freepik.com/premium-photo/indian-handsome-boy-photo_945585-655.jpg",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7bJCoNly0lR0nBtEam39e66WB05Le0DN4A&s"
    },
    {
      id: 2,
      title: "Python Programming Notes",
      price: "Free",
      status: "Active",
      views: 23,
      image: "https://newtondesk.com/wp-content/uploads/2022/04/python-programming-study-notes.jpg"
    }
  ];

  const purchasedItems = [
    {
      id: 1,
      title: "Operating Systems Textbook",
      price: "₹650",
      seller: "Priya Sharma",
      date: "15 Jan 2024",
      image: "https://khannabooks.com/wp-content/uploads/2022/12/9788190744812-scaled.jpg.webp"
    }
  ];

  const claimedGiveaways = [
    {
      id: 1,
      title: "Premium Laptop Bag Set",
      sponsor: "TechCorp Solutions",
      claimedDate: "10 Jan 2024",
      status: "Delivered",
      image: "data:image/jpeg;base64,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"
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