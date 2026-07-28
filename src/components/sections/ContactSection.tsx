import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ScrollReveal from "@/components/common/ScrollReveal";
import MagneticButton from "@/components/common/MagneticButton";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell us a bit more about the project")
});

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        alert("Inquiry sent successfully.");
        resolve(true);
      }, 1000);
    });
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-card-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <ScrollReveal>
              <h2 className="font-serif text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
                Let's Create<br /> <span className="italic text-primary">Together</span>
              </h2>
              <p className="font-sans font-light text-muted-foreground text-base max-w-md mb-16 leading-relaxed">
                Ready to architect your next visual story? Tell us about your brand, your goals, and the vision we can bring to life.
              </p>
              
              <div className="space-y-8 font-sans">
                <div>
                  <h4 className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">Email</h4>
                  <a href="mailto:samr1films@gmail.com" className="text-lg hover:text-primary transition-colors">samr1films@gmail.com</a>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">Phone</h4>
                  <a href="tel:+919511209061" className="text-lg hover:text-primary transition-colors">+91 95112 09061</a>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">Instagram</h4>
                  <a href="https://www.instagram.com/samr1.films?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">@samr1.films</a>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">WhatsApp</h4>
                  <a href="https://wa.me/919511209061" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">Chat on WhatsApp</a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      {...register("name")} 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-transparent border-b border-card-border py-4 font-sans font-light text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    />
                    {errors.name && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.name.message}</span>}
                  </div>
                  <div className="relative group">
                    <input 
                      {...register("company")} 
                      type="text" 
                      placeholder="Company (Optional)" 
                      className="w-full bg-transparent border-b border-card-border py-4 font-sans font-light text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <input 
                    {...register("email")} 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-card-border py-4 font-sans font-light text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  />
                  {errors.email && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.email.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <select 
                      {...register("projectType")} 
                      className="w-full bg-transparent border-b border-card-border py-4 font-sans font-light text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-background text-muted-foreground">Project Type</option>
                      <option value="commercial" className="bg-background">Commercial / TVC</option>
                      <option value="brand_film" className="bg-background">Brand Film</option>
                      <option value="social" className="bg-background">Social Campaign</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                    {errors.projectType && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.projectType.message}</span>}
                  </div>
                  <div className="relative">
                    <select 
                      {...register("budget")} 
                      className="w-full bg-transparent border-b border-card-border py-4 font-sans font-light text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-background text-muted-foreground">Budget Range</option>
                      <option value="5k" className="bg-background">$5k - $50k</option>
                      <option value="50k" className="bg-background">$50k - $100k</option>
                      <option value="250k" className="bg-background">$250k+</option>
                    </select>
                    {errors.budget && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.budget.message}</span>}
                  </div>
                </div>

                <div className="relative group">
                  <textarea 
                    {...register("message")} 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    className="w-full bg-transparent border-b border-card-border py-4 font-sans font-light text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none"
                  ></textarea>
                  {errors.message && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.message.message}</span>}
                </div>

                <div className="pt-8">
                  <MagneticButton>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group flex items-center justify-center w-full md:w-auto px-12 py-5 bg-primary text-primary-foreground font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                      <span className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
