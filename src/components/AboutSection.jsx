import { Briefcase, Code, Database, Link2, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50 space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-left break-words">
                Passionate Full-Stack Developer & Problem Solver
              </h3>

              <p className="text-muted-foreground text-left break-words">
                I'm a full-stack developer focused on building scalable systems
                and intuitive user experiences. My work spans both frontend and
                backend engineering, with a strong emphasis on performance,
                clean architecture, and reliability.
              </p>

              <p className="text-muted-foreground text-left break-words">
                At NPCI, I contribute to mission-critical UPI payment
                platforms—modernizing legacy applications, optimizing backend
                workflows, and engineering fast, responsive interfaces using
                React, Spring Boot, and distributed databases.
              </p>

              <p className="text-muted-foreground text-left break-words">
                I enjoy breaking down complex problems into clean, efficient
                solutions and constantly exploring new technologies. My
                interests extend across system design, Web3 development, and
                high-performance applications.
              </p>

              <p className="text-muted-foreground text-left break-words">
                Outside of work, I build side projects, write technical
                articles, and stay active in competitive programming—continually
                pushing myself to grow as an engineer and expand my
                problem-solving abilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  Get In Touch
                </a>

                <a
                  href="https://drive.google.com/file/d/150ktmraj7xpIcM5G8CpHJvDv0V6pzswB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50 space-y-6">
              <h3 className="text-2xl font-semibold text-left mb-6">
                What I Do
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-primary">
                        Web Development
                      </h4>
                      <p className="text-muted-foreground break-words">
                        Building high-performance, modern web applications using
                        React, Next.js, Spring Boot, and scalable backend
                        architectures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-primary">
                        Distributed & Backend Systems
                      </h4>
                      <p className="text-muted-foreground break-words">
                        Designing reliable APIs, optimizing complex workflows,
                        and working with databases like Cassandra, Postgres,
                        Redis, and MongoDB. I currently work on UPI payment
                        systems, contributing to platforms that power real-time,
                        large-scale financial transactions across India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Link2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-primary">
                        Blockchain & Web3
                      </h4>
                      <p className="text-muted-foreground break-words">
                        Building Web3 applications on Ethereum using Solidity
                        and Chainlink integrations. I also authored an
                        IEEE-published paper introducing a Bidirectional
                        Blockchain Architecture for faster and more secure data
                        retrieval.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-primary">
                        Project Ownership
                      </h4>
                      <p className="text-muted-foreground break-words">
                        Leading end-to-end development—from design to
                        deployment—while collaborating across agile teams and
                        delivering robust, production-ready systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
