import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle2, XCircle, Copy } from "lucide-react";

const Resources = () => {
  const PromptCard = ({ title, prompt, whenToUse, example }: any) => (
    <Card className="mb-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-accent/50 border-l-4 border-primary p-4 rounded">
          <p className="font-mono text-sm">{prompt}</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">When to Use:</h4>
          <p className="text-sm text-muted-foreground">{whenToUse}</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">Use Case Example:</h4>
          <p className="text-sm text-muted-foreground italic">{example}</p>
        </div>
      </CardContent>
    </Card>
  );

  const scamperItems = [
    { letter: 'S', title: 'SUBSTITUTE', desc: 'What can be replaced? What materials, processes, or components could be swapped?', example: 'Replace in-person meetings with async video updates' },
    { letter: 'C', title: 'COMBINE', desc: 'What can be merged with something else? What features or ideas could work together?', example: 'Combine task management with time tracking' },
    { letter: 'A', title: 'ADAPT', desc: 'What can be adjusted for a new purpose? What can be modified from another context?', example: 'Adapt restaurant reservation systems for healthcare appointments' },
    { letter: 'M', title: 'MODIFY', desc: 'What can be changed in scale, shape, or function? Can you change the magnitude or impact?', example: 'Modify a desktop app into a mobile-first experience' },
    { letter: 'P', title: 'PUT TO ANOTHER USE', desc: 'What alternative applications exist? How else could this be used?', example: 'Use AI code review tools for documentation checking' },
    { letter: 'E', title: 'ELIMINATE', desc: 'What can be removed to simplify? What\'s unnecessary or redundant?', example: 'Eliminate approval steps that don\'t add value' },
    { letter: 'R', title: 'REVERSE', desc: 'What happens if you flip it or reorder it? Can the sequence be changed?', example: 'Reverse the onboarding flow to start with the end goal first' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 gradient-mesh">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Core Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Essential AI Prompts & Methods
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Battle-tested prompts and methodologies for AI-powered professional work
            </p>
          </div>
        </div>
      </section>

      {/* Five Power Prompts */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            The Five Power Prompts
          </h2>
          
          <PromptCard
            title="Prompt #1: Meta-Evaluation"
            prompt="Score your response using a rubric 1-100. Reflect. Then update your response."
            whenToUse="Use when accuracy matters more than speed. Forces the AI to evaluate its own work before you waste time on mediocre output. Creates a self-correction loop."
            example="Critical research reports, technical documentation, strategic analysis where precision is non-negotiable."
          />

          <PromptCard
            title="Prompt #2: Verification"
            prompt="Is this real or theatre? Show proof"
            whenToUse="Critical for fact-checking and avoiding hallucinations. Essential for binary facts and statistics. Any time you need citations or evidence."
            example="After Claude provides statistics about market trends, use this to force verification with sources. Prevents fabricated data."
          />

          <PromptCard
            title="Prompt #3: Brutal Honesty (Dr. House Persona)"
            prompt="Use the persona of Dr. House (from the tv show), and evaluate this...."
            whenToUse="When you need honest feedback without sugar-coating. To challenge assumptions and find logical holes. When you want someone to play devil's advocate."
            example="You've written a business plan and need someone to tear it apart to find weaknesses before presenting to investors."
          />

          <PromptCard
            title="Prompt #4: Instant Prototyping"
            prompt="Visualize what we've discussed as an interactive artifact (html file with JavaScript)"
            whenToUse="Turn abstract conversations into working prototypes instantly. Validate concepts before writing production code. Create demos for stakeholder reviews."
            example="After discussing a dashboard concept, instantly create a working prototype to test with users."
          />

          <PromptCard
            title="Prompt #5: Simplification"
            prompt="Summarize the context below. Start with an analogy and <40 word tldr using reading level 7."
            whenToUse="Perfect for explaining complex technical concepts to stakeholders. Forces clarity over jargon. Bridges technical and non-technical audiences."
            example="You need to explain your ML model architecture to the executive team who don't have technical backgrounds."
          />
        </div>
      </section>

      {/* Three-Step Rubric */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            Three-Step Rubric Evaluation Method
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Why This Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The immediate "score 1-100" approach forces arbitrary criteria. By explicitly generating criteria first, 
                you create reproducible measurements and prevent post-hoc rationalization.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">Step 1: CONTEXT</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Understand what you're evaluating and why it matters</li>
                    <li>• Define the purpose and success criteria</li>
                    <li>• Establish what "good" means in this specific situation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold mb-2">Step 2: CREATE RUBRIC</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Define explicit criteria with performance levels</li>
                    <li>• What does "excellent" actually look like for each criterion?</li>
                    <li>• Create 3-5 criteria, each worth 15-25 points to total 100</li>
                    <li>• Define 4 performance levels per criterion (Excellent/Good/Adequate/Poor)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold mb-2">Step 3: SCORE</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apply rubric systematically to the content</li>
                    <li>• Justify each score with specific evidence from the output</li>
                    <li>• Identify lowest-scoring criterion for targeted improvement</li>
                    <li>• Calculate total score out of 100</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                <h4 className="font-bold text-primary mb-2">For Agentic Systems:</h4>
                <p className="text-sm text-muted-foreground mb-2">Rubrics become executable quality gates. Agents can:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Self-assess before returning results to orchestrator</li>
                  <li>• Trigger refinement loops when scores fall below thresholds (e.g., &lt;85)</li>
                  <li>• Provide structured feedback to other agents in the swarm</li>
                  <li>• Log evaluation data for continuous improvement</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Make AI Sound Human */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            Make AI Sound Human
          </h2>

          <Card className="mb-6 border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">The "Stop Doing" List</CardTitle>
              <CardDescription>
                These words and phrases are dead giveaways that content is AI-generated. Explicitly ban them in your prompts:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-destructive" />
                    Banned Words
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• delve</li>
                    <li>• leverage</li>
                    <li>• seamless</li>
                    <li>• cutting-edge</li>
                    <li>• revolutionize</li>
                    <li>• tapestry</li>
                    <li>• utilize</li>
                    <li>• unlock the potential</li>
                    <li>• game-changer</li>
                    <li>• paradigm shift</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-destructive" />
                    Banned Transitions
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• furthermore</li>
                    <li>• moreover</li>
                    <li>• indeed</li>
                    <li>• thus</li>
                    <li>• consequently</li>
                    <li>• in conclusion</li>
                    <li>• to summarize</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  Good Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><strong>Use contractions:</strong> don't, it's, we'll, you're</li>
                  <li><strong>Vary sentence length:</strong> Mix short punchy sentences with longer ones</li>
                  <li><strong>Address as "you":</strong> Make it conversational and direct</li>
                  <li><strong>Include examples:</strong> Real scenarios beat abstract concepts</li>
                  <li><strong>Write like explaining to a friend:</strong> Natural, warm, approachable</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-5 h-5" />
                  Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><strong>Formal transitions:</strong> Furthermore, moreover, in addition</li>
                  <li><strong>Corporate jargon:</strong> Synergy, bandwidth, circle back</li>
                  <li><strong>Passive voice everywhere:</strong> "The report was written" vs "I wrote the report"</li>
                  <li><strong>Overly complex vocabulary:</strong> When simple words work better</li>
                  <li><strong>Repetitive structures:</strong> Every sentence following the same pattern</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Example Prompt Template:</h4>
              <p className="font-mono text-sm bg-accent/50 p-3 rounded border-l-4 border-primary">
                "Write in a clear, conversational tone. Avoid corporate jargon and clichés. Do not use: delve, leverage, seamless, cutting-edge, revolutionize. Vary sentence length to create a natural rhythm. Use contractions where natural."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SCAMPER Method */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🧠</span>
            Structured Brainstorming: SCAMPER Method
          </h2>

          <p className="text-muted-foreground mb-6">
            A systematic framework for generating innovative ideas by applying seven action verbs to any problem or concept.
          </p>

          <div className="space-y-4">
            {scamperItems.map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.letter}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                      <p className="text-sm text-primary italic">Example: {item.example}</p>
                    </div>
                  </div>
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

export default Resources;
