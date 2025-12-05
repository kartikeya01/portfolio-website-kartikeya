import { ArrowDown } from "lucide-react";
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
    const parts = displayedText.split(/(Kartikeya|Ranjan)/);
    return parts.map((part, index) => {
      if (part === "Kartikeya") {
        return (
          <span key={index} className="text-primary">
            {part}
          </span>
        );
      } else if (part === "Ranjan") {
        return (
          <span key={index} className="text-gradient">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <TypingEffect
                fullText="Hi, I'm Kartikeya Ranjan"
                speed={50}
                repeatDelay={2000}
              />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed">
              Full-stack developer working as a Senior Associate Developer at
              National Payments Corporation of India (NPCI), building scalable
              and secure payment systems. I specialize in React, Spring Boot,
              distributed databases, and cloud-native architectures. Alongside
              industry work, I explore blockchain, build decentralized apps, and
              publish research and technical articles.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/50 overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Placeholder for profile picture - replace with your image */}
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  e.target.parentElement.innerHTML =
                    '<div class="text-4xl font-bold text-primary">KR</div>';
                }}
              />
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
