import { siteConfig } from "@/config/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Calculator: Calculator,
};

function StoreButton({ href, icon, title, subtitle }: { href: string; icon: string; title: string; subtitle: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-black hover:bg-zinc-800 transition-colors rounded-[8px] border border-zinc-800 min-w-[140px]"
    >
      <img src={icon} alt={title} className="w-6 h-6 invert" />
      <div className="flex flex-col items-start leading-none -mt-0.5">
        <span className="text-[10px] font-medium text-white">{subtitle}</span>
        <span className="text-[15px] font-bold text-white mt-0.5">{title}</span>
      </div>
    </Link>
  );
}

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
          const isPathIcon = product.icon.startsWith("/");
          // We removed the special "isGuesstimate" check to standardize the card look.

          return (
            <Card key={product.name} className="card hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 bg-card flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex flex-row items-start gap-6">
                  <div className={`flex-shrink-0 flex items-center justify-center border-2 border-black rounded-xl overflow-hidden ${isPathIcon ? 'w-24 h-24 bg-white' : 'w-24 h-24 bg-secondary'}`}>
                    {isPathIcon ? (
                      <img src={product.icon} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <Icon className="w-12 h-12" />
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                      {product.status && (
                        <Badge variant="outline" className="border-2 border-black font-medium bg-yellow-300 text-black rounded-none">
                          {product.status}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base font-medium text-black/70 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                <div className="flex flex-wrap gap-3">
                  {product.links?.playStore && (
                    <StoreButton 
                      href={product.links.playStore}
                      icon="/playstore.svg"
                      subtitle="GET IT ON"
                      title="Google Play"
                    />
                  )}
                  {product.links?.appStore && (
                    <StoreButton 
                      href={product.links.appStore}
                      icon="/apple.svg"
                      subtitle="Download on the"
                      title="App Store"
                    />
                  )}
                </div>

              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
