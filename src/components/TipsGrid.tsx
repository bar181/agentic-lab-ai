import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Sparkles, Code, Rocket } from "lucide-react";

const tips = [
  {
    icon: Brain,
    title: "Understanding Agent Behavior",
    description: "Learn how AI agents make decisions and process information in complex environments.",
    category: "Foundations"
  },
  {
    icon: Zap,
    title: "Optimization Techniques",
    description: "Master advanced strategies for improving agent performance and efficiency.",
    category: "Performance"
  },
  {
    icon: Target,
    title: "Goal-Oriented Design",
    description: "Discover how to architect agents that effectively pursue and achieve objectives.",
    category: "Architecture"
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description: "Craft precise prompts that unlock the full potential of your AI agents.",
    category: "Best Practices"
  },
  {
    icon: Code,
    title: "Implementation Patterns",
    description: "Explore proven code patterns and structures for building robust agents.",
    category: "Development"
  },
  {
    icon: Rocket,
    title: "Scaling Strategies",
    description: "Learn techniques for deploying and scaling agents in production environments.",
    category: "Deployment"
  }
];

const TipsGrid = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Essential Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated knowledge to accelerate your journey with AI agents
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card 
                key={index}
                className="group p-8 glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
              >
                {/* Category Badge */}
                <div className="text-xs font-medium text-primary mb-4 uppercase tracking-wider">
                  {tip.category}
                </div>

                {/* Icon */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TipsGrid;
