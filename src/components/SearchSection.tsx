import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="bg-card py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-8">
            <h2 className="font-retro-display font-bold text-3xl text-foreground mb-4">
              Find Your Perfect Resource
            </h2>
            <p className="text-muted-foreground text-lg">
              Search through thousands of academic materials shared by students
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-gradient-card p-6 rounded-xl shadow-retro-card border border-border/50">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Main Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for books, notes, videos, lab kits..."
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary text-foreground"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <Select>
                  <SelectTrigger className="w-[140px] h-12 bg-background/50 border-border/50 focus:border-primary">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cse">Computer Science</SelectItem>
                    <SelectItem value="ece">Electronics</SelectItem>
                    <SelectItem value="mech">Mechanical</SelectItem>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="chem">Chemical</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[100px] h-12 bg-background/50 border-border/50 focus:border-primary">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[120px] h-12 bg-background/50 border-border/50 focus:border-primary">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="notes">Notes</SelectItem>
                    <SelectItem value="videos">Videos</SelectItem>
                    <SelectItem value="kits">Lab Kits</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className="h-12 px-8 bg-gradient-primary hover:shadow-retro-glow font-semibold">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

            {/* Advanced Filters */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;