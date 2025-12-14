import { Trophy, Target, TrendingUp, Code2, BookOpen } from "lucide-react";

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

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Coding <span className="text-primary">Achievements</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words px-4">
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
      </div>
    </section>
  );
};

