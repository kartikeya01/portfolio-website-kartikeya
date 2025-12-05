import {
  Linkedin,
  Mail,
  Twitter,
  Github,
  PenTool,
} from "lucide-react";

const socialLinks = [
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:kartikeyaranjan02@gmail.com",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kartikeya-ranjan-845693201/",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/KartikeyaRanjan",
    color: "hover:text-sky-500",
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/kartikeya01",
    color: "hover:text-gray-400",
  },
  {
    name: "Medium",
    icon: PenTool,
    href: "https://medium.com/@kartikeyaranjan02",
    color: "hover:text-green-600",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's connect! Reach out through any of these platforms.
            <br />
            Email: kartikeyaranjan02@gmail.com
          </p>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                    className="flex flex-col items-center gap-3 p-6 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-card/50 group"
                  >
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
