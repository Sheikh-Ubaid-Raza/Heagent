import { useState } from "react";
import { SEO } from "@/components/SEO";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";

type StatusFilter = "All" | "Idea" | "Building" | "Launched";

const Products = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = products.filter(
    (product) => statusFilter === "All" || product.status === statusFilter
  );

  const statusColors = {
    Idea: "bg-muted text-muted-foreground",
    Building: "bg-accent/20 text-accent border-accent/30",
    Launched: "bg-primary/20 text-primary border-primary/30",
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Healthcare AI Products | Heagent"
        description="Explore Heagent's AI-powered healthcare products including Lab Tester AI, Clinical Notes, and Smart Medication Tracker."
        canonical="/products"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-white/90">
              AI-powered solutions automating healthcare workflows, saving time and improving patient
              care
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by status:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["All", "Idea", "Building", "Launched"] as StatusFilter[]).map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                  className={
                    statusFilter === status
                      ? "bg-accent text-white hover:bg-accent/90"
                      : ""
                  }
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-accent/50 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (product.id === "lab-tester-ai") {
                    window.location.href = "/products/lab-tester-ai";
                  } else {
                    setSelectedProduct(product);
                  }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`${statusColors[product.status]} border`}>
                    {product.status}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                      Target Users
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.targetUsers.map((user) => (
                        <span
                          key={user}
                          className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {user}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <span className="text-accent text-sm font-medium inline-flex items-center group-hover:underline">
                      View details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products found with status "{statusFilter}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Our Products?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in early access to Lab Tester AI or want to collaborate on our
              upcoming products? Let's connect.
            </p>
            <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                  <Badge className={`${statusColors[selectedProduct.status]} border`}>
                    {selectedProduct.status}
                  </Badge>
                </div>
                <DialogDescription className="text-base">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <div>
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Target Users</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.targetUsers.map((user) => (
                      <span
                        key={user}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button asChild className="w-full bg-gradient-accent hover:opacity-90">
                    <Link to="/contact" onClick={() => setSelectedProduct(null)}>
                      Inquire About This Product
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
