import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ProductsSection = () => {
  const featuredProducts = products.slice(0, 3);

  const statusColors = {
    Idea: "bg-muted text-muted-foreground",
    Building: "bg-accent/20 text-accent",
    Launched: "bg-primary/20 text-primary",
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered solutions designed to automate healthcare workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-accent/50 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge className={statusColors[product.status]}>{product.status}</Badge>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.targetUsers.slice(0, 2).map((user) => (
                  <span
                    key={user}
                    className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                  >
                    {user}
                  </span>
                ))}
              </div>

              <Link
                to="/products"
                className="text-accent text-sm font-medium inline-flex items-center group-hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
