import { siteConfig } from "@/config/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Calculator: Calculator,
};

export function Products() {
  return (
    <section id="products" className="container mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black tracking-tight bg-accent inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          Our Products
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {siteConfig.productsTagline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.products.map((product) => {
          const Icon = iconMap[product.icon as keyof typeof iconMap] || Calculator;
          
          return (
            <Card key={product.name} className="card hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-secondary border-2 border-black rounded-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <Badge variant="outline" className="border-2 border-black font-bold bg-yellow-300 text-black rounded-none">
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold mt-4">{product.name}</CardTitle>
                <CardDescription className="text-base font-medium text-black/70">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href={product.link} 
                  className="inline-flex items-center font-bold hover:underline decoration-2 underline-offset-4"
                >
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
