import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Mail, Users, Calendar, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing! We'll be in touch soon.",
      });
      setEmail("");
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "The insights I get from this newsletter have been game-changing for our marketing strategy. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      content: "Concise, actionable, and always relevant. This is the only newsletter I actually look forward to reading.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      content: "The weekly trends and analysis help me stay ahead of the curve. Worth every minute of reading time.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: "Weekly Delivery",
      description: "Every Tuesday morning, straight to your inbox"
    },
    {
      icon: Users,
      title: "Curated Content",
      description: "Hand-picked insights from industry leaders"
    },
    {
      icon: CheckCircle,
      title: "Actionable Tips",
      description: "Practical advice you can implement immediately"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-warm-50 to-warm-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Stay Ahead with
            <span className="text-primary block">The Digest</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your weekly dose of curated insights, industry trends, and actionable advice. 
            Join <span className="font-semibold text-primary">5,000+</span> professionals 
            who trust us to keep them informed.
          </p>

          {/* Subscribe Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Free forever. Unsubscribe anytime.
            </p>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5K+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">52</div>
              <div className="text-sm text-muted-foreground">Issues Sent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Subscribe?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in quality over quantity. Every issue is carefully crafted 
              to deliver maximum value in minimum time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Readers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Stay Informed?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who start their week with The Digest. 
            Get the latest insights delivered straight to your inbox.
          </p>
          <Link to="/subscribe">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-3"
            >
              Subscribe Now
            </Button>
          </Link>
          <p className="text-sm opacity-75 mt-4">
            Already a subscriber? <Link to="/signin" className="underline hover:no-underline">Sign in here</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;