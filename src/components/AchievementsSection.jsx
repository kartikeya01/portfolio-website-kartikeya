import { Trophy, Target, TrendingUp, Code2, BookOpen, Award, GraduationCap, Calendar, Building2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    platform: "LeetCode",
    icon: Code2,
    problemsSolved: "700+",
    rating: "1838",
    bestRank: "418/33,040",
    description: "Contest Rating 1838, 700+ problems solved, best global rank 418/33,040",
    link: "https://leetcode.com/u/kartikeyaranjan01/",
  },
  {
    platform: "Codeforces",
    icon: TrendingUp,
    problemsSolved: "N/A",
    rating: "1308",
    bestRank: "Rated",
    description: "Rated 1308",
    link: "https://codeforces.com/profile/kartikeya_r_01",
  },
  {
    platform: "CodeChef",
    icon: Trophy,
    problemsSolved: "59",
    rating: "1699",
    bestRank: "929 (Div 2)",
    description: "3★, rating 1699, global rank 929 (Division 2)",
    link: "https://www.codechef.com/users/kartikeya_2002",
  },
  {
    platform: "GeeksforGeeks",
    icon: BookOpen,
    problemsSolved: "TBD",
    rating: "TBD",
    bestRank: "TBD",
    description: "Data coming soon",
    link: "https://www.geeksforgeeks.org/profile/kartikeyaranjan01?tab=activity",
  },
];

const certifications = [
  {
    title: "Deep Tech Bootcamp – AI/ML, Data Science & Engineering",
    institution: "International Institute of Information Technology, Hyderabad (IIIT-H)",
    period: "Nov 2024 – Apr 2025",
    description: "Awarded a Certificate of Merit for excellent performance in the Deep Tech Bootcamp conducted by the Outreach Division of IIIT Hyderabad in collaboration with TalentSprint. The program focused on building strong foundations and practical expertise in Artificial Intelligence, Machine Learning, Data Science, and Engineering, with emphasis on problem-solving, applied learning, and industry-relevant skills. This experience strengthened my ability to design data-driven solutions and apply advanced ML concepts to real-world engineering problems.",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "LightGBM", "MLflow"],
    certificateLink: "/achievements/IIIT Hyderabad Bootcamp.pdf",
  },
];

const awards = [
  {
    title: "Playground Ninja – Internal Coding Challenge",
    organization: "Advance Open Source | NPCI",
    description: "Completed the Playground Ninja internal coding challenge, focused on demonstrating strong fundamentals in Java, Spring Boot, React.js, JavaScript, and SQL. The challenge involved implementing backend APIs, handling database interactions, and integrating frontend components with an emphasis on clean code, correctness, and maintainability. This certification reflects solid full-stack development skills and the ability to translate problem statements into working solutions.",
    techStack: ["Java", "Spring Boot", "React.js", "JavaScript", "SQL"],
    certificateLink: "/achievements/Playground Ninja 1.pdf",
  },
  {
    title: "Playground Supreme – Internal Coding Challenge",
    organization: "Advance Open Source | NPCI",
    description: "Achieved the Playground Supreme level, an advanced internal coding challenge designed to evaluate deeper system understanding and production-level problem solving. The challenge emphasized scalable backend design, efficient SQL queries, robust API contracts, and seamless frontend integration using Java, Spring Boot, React.js, and JavaScript. This recognition highlights advanced engineering capability, attention to performance, and the ability to deliver high-quality, end-to-end solutions under constraints.",
    techStack: ["Java", "Spring Boot", "React.js", "JavaScript", "SQL"],
    certificateLink: "/achievements/Playground Supreme.pdf",
  },
];

