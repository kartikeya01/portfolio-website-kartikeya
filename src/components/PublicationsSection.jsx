import { FileText, ExternalLink, Calendar, BookOpen, MapPin, Tag, PenTool, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const publications = [
  {
    title: "A Bidirectional Blockchain Architecture for Supply Chain Management",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    venueShort: "IEEE CONECCT 2024",
    track: "Cybersecurity & Blockchain",
    link: "https://ieeexplore.ieee.org/document/10677059",
    conferenceLink: "https://ieeexplore.ieee.org/xpl/conhome/10676995/proceeding",
    year: "2024",
    date: "12-14 July 2024",
    location: "Bangalore, India",
    summary: "This paper proposes a novel bidirectional blockchain architecture that introduces a forward pointer alongside the traditional backward pointer, enabling traversal in both directions. Unlike standard blockchain networks that allow only backward linking—leading to slow data retrieval and limited security guarantees—this architecture dramatically improves both search efficiency and tamper-resistance.",
    fullDescription: `This paper proposes a novel bidirectional blockchain architecture that introduces a forward pointer alongside the traditional backward pointer, enabling traversal in both directions. Unlike standard blockchain networks that allow only backward linking—leading to slow data retrieval and limited security guarantees—this architecture dramatically improves both search efficiency and tamper-resistance.

The research demonstrates how bidirectional traversal reduces data lookup time by half (O(n/2)), making it highly practical for complex systems like supply chain management, where rapid product tracking is essential. The architecture is also consensus-independent, meaning it can integrate with any blockchain framework without modifying its consensus mechanism.

Through Python-based simulations, the paper validates improvements in:

• Data retrieval speed using a dual-pointer search method
• Block creation performance across varying transaction volumes
• Network security, as altering any block invalidates both forward and backward hash links

This work highlights the potential of bidirectional blockchains to enhance efficiency, transparency, and trust across domains such as logistics, healthcare, finance, and identity management.`,
  },
];

export const PublicationsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border p-8 md:p-12 bg-card/30 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">Publications</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From research papers to technical write-ups, this section highlights my learning journey and the topics I'm passionate about.
          </p>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <div
                  key={index}
                  className="gradient-border p-6 md:p-8 bg-card/50 rounded-lg shadow-md border border-border/30 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 hover:bg-card/70 group"
                >
                  {/* Publication Header */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-left group-hover:text-primary transition-colors duration-300">
                          {publication.title}
                        </h3>
                      </a>
                      
                      {/* Conference Info */}
                      <div className="space-y-2 mb-3 text-left">
                        <div className="flex items-start gap-2">
                          <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1 text-left">
                            <p className="text-sm font-medium text-foreground text-left">
                              {publication.venue}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Track */}
                      <div className="mb-3 text-left">
                        <div className="flex items-start gap-2 text-muted-foreground text-left">
                          <Tag className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground text-left">
                            <span className="font-medium">Track:</span> {publication.track}
                          </p>
                        </div>
                      </div>

                      {/* Date and Location */}
                      <div className="space-y-2 text-sm text-left mb-4">
                        <div className="flex items-start gap-2 text-muted-foreground text-left">
                          <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-left"><span className="font-medium">Date:</span> {publication.date}</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground text-left">
                          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-left"><span className="font-medium">Location:</span> {publication.location}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      {publication.summary && (
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground text-left leading-relaxed">
                            {publication.summary}
                          </p>
                        </div>
                      )}

                      {/* Expand Button */}
                      {publication.fullDescription && (
                        <button
                          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium mt-2"
                        >
                          <span>{expandedIndex === index ? "Read Less" : "Read More"}</span>
                          {expandedIndex === index ? (
                            <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                          )}
                        </button>
                      )}

                      {/* Expanded Content */}
                      {publication.fullDescription && expandedIndex === index && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <p className="text-sm text-muted-foreground text-left leading-relaxed whitespace-pre-line">
                            {publication.fullDescription}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Medium Articles Card */}
              <a
                href="https://medium.com/@kartikeyaranjan02"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border p-6 md:p-8 bg-card/50 rounded-lg shadow-md border border-border/30 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 hover:bg-card/70 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <PenTool className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-left group-hover:text-primary transition-colors duration-300">
                      Medium Articles
                    </h3>
                    <p className="text-sm text-muted-foreground text-left leading-relaxed">
                      Learning in public. Building things that excite me. Writing to share the process, the insights, and the experiments.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <ExternalLink className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


