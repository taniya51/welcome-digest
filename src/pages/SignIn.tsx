import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMagicLink, setShowMagicLink] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sign in successful!",
        description: "Welcome back! Redirecting to your archive...",
      });
      // In a real app, this would redirect to archive or dashboard
    }, 1000);
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to receive a magic link.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Magic link sent!",
      description: "Check your email for a secure sign-in link.",
    });
  };

  const handleForgotPassword = () => {
    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address first.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Reset link sent!",
      description: "Check your email for password reset instructions.",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="container mx-auto max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your newsletter archive and account settings
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-center">Sign In to Your Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showMagicLink ? (
              // Regular Sign In Form
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData(prev => ({...prev, rememberMe: e.target.checked}))}
                      className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                    />
                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              // Magic Link Form
              <form onSubmit={handleMagicLink} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="magic-email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="magic-email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll send you a secure link to sign in without a password
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  Send Magic Link
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}

            <div className="space-y-4">
              <Separator />
              
              <div className="text-center">
                <button
                  onClick={() => setShowMagicLink(!showMagicLink)}
                  className="text-sm text-primary hover:underline"
                >
                  {showMagicLink ? "Use password instead" : "Send me a magic link"}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sign up link */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/subscribe" className="text-primary hover:underline font-medium">
              Subscribe to The Digest
            </Link>
          </p>
        </div>

        {/* Help */}
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground">
            Having trouble signing in?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact support
            </Link>
          </p>
        </div>

        {/* Benefits reminder */}
        <Card className="mt-8 border-primary/20 bg-warm-100">
          <CardContent className="pt-6 text-center">
            <h3 className="font-semibold mb-2">What you get with an account:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Access to all past newsletter issues</li>
              <li>• Personalized reading preferences</li>
              <li>• Download issues for offline reading</li>
              <li>• Early access to special content</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;