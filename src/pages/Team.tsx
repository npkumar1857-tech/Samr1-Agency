import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaVimeo } from "react-icons/fa6";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    vimeo?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Sam Rogers",
    role: "Founder & Creative Director",
    image: "/team-1.png",
    bio: "Over 12 years of experience leading award-winning visual campaigns. Sam combines strategic vision with obsessive cinematic craft.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Elena Rostova",
    role: "Head of Production",
    image: "/team-2.png",
    bio: "Elena orchestrates complex global shoots. She bridges creative ambition with flawless logistical execution at any scale.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Marcus Vance",
    role: "Lead Colorist & Post-Director",
    image: "/team-3.png",
    bio: "A master of color science and cinematic styling, Marcus breathes mood and atmosphere into every frame he grades.",
    socials: {
      instagram: "https://instagram.com",
      vimeo: "https://vimeo.com",
    },
  },
  {
    name: "Chloe Dubois",
    role: "Director of Photography",
    image: "/team-4.png",
    bio: "Obsessed with natural light, custom optics, and kinetic camera movement. Chloe captures the soul of every narrative.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      vimeo: "https://vimeo.com",
    },
  },
];

export default function Team() {
  return (
    <main className="bg-background min-h-screen text-foreground relative overflow-hidden flex flex-col justify-between py-16 px-6 md:px-12">
      
      {/* Background glow overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto relative z-10 flex-1 flex flex-col justify-center">
        {/* Navigation & Header */}
        <div className="mb-12 flex items-center justify-between">
          <a
            href="/"
            className="group inline-flex items-center gap-2 font-sans font-light text-xs tracking-widest uppercase hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </a>
          <span className="font-serif text-sm italic text-primary font-bold tracking-widest uppercase">
            samR1
          </span>
        </div>

        {/* Header content */}
        <div className="mb-16 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-black italic tracking-wide text-foreground uppercase mb-6"
          >
            The <span className="text-primary">Crew</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-muted-foreground uppercase tracking-[0.2em] text-xs leading-relaxed"
          >
            Meet the obsessively detail-oriented visionaries behind our visual narratives.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col bg-card/40 border border-card-border hover:border-primary/40 rounded-none transition-all duration-500 overflow-hidden"
            >
              {/* Image container */}
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Social icons on hover */}
                <div className="absolute bottom-4 left-4 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/60 hover:bg-primary hover:text-primary-foreground text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label={`${member.name} Instagram`}
                    >
                      <FaInstagram size={14} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/60 hover:bg-primary hover:text-primary-foreground text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin size={14} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/60 hover:bg-primary hover:text-primary-foreground text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label={`${member.name} Twitter`}
                    >
                      <FaXTwitter size={14} />
                    </a>
                  )}
                  {member.socials.vimeo && (
                    <a
                      href={member.socials.vimeo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/60 hover:bg-primary hover:text-primary-foreground text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label={`${member.name} Vimeo`}
                    >
                      <FaVimeo size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-black/40">
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-sans font-light text-[10px] uppercase tracking-widest text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer copyright */}
      <div className="container mx-auto border-t border-white/5 pt-8 text-center text-xs font-sans font-light tracking-widest text-muted-foreground uppercase z-10">
        &copy; {new Date().getFullYear()} samR1. All rights reserved.
      </div>
    </main>
  );
}
