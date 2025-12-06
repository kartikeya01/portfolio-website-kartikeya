import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

const InstitutionLogo = ({ logo, institution, fillCircle = false, smaller = false, removeWhiteBg = false, themeAware = false }) => {
  const [imageError, setImageError] = useState(false);
  const isDark = useDarkMode();

  const getImageStyle = () => {
    const baseStyle = {};
    if (removeWhiteBg && !themeAware) {
      baseStyle.mixBlendMode = 'multiply';
    }
    if (themeAware && isDark) {
      baseStyle.filter = 'brightness(0) invert(1)';
    }
    return baseStyle;
  };

  return (
    <div className={`${fillCircle ? "p-0" : smaller ? "p-2" : "p-3"} rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center h-14 w-14 ${fillCircle ? "overflow-hidden" : ""}`}>
      {logo && !imageError ? (
        <img
          src={logo}
          alt={`${institution} logo`}
          className={fillCircle ? "h-full w-full object-cover rounded-full" : smaller ? "h-10 w-10 object-contain" : "h-8 w-8 object-contain"}
          style={getImageStyle()}
          onError={() => setImageError(true)}
        />
      ) : (
        <Building2 className="h-6 w-6 text-primary" />
      )}
    </div>
  );
};

const education = [
  {
    institution: "National Institute of Technology Karnataka, Surathkal",
    period: "Dec 2020 - May 2024",
    grade: "CGPA: 7.81",
    logo: "/education/NITK_logo.png",
    smaller: true,
    themeAware: true,
  },
  {
    institution: "Shiv Jyoti Senior Secondary School, Kota, Rajasthan",
    board: "CBSE",
    period: "Apr 2019 - May 2020",
    grade: "Grade: 88%",
    logo: "/education/shiv_jyoti.png",
  },
  {
    institution: "City Montessori School, Lucknow, Uttar Pradesh",
    board: "ICSE",
    period: "Apr 2017 - May 2018",
    grade: "Grade: 90.4%",
    logo: "/education/cms.png",
    fillCircle: true,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Education
          </h2>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
            <div className="relative">
              {/* Timeline line - visible on larger screens */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary shadow-lg"></div>

              <div className="space-y-12 md:space-y-16">
                {education.map((edu, index) => (
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
                          <InstitutionLogo logo={edu.logo} institution={edu.institution} fillCircle={edu.fillCircle} smaller={edu.smaller} removeWhiteBg={edu.removeWhiteBg} themeAware={edu.themeAware} />
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-1 text-left">
                              {edu.institution}
                            </h3>
                            {edu.board && (
                              <div className="flex items-center gap-2 text-primary font-semibold mb-1 text-left">
                                <GraduationCap className="h-4 w-4 flex-shrink-0" />
                                <span className="text-left">{edu.board}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Award className="h-4 w-4 flex-shrink-0" />
                              <span>{edu.grade}</span>
                            </div>
                          </div>
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

