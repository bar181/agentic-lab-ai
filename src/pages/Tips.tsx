import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, Target, RefreshCw, Users, Code, Zap, CheckCircle2, XCircle
} from "lucide-react";

const Tips = () => {
  const refinementSteps = [
    { step: 1, title: 'GENERATE', desc: 'Get initial response from AI. Don\'t overthink the first prompt. Focus on getting something to work with.', icon: Lightbulb },
    { step: 2, title: 'EVALUATE', desc: 'Apply rubric or criteria you defined. Score each criterion objectively. Identify specific gaps and weaknesses.', icon: Target },
    { step: 3, title: 'IDENTIFY', desc: 'Which criterion scored lowest? What specific aspects need improvement? Are there patterns in the gaps?', icon: CheckCircle2 },
    { step: 4, title: 'REFINE', desc: 'Target the specific gap with a focused prompt. Don\'t try to fix everything at once. Be explicit about what needs to change.', icon: RefreshCw },
    { step: 5, title: 'REPEAT', desc: 'Continue until quality threshold is met. Track improvements across iterations. Know when to stop (diminishing returns).', icon: Zap }
  ];

  const agenticCards = [
    {
      title: 'Rubrics → Quality Gates',
      items: [
        'Agents self-assess before returning results',
        'Automatic refinement when scores < threshold',
        'Structured feedback between agents in swarm'
      ]
    },
    {
      title: 'Iteration Loops → Automated Refinement',
      items: [
        'Continuous improvement cycles',
        'Learning from evaluation metrics',
        'Flywheel effect for quality'
      ]
    },
    {
      title: 'Specificity → Clear Task Definitions',
      items: [
        'Agents receive unambiguous instructions',
        'Measurable success criteria',
        'Explicit context and constraints'
      ]
    },
    {
      title: 'Personas → Agent Specialization',
      items: [
        'Different agents for different audiences',
        'Consistent voice within domains',
        'Targeted expertise'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 gradient-mesh">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Advanced Tips
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Pro AI Techniques
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced techniques for AI-first development and agentic systems
            </p>
          </div>
        </div>
      </section>

      {/* The Specificity Principle */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            The Specificity Principle
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Vague prompts generate generic results. Always include:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-primary mb-2">1. Concrete Examples</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Show what you want, don't just describe it</li>
                  <li>• Provide sample inputs and desired outputs</li>
                  <li>• Include edge cases</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-2">2. Explicit Constraints</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Word count limits</li>
                  <li>• Format requirements (bullet points, prose, code)</li>
                  <li>• Tone specifications (formal, casual, technical)</li>
                  <li>• Audience definition</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-2">3. Success Criteria</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• What does "done" look like in detail?</li>
                  <li>• How will you know if it's good?</li>
                  <li>• Define the quality bar</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-2">4. Context</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Who is the audience?</li>
                  <li>• What's the purpose?</li>
                  <li>• What constraints exist?</li>
                  <li>• What's the broader situation?</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-5 h-5" />
                  Vague
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-sm">"Write a journaling app"</p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  Specific
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-sm">
                  "Create a simple journaling MVP. The main screen should have a button to create a new entry and a list of past entries sorted by date (newest first). Each entry needs a title field (max 100 chars), a body field (rich text editor), and an automatic timestamp. Use a clean, minimalist design similar to Bear or Notion."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Iterative Refinement Pattern */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🔄</span>
            Iterative Refinement Pattern
          </h2>

          <p className="text-muted-foreground mb-6">
            Don't expect perfection on first output. Use this quality loop:
          </p>

          <div className="space-y-4">
            {refinementSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">Step {item.step}: {item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-6 glass">
            <CardHeader>
              <CardTitle className="text-primary">For Agentic Systems:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">This becomes an automated quality gate where agents:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Self-improve before returning results</li>
                <li>• Log evaluation metrics for learning</li>
                <li>• Trigger escalation when unable to meet thresholds</li>
                <li>• Build quality datasets for training</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Building Effective Personas */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">👤</span>
            Building Effective Personas
          </h2>

          <p className="text-muted-foreground mb-6">
            When you need AI to write for a specific audience, create detailed personas:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Age, gender, location</li>
                  <li>• Education level</li>
                  <li>• Occupation and industry</li>
                  <li>• Income bracket (if relevant)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lifestyle & Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Daily routines and schedules</li>
                  <li>• Hobbies and interests</li>
                  <li>• Core beliefs and values</li>
                  <li>• Media consumption habits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Goals & Motivations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• What are they trying to achieve?</li>
                  <li>• What drives their decisions?</li>
                  <li>• What do they care about most?</li>
                  <li>• What would success look like for them?</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Triggers & Pain Points (MOST IMPORTANT)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• What causes them to seek solutions?</li>
                  <li>• What problems keep them up at night?</li>
                  <li>• What frustrations do they experience?</li>
                  <li>• What would make them take action?</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Communication Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• How do they prefer to receive information?</li>
                  <li>• What tone resonates with them?</li>
                  <li>• What channels do they use?</li>
                  <li>• What format works best?</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass">
            <CardHeader>
              <CardTitle>Example Persona:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground italic">
                "Meet Sarah, a 32-year-old engineering manager at a Series B startup in San Francisco. She has 8 direct reports and is responsible for shipping the mobile app. Her trigger: The team keeps missing sprint deadlines due to unclear requirements. Her pain point: She spends 10+ hours per week in meetings trying to align stakeholders. What she values: Clear documentation and async communication. Her goal: Get stakeholder sign-off without endless meetings."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* No-Code Platform Prompting */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🏗️</span>
            No-Code Platform Prompting
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Best Practices:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong className="text-primary">Be Specific and Detailed</strong>
                <p className="text-sm text-muted-foreground mt-1">Describe exact features, not vague concepts. "Create a button that saves data to local storage" not "make it save stuff"</p>
              </div>
              
              <div>
                <strong className="text-primary">Provide Context</strong>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                  <li>• Requirements: What must it do?</li>
                  <li>• Audience: Who will use it?</li>
                  <li>• Constraints: What limitations exist?</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-primary">Build in Phases</strong>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-1">
                  <li>• Start with core functionality</li>
                  <li>• Add features incrementally</li>
                  <li>• Test each addition before moving forward</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-primary">Reference Previous Steps</strong>
                <p className="text-sm text-muted-foreground mt-1">"Connect the Save button to the database we configured earlier" - Build on established elements</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle>Example:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "Create the front-end for a simple project management tool. The main view should be a Kanban board with three columns: 'To-Do,' 'In Progress,' and 'Done.' Each column should contain draggable cards representing tasks. Each card should display: task title (bold, 16px), assignee name (gray, 12px), and due date (red if overdue, green if on track). Add a + button at the bottom of each column to create new tasks."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For Agentic Systems */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            For Agentic Systems
          </h2>

          <p className="text-muted-foreground mb-6">
            All these patterns scale beautifully to multi-agent orchestration:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {agenticCards.map((card, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="gradient-accent border-primary/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span>∞</span> Infinite Scale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every technique in this toolkit scales to agentic systems, creating quality gates, automated refinement cycles, 
                and production-ready AI-first development workflows. The same principles that make individual AI interactions 
                effective become the foundation for multi-agent orchestration at scale.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tips;
