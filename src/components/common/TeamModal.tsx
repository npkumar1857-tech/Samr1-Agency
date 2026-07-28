import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaVimeo } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    name: "Sameer",
    role: "Founder & Creative Director",
    image: "/team-1.png",
    bio: "Over 5+ years of experience leading award-winning visual campaigns. Sameer combines strategic vision with obsessive cinematic craft.",
    socials: {
      instagram: "https://www.instagram.com/samr1_films",
    },
  },
  {
    name: "Naresh",
    role: "BD lead/creative",
    image: "/team-2.png",
    bio: "Naresh orchestrates complex global shoots. He bridges creative ambition with flawless logistical execution at any scale.",
    socials: {
      instagram: "https://www.instagram.com/itz_naresh_2007",
    },
  },
  {
    name: "Saniya",
    role: "Director of Photography",
    image: "/team-3.png",
    bio: "A master of color science and cinematic styling, Marcus breathes mood and atmosphere into every frame he grades.",
    socials: {
      instagram: "https://www.instagram.com/its__sanuuu__74",
    },
  },
  {
    name: "Sujal",
    role: "Creative",
    image: "/team-4.png",
    bio: "Obsessed with natural light, custom optics, and kinetic camera movement. Chloe captures the soul of every narrative.",
    socials: {
      instagram: "https://www.instagram.com/sujalgadge0",
    },
  },
  {
    name: "Aniket",
    role: "Business Lead ",
    image: "/team-4.png",
    bio: "Obsessed with natural light, custom optics, and kinetic camera movement. Chloe captures the soul of every narrative.",
    socials: {
      instagram: "https://www.instagram.com/___aniket___183",
    },
  },
];

interface TeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TeamModal({ open, onOpenChange }: TeamModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] md:h-[80vh] flex flex-col p-6 md:p-10 bg-black/95 border border-white/10 backdrop-blur-xl text-foreground rounded-none gap-6 focus:outline-none">

        <DialogHeader className="text-left select-none pr-8">
          <DialogTitle className="font-serif text-3xl md:text-5xl font-black italic tracking-wide text-foreground uppercase">
            The <span className="text-primary">Crew</span>
          </DialogTitle>
          <DialogDescription className="font-sans font-light text-muted-foreground uppercase tracking-widest text-xs mt-2">
            Meet the obsessively detail-oriented visionaries behind our visual narratives.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 mt-4 pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

                  {/* Social icons on hover/overlay */}
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
                <div className="p-5 flex-1 flex flex-col justify-between bg-black/40">
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-sans font-light text-[10px] uppercase tracking-widest text-primary mb-3">
                      {member.role}
                    </p>
                    <p className="font-sans font-light text-muted-foreground text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
