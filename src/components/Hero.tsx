import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Lightbulb } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float">
        <Brain className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-30 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-12 h-12 text-accent" />
      </div>
      <div className="absolute top-40 right-32 opacity-30 animate-float" style={{ animationDelay: "4s" }}>
        <Lightbulb className="w-14 h-14 text-secondary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Learning</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Agentic Learning
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Labs
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your comprehensive toolkit for mastering AI agents with curated tips, 
            best practices, and cutting-edge insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6" asChild>
              <a href="/resources">Explore Resources</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="/tips">View Tips</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
