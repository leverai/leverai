import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Products />
      <Team />
      <Footer />
    </main>
  );
}
