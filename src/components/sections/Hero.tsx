"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter flex items-center justify-center gap-3">
          <Image 
            src="/icon.svg" 
            alt="" 
            width={100} 
            height={100}
            className="h-[1em] w-auto"
            priority
            unoptimized
          />
          {siteConfig.name}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto">
          {siteConfig.description}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="btn-neo bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-none w-full sm:w-auto"
          onClick={(e) => handleSmoothScroll(e, "products")}
        >
          View Products
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="btn-neo bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-none w-full sm:w-auto"
          onClick={(e) => handleSmoothScroll(e, "contact")}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
