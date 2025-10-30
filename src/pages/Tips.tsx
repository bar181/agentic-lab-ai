import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lightbulb, TrendingUp, Clock, Target, 
  MessageSquare, BarChart3, Mail, Calendar,
  FileSpreadsheet, Presentation, Users, Briefcase
} from "lucide-react";

const Tips = () => {
  const tipsByCategory = {
    productivity: [
      {
        icon: Clock,
        title: "Automate Meeting Summaries",
        description: "Use AI to transcribe meetings and generate action items instantly. Tools like Otter.ai save 2+ hours weekly.",
        impact: "High",
        timeToImplement: "5 min"
      },
      {
        icon: Mail,
        title: "Smart Email Management",
        description: "Let AI categorize, prioritize, and draft responses. Reduce inbox time by 40% with tools like SaneBox.",
        impact: "High",
        timeToImplement: "15 min"
      },
      {
        icon: Calendar,
        title: "Intelligent Scheduling",
        description: "AI assistants like Reclaim.ai optimize your calendar automatically, protecting focus time and balancing priorities.",
        impact: "Medium",
        timeToImplement: "10 min"
      }
    ],
    communication: [
      {
        icon: MessageSquare,
        title: "Polish Your Writing",
        description: "Use AI to adjust tone, fix grammar, and improve clarity. Grammarly and Claude help maintain professional communication.",
        impact: "Medium",
        timeToImplement: "2 min"
      },
      {
        icon: Presentation,
        title: "Create Presentations Faster",
        description: "AI tools like Gamma generate slide decks from outlines. Cut presentation prep time by 60%.",
        impact: "High",
        timeToImplement: "10 min"
      },
      {
        icon: Users,
        title: "Personalize at Scale",
        description: "Generate customized messages for clients using AI. Maintain personal touch while reaching more people.",
        impact: "Medium",
        timeToImplement: "20 min"
      }
    ],
    analysis: [
      {
        icon: BarChart3,
        title: "Instant Data Insights",
        description: "Ask AI to analyze spreadsheets and identify trends. ChatGPT's Code Interpreter processes data in seconds.",
        impact: "High",
        timeToImplement: "5 min"
      },
      {
        icon: FileSpreadsheet,
        title: "Generate Reports Automatically",
        description: "Use AI to transform raw data into polished reports with charts and summaries. Save hours of manual work.",
        impact: "High",
        timeToImplement: "30 min"
      },
      {
        icon: TrendingUp,
        title: "Market Research in Minutes",
        description: "AI can compile industry trends, competitor analysis, and market insights faster than traditional methods.",
        impact: "Medium",
        timeToImplement: "15 min"
      }
    ],
    strategy: [
      {
        icon: Target,
        title: "Strategic Planning Assistant",
        description: "Brainstorm with AI to develop strategies, identify risks, and explore scenarios. Get diverse perspectives instantly.",
        impact: "High",
        timeToImplement: "20 min"
      },
      {
        icon: Briefcase,
        title: "Project Kickoff Templates",
        description: "Generate project plans, timelines, and stakeholder documents with AI. Start projects 3x faster.",
        impact: "Medium",
        timeToImplement: "15 min"
      },
      {
        icon: Lightbulb,
        title: "Innovation Workshops",
        description: "Use AI to facilitate ideation sessions, generate creative solutions, and challenge assumptions.",
        impact: "Medium",
        timeToImplement: "30 min"
      }
    ]
  };

  const stats = [
    { label: "Average Time Saved Weekly", value: "8-12 hrs", icon: Clock },
    { label: "Productivity Increase", value: "35-45%", icon: TrendingUp },
    { label: "Task Automation Rate", value: "60%", icon: Target },
    { label: "ROI Within", value: "2-4 weeks", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 gradient-mesh">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Practical Tips
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              AI Tips That Actually Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Battle-tested strategies to integrate AI into your daily workflow and boost productivity
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="text-center glass">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Tabs */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="productivity" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>

            {Object.entries(tipsByCategory).map(([category, tips]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tips.map((tip, idx) => {
                    const Icon = tip.icon;
                    return (
                      <Card key={idx} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                          <CardDescription>{tip.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              tip.impact === 'High' 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-secondary/10 text-secondary-foreground'
                            }`}>
                              {tip.impact} Impact
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                              {tip.timeToImplement}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 px-6 gradient-accent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Pro Tips</h2>
            <p className="text-muted-foreground">Advanced strategies from power users</p>
          </div>
          
          <div className="space-y-4">
            {[
              "Always fact-check AI outputs, especially for critical decisions or public communications",
              "Use specific prompts with context, examples, and desired format for better results",
              "Create a personal 'prompt library' for frequently used AI tasks",
              "Combine AI tools (e.g., ChatGPT for drafting + Grammarly for polishing)",
              "Set 'AI time blocks' in your calendar to batch similar tasks together",
              "Train your team on AI basics to multiply productivity gains across the organization"
            ].map((tip, idx) => (
              <Card key={idx} className="glass">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-sm">{tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tips;
