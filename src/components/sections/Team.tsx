import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export function Team() {
  return (
    <section className="container mx-auto px-4 py-16 space-y-12 bg-secondary/20 border-y-2 border-black">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black tracking-tight bg-white inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          The Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The minds behind Lever AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {siteConfig.team.map((member) => (
          <Card key={member.name} className="card bg-white overflow-hidden">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 relative">
                <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden bg-muted relative z-10">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="font-bold text-xl">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute top-1 left-1 w-24 h-24 rounded-full bg-black -z-0 translate-x-1 translate-y-1"></div>
              </div>
              <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
              <p className="text-sm font-bold text-primary uppercase tracking-wider">{member.role}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="font-medium">{member.bio}</p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="border-2 border-black rounded-none font-bold">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-center gap-4 pt-4 border-t-2 border-black/10">
                {member.links.github && (
                  <Link href={member.links.github} target="_blank" className="p-2 hover:bg-accent border-2 border-transparent hover:border-black rounded-md transition-all">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {member.links.linkedin && (
                  <Link href={member.links.linkedin} target="_blank" className="p-2 hover:bg-accent border-2 border-transparent hover:border-black rounded-md transition-all">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                )}
                {member.links.website && (
                  <Link href={member.links.website} target="_blank" className="p-2 hover:bg-accent border-2 border-transparent hover:border-black rounded-md transition-all">
                    <Globe className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
