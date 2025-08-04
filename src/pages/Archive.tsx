import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for newsletter issues
  const issues = [
    {
      id: 52,
      title: "The Future of Remote Work: 2024 Trends",
      date: "2024-01-16",
      readTime: "6 min",
      excerpt: "Exploring the latest developments in remote work culture, productivity tools, and the evolving workplace landscape.",
      tags: ["Remote Work", "Productivity", "Technology"],
      featured: true
    },
    {
      id: 51,
      title: "AI in Business: Beyond the Hype",
      date: "2024-01-09",
      readTime: "7 min",
      excerpt: "A practical look at how businesses are actually implementing AI today, with real case studies and actionable insights.",
      tags: ["AI", "Business Strategy", "Innovation"],
      featured: false
    },
    {
      id: 50,
      title: "Leadership Lessons from 2023",
      date: "2024-01-02",
      readTime: "5 min",
      excerpt: "Key leadership insights from a year of unprecedented challenges and opportunities in the business world.",
      tags: ["Leadership", "Management", "Growth"],
      featured: false
    },
    {
      id: 49,
      title: "The Data-Driven Decision Making Revolution",
      date: "2023-12-26",
      readTime: "8 min",
      excerpt: "How modern organizations are leveraging data analytics to make better strategic decisions and drive growth.",
      tags: ["Data Analytics", "Strategy", "Decision Making"],
      featured: false
    },
    {
      id: 48,
      title: "Sustainable Business Practices: A New Standard",
      date: "2023-12-19",
      readTime: "6 min",
      excerpt: "Why sustainability is becoming a business imperative and how companies are adapting their strategies.",
      tags: ["Sustainability", "ESG", "Business Strategy"],
      featured: false
    },
    {
      id: 47,
      title: "The Rise of No-Code/Low-Code Solutions",
      date: "2023-12-12",
      readTime: "7 min",
      excerpt: "Understanding the no-code movement and its impact on business operations and digital transformation.",
      tags: ["Technology", "Digital Transformation", "Automation"],
      featured: false
    }
  ];

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Newsletter Archive
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse through our collection of weekly insights, trends, and actionable advice. 
            Over 52 issues of carefully curated content to help you stay ahead.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">52</div>
              <div className="text-sm text-muted-foreground">Total Issues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1+</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Open Rate</div>
            </div>
          </div>
        </div>

        {/* Results count */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredIssues.length} result{filteredIssues.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          </div>
        )}

        {/* Issues Grid */}
        <div className="space-y-6">
          {filteredIssues.map((issue) => (
            <Card key={issue.id} className={`border-border hover:shadow-md transition-shadow ${issue.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        Issue #{issue.id}
                      </Badge>
                      {issue.featured && (
                        <Badge className="text-xs bg-primary">
                          Latest
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                      <Link to={`/archive/${issue.id}`}>
                        {issue.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(issue.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {issue.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {issue.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {issue.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/archive/${issue.id}`}>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredIssues.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No issues found matching "{searchTerm}"
            </p>
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              Clear Search
            </Button>
          </div>
        )}

        {/* Load More / Pagination (Mock) */}
        {!searchTerm && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load Older Issues
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Showing latest 6 of 52 issues
            </p>
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="mt-16 text-center">
          <Card className="border-primary/20 bg-gradient-to-br from-warm-50 to-warm-100">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't Miss Future Issues
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join thousands of professionals who get The Digest delivered to their inbox every Tuesday.
              </p>
              <Link to="/subscribe">
                <Button size="lg">
                  Subscribe Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Archive;