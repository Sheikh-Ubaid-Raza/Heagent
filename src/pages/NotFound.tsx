import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <SEO
        title="Page Not Found | Heagent"
        description="The page you are looking for does not exist."
        noIndex
      />

      <div className="animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist yet. It may have been moved or
          is still under construction.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:opacity-90 active:scale-95 transition-all"
        >
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