const Carousel = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "h-3 w-3 bg-primary ring-2 ring-primary/50 ring-offset-2 ring-offset-background"
                  : "h-3 w-3 bg-white/80 hover:bg-white border border-white/50 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">Achievements</span>
          </h2>

          {/* Coding Achievements Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Coding <span className="text-primary">Achievements</span>
            </h3>
            <p className="text-left text-muted-foreground mb-8 max-w-2xl break-words">
              My competitive programming journey across various platforms, showcasing
              problem-solving skills and algorithmic expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <a
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-border p-5 md:p-6 bg-card rounded-lg shadow-lg border border-border/50 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 hover:bg-card/80 cursor-pointer group"
                  >
                    {/* Platform Header */}
                    <div className="flex items-center gap-2 mb-5 flex-shrink-0">
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold break-words leading-tight group-hover:text-primary transition-colors duration-300">
                        {achievement.platform}
                      </h3>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4 flex-1">
                      {/* Problems Solved */}
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex-shrink-0">
                          <Target className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground mb-1 leading-tight">
                            Problems Solved
                          </p>
                          <p className="text-base font-semibold break-words group-hover:text-primary transition-colors duration-300">
                            {achievement.problemsSolved}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex-shrink-0">
                          <TrendingUp className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground mb-1 leading-tight">Rating</p>
                          <p className="text-base font-semibold break-words group-hover:text-primary transition-colors duration-300">
                            {achievement.rating}
                          </p>
                        </div>
                      </div>

                      {/* Best Rank */}
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex-shrink-0">
                          <Trophy className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground mb-1 leading-tight">
                            Best Rank
                          </p>
                          <p className="text-base font-semibold break-words leading-tight group-hover:text-primary transition-colors duration-300">
                            {achievement.bestRank}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              <span className="text-primary">Certifications</span>
            </h3>
            <p className="text-left text-muted-foreground mb-8 max-w-2xl break-words">
              Professional certifications and training programs that validate my expertise and continuous learning.
            </p>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
              <Carousel
                items={certifications}
                renderItem={(cert, index) => (
                  <div className="gradient-border p-6 md:p-8 bg-card/50 rounded-lg shadow-md border border-border/30 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 hover:bg-card/70 group mx-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl md:text-2xl font-bold mb-3 text-left group-hover:text-primary transition-colors duration-300 break-words">
                          {cert.title}
                        </h4>
                        
                        <div className="space-y-2 mb-4 text-left">
                          <div className="flex items-start gap-2">
                            <Building2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm font-medium text-foreground break-words">
                              {cert.institution}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground break-words">
                              {cert.period}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-left leading-relaxed mb-4 break-words">
                          {cert.description}
                        </p>

                        {cert.techStack && cert.techStack.length > 0 && (
                          <div className="mb-4">
                            <p className="text-xs text-muted-foreground mb-2 text-left font-medium">Tech Stack:</p>
                            <div className="flex flex-wrap gap-2">
                              {cert.techStack.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground break-words"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {cert.certificateLink && (
                          <a
                            href={cert.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium mt-2"
                          >
                            View Certificate <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Awards and Recognitions Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Awards & <span className="text-primary">Recognitions</span>
            </h3>
            <p className="text-left text-muted-foreground mb-8 max-w-2xl break-words">
              Recognition and awards received for outstanding contributions and achievements.
            </p>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
              {awards.length > 0 ? (
                <Carousel
                  items={awards}
                  renderItem={(award, index) => (
                    <div className="gradient-border p-6 md:p-8 bg-card/50 rounded-lg shadow-md border border-border/30 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 hover:bg-card/70 group mx-2">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                          <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl md:text-2xl font-bold mb-3 text-left group-hover:text-primary transition-colors duration-300 break-words">
                            {award.title}
                          </h4>
                          
                          <div className="space-y-2 mb-4 text-left">
                            <div className="flex items-start gap-2">
                              <Building2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-medium text-foreground break-words">
                                {award.organization}
                              </p>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground text-left leading-relaxed mb-4 break-words">
                            {award.description}
                          </p>

                          {award.techStack && award.techStack.length > 0 && (
                            <div className="mb-4">
                              <p className="text-xs text-muted-foreground mb-2 text-left font-medium">Tech Stack:</p>
                              <div className="flex flex-wrap gap-2">
                                {award.techStack.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground break-words"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {award.certificateLink && (
                            <a
                              href={award.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium mt-2"
                            >
                              View Certificate <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                />
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Awards and recognitions will be added here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

