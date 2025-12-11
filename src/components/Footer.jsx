import {
  ArrowUp,
  Linkedin,
  Mail,
  Twitter,
  Github,
  Star,
  FileText,
  PenTool,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kartikeya-ranjan-845693201/",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:kartikeyaranjan02@gmail.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/KartikeyaRanjan",
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/kartikeya01",
  },
  {
    name: "Medium",
    icon: PenTool,
    href: "https://medium.com/@kartikeyaranjan02",
  },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left side - Content */}
          <div className="flex-1 space-y-4 text-left">
            {/* Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-left">
              Kartikeya Ranjan
            </h3>

            {/* Title/Description */}
            <p className="text-sm md:text-base text-muted-foreground text-left">
              Senior Associate Developer @NPCI | Ex-SDE Intern
              @JioPlatformsLimited | NITK IT'24
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? ""
                        : "noopener noreferrer"
                    }
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.name === "Medium" ? (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <img
                          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg"
                          alt="Medium"
                          className="w-full h-full"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(58%) sepia(93%) saturate(1352%) hue-rotate(220deg) brightness(95%) contrast(90%)",
                          }}
                        />
                      </div>
                    ) : (
                      <IconComponent size={20} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/150ktmraj7xpIcM5G8CpHJvDv0V6pzswB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
              <a
                href="https://github.com/kartikeya01/portfolio-website-kartikeya"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
              >
                <Github size={18} />
                Star
              </a>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/50 overflow-hidden bg-card/50 backdrop-blur-sm">
              <img
                src="/profile/profile_2.png"
                alt="Kartikeya Ranjan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  e.target.parentElement.innerHTML =
                    '<div class="text-3xl font-bold text-primary">KR</div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mt-8 pt-8 border-t border-border">
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
