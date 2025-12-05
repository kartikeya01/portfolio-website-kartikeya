import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

const SkillIcon = ({ skill }) => {
  const [imageError, setImageError] = useState(false);
  const isDark = useDarkMode();

  // Logos that need special handling in dark mode
  const needsInvert = [
    "Kafka",
    "Git",
    "GitHub",
    "gRPC",
    "JWT Authentication",
    "Alchemy",
    "Chainlink VRF",
    "Solidity",
    "ArangoDB",
    "Express",
    "Next.js",
    "TailwindCSS",
    "Rust",
  ];

  const shouldInvert = needsInvert.includes(skill.name);

  return (
    <div className="flex flex-col items-center justify-center gap-3 group cursor-pointer">
      <div className="w-16 h-16 flex items-center justify-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300">
        {!imageError ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className={cn(
              "w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300",
              isDark && shouldInvert && "brightness-0 invert"
            )}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-2xl font-bold text-primary">
            {skill.name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-sm text-foreground/80 text-center font-medium group-hover:text-primary transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
};

const skills = [
  // Programming Languages
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "programming" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "programming" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "programming" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "programming" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/rust.svg", category: "programming" },
  { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", category: "programming" },

  // Frontend
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg", category: "frontend" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg", category: "frontend" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "frontend" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/materialui.svg", category: "frontend" },

  // Backend
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "backend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },

  // Databases
  { name: "Apache Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg", category: "databases" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "databases" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "databases" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "databases" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "databases" },
  { name: "ArangoDB", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/arangodb.svg", category: "databases" },

  // Tools & Technologies
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", category: "tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "tools" },
  { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/grpc.svg", category: "tools" },
  { name: "JWT Authentication", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jsonwebtokens.svg", category: "tools" },
  { name: "Alchemy", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/alchemy.svg", category: "tools" },
  { name: "Chainlink VRF", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/chainlink.svg", category: "tools" },
];

const categories = ["all", "programming", "frontend", "backend", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category === "all" ? "All" : category === "programming" ? "Programming Languages" : category === "frontend" ? "Frontend" : category === "backend" ? "Backend" : category === "databases" ? "Databases" : "Tools & Technologies"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {filteredSkills.map((skill, key) => (
            <SkillIcon key={key} skill={skill} />
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};
