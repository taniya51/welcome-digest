import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Mail, Shield, Clock, Users, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    interests: [] as string[],
    agreeToTerms: false,
    allowMarketing: true
  });
  const { toast } = useToast();

  const interests = [
    "Technology & Innovation",
    "Business Strategy",
    "Leadership & Management",
    "Marketing & Growth",
    "Data & Analytics",
    "Remote Work & Productivity"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Weekly Delivery",
      description: "Every Tuesday at 8 AM EST"
    },
    {
      icon: Users,
      title: "Join 5,000+ Professionals",
      description: "Be part of our growing community"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "We never share your email"
    },
    {
      icon: Star,
      title: "Highly Rated",
      description: "95% open rate, loved by readers"
    }
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to terms",
        description: "You must agree to our terms and privacy policy to subscribe.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Welcome to The Digest!",
      description: "Thank you for subscribing. Check your email for confirmation.",
    });

    // Reset form
    setFormData({
      email: "",
      firstName: "",
      interests: [],
      agreeToTerms: false,
      allowMarketing: true
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Subscribe to The Digest
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who start their week with curated insights, 
            trends, and actionable advice delivered straight to their inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Subscribe Form */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      required
                    />
                  </div>

                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name (Optional)
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Alex"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll use this to personalize your emails
                    </p>
                  </div>

                  {/* Interests */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">
                      What topics interest you most? (Optional)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, !!checked)}
                          />
                          <label
                            htmlFor={interest}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Marketing consent */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.allowMarketing}
                      onCheckedChange={(checked) => setFormData(prev => ({...prev, allowMarketing: !!checked}))}
                    />
                    <label
                      htmlFor="marketing"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Send me occasional updates about new features and special content
                    </label>
                  </div>

                  {/* Terms agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({...prev, agreeToTerms: !!checked}))}
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Subscribe to The Digest
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Free forever. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Sign in link */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already a subscriber?{" "}
                <Link to="/signin" className="text-primary hover:underline font-medium">
                  Sign in to access your account
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits & Info */}
          <div className="space-y-8">
            {/* What you'll get */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>What You'll Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <benefit.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample content */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Sample Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium text-sm mb-1">This Week's Insights</h4>
                    <p className="text-xs text-muted-foreground">
                      "The rise of AI in customer service: 3 key trends every business leader should know"
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-medium text-sm mb-1">Actionable Tip</h4>
                    <p className="text-xs text-muted-foreground">
                      "How to run effective 15-minute daily standups that actually improve productivity"
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-medium text-sm mb-1">Resource of the Week</h4>
                    <p className="text-xs text-muted-foreground">
                      "A curated tool that's helping teams collaborate 40% more effectively"
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/archive">
                    <Button variant="outline" size="sm">
                      Browse Past Issues
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Social proof */}
            <Card className="border-border bg-warm-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic text-muted-foreground mb-2">
                    "The best newsletter I've subscribed to. Consistently valuable content that I actually use."
                  </p>
                  <p className="text-xs font-medium">- Sarah K., Product Manager</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;