import { ArrowDown, Download } from "lucide-react";
import { useState, useEffect } from "react";

const TypingEffect = ({ fullText, speed = 100, repeatDelay = 3500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Typing complete, wait then reset
        const resetTimeout = setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
          setIsTyping(true);
        }, repeatDelay);

        return () => clearTimeout(resetTimeout);
      }
    }
  }, [currentIndex, fullText, speed, isTyping, repeatDelay]);

  // Cursor blinking effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);
      return () => clearInterval(interval);
    } else {
      setShowCursor(false);
    }
  }, [currentIndex, fullText.length]);

  // Parse the text to apply styling
  const renderText = () => {
    // Find positions of "Kartikeya" and "Ranjan" in the full text
    const kartikeyaStart = fullText.indexOf("Kartikeya");
    const kartikeyaEnd = kartikeyaStart + "Kartikeya".length;
    const ranjanStart = fullText.indexOf("Ranjan");
    const ranjanEnd = ranjanStart + "Ranjan".length;

    // Render character by character to apply color during typing
    return displayedText.split("").map((char, index) => {
      const isKartikeya = index >= kartikeyaStart && index < kartikeyaEnd;
      const isRanjan = index >= ranjanStart && index < ranjanEnd;

      if (isKartikeya || isRanjan) {
        return (
          <span key={index} className="text-primary">
            {char}
          </span>
        );
      }
      return <span key={index}>{char}</span>;
    });
  };

  return (
    <span>
      {renderText()}
      {currentIndex < fullText.length && showCursor && (
        <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse">
          |
        </span>
      )}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-24"
    >
      <div className="container max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-start">
          {/* Left side - Content */}
          <div className="flex-1 text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight break-words">
              <TypingEffect
                fullText="Hi there! I am Kartikeya Ranjan"
                speed={50}
                repeatDelay={2000}
              />
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed break-words">
              Full-stack developer working as a Senior Associate Developer at
              National Payments Corporation of India (NPCI), building scalable
              and secure payment systems. I specialize in React, Spring Boot,
              distributed databases, and cloud-native architectures. Alongside
              industry work, I explore blockchain, build decentralized apps, and
              publish research and technical articles.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 flex-wrap">
              <a href="#experience" className="cosmic-button">
                View my Work Experience
              </a>
              <a
                href="/Resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
