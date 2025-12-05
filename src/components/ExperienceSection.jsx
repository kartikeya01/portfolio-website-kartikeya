import { Briefcase, Calendar, Building2, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Senior Associate Developer",
    company: "NPCI",
    period: "Sep 2024 – Present",
    achievements: [
      "Built a chatbot-based Bank/PSP onboarding platform using ReactJS + Spring Boot + JWT auth, reducing operational effort by 40% and processing time by 30%.",
      "Migrated the UPI Portal for 650+ banks from JSP to a modern ReactJS frontend, improving UI responsiveness by 50%.",
      "Refactored Spring MVC controllers into REST APIs for the UPI Onboarding Portal, reducing page load time by 35%.",
      "Improved the UPI API test executor (OneClick) by optimizing backend workflows and fixing critical bugs, increasing system stability by 45% and reducing testing time by 25%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Jio Platforms Ltd",
    period: "May 2023 – Jul 2023",
    achievements: [
      "Integrated 2.5M+ instances into the Knowledge Graph using gRPC ingestion pipelines with ArangoDB datasets.",
      "Created complete documentation for the Knowledge Repository Service using MkDocs, improving internal API adoption by 30%.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
          <div className="relative">
          {/* Timeline line - visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary shadow-lg"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg z-10">
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-75"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="gradient-border p-6 md:p-8 card-hover bg-card/50 backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-6 space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-left"
                        >
                          <div className="mt-1.5 flex-shrink-0">
                            <TrendingUp className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

