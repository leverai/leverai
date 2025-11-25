import { siteConfig } from "@/config/site";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12 border-t-4 border-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-black tracking-tighter flex items-center gap-2 justify-center md:justify-start">
            <Image 
              src="/icon.svg" 
              alt="" 
              width={50} 
              height={50}
              className="h-[1em] w-auto"
              unoptimized
            />
            {siteConfig.name}
          </h3>
          <p className="text-gray-400 text-sm max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex gap-6">
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href={siteConfig.links.github} target="_blank" className="hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" className="hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" className="hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        <div className="text-center md:text-right text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
