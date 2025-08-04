import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Lightbulb, Target, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Quality First",
      description: "We believe in depth over breadth. Every piece of content is carefully researched and verified."
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Our goal isn't just to inform, but to provide practical advice you can implement immediately."
    },
    {
      icon: Clock,
      title: "Respect Your Time",
      description: "We know you're busy. Our content is concise, well-structured, and easy to digest."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            About The Digest
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to help professionals stay informed and make better decisions 
            through curated insights and actionable intelligence.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Digest was born out of frustration. In a world overflowing with information, 
                  finding truly valuable insights felt like searching for a needle in a haystack. 
                  We were spending hours scrolling through countless articles, reports, and updates, 
                  only to find a few gems worth our time.
                </p>
                <p>
                  So we decided to do something about it. We created The Digest as a solution for 
                  busy professionals who want to stay informed but don't have time to sift through 
                  the noise. Every Tuesday, we deliver a carefully curated collection of insights, 
                  trends, and actionable advice that actually matters.
                </p>
                <p>
                  What started as a simple email to friends has grown into a community of over 
                  5,000 professionals who trust us to help them stay ahead of the curve.
                </p>
              </div>
            </div>
            <div className="bg-warm-100 rounded-lg p-8 text-center">
              <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                52 Issues
              </h3>
              <p className="text-muted-foreground mb-4">
                And counting! Over a year of consistent, valuable content.
              </p>
              <Link to="/archive">
                <Button variant="outline">
                  Browse Archive
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To empower professionals with the insights they need to make informed decisions 
              and stay ahead in their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <div className="bg-warm-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  📧 Weekly Format
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Delivered every Tuesday at 8 AM EST</li>
                  <li>• 5-7 minute read time</li>
                  <li>• Mobile-friendly format</li>
                  <li>• Archive access for all past issues</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  🎯 Content Focus
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Industry trends and analysis</li>
                  <li>• Professional development tips</li>
                  <li>• Technology and innovation insights</li>
                  <li>• Leadership and management advice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The people behind The Digest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-warm-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-warm-700">AJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
                <p className="text-primary font-medium mb-2">Founder & Editor</p>
                <p className="text-muted-foreground text-sm">
                  Former strategy consultant with 10+ years of experience in business analysis 
                  and trend identification. Passionate about making complex topics accessible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-warm-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-warm-700">SM</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Mitchell</h3>
                <p className="text-primary font-medium mb-2">Research Lead</p>
                <p className="text-muted-foreground text-sm">
                  Data scientist turned content curator with a keen eye for emerging trends. 
                  Ensures every insight is backed by solid research and real-world relevance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Be part of a community that values quality information and actionable insights.
            </p>
            <Link to="/subscribe">
              <Button size="lg" variant="secondary" className="mr-4">
                Subscribe Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;