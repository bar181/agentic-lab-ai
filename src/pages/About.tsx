import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Heart, Award, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const About = () => {
  const aiAdoptionData = [
    { category: "Marketing", percentage: 78 },
    { category: "Sales", percentage: 65 },
    { category: "Operations", percentage: 58 },
    { category: "HR", percentage: 52 },
    { category: "Finance", percentage: 71 },
    { category: "Customer Service", percentage: 82 }
  ];

  const impactData = [
    { name: "Time Savings", value: 35 },
    { name: "Cost Reduction", value: 25 },
    { name: "Quality Improvement", value: 20 },
    { name: "Innovation", value: 20 }
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--chart-1))'];

  const values = [
    {
      icon: Target,
      title: "Practical First",
      description: "We focus on real-world applications that deliver immediate value, not theoretical concepts."
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "AI should augment human capabilities, not replace them. We promote ethical, responsible AI use."
    },
    {
      icon: Zap,
      title: "Action-Oriented",
      description: "Every resource is designed to help you implement AI solutions quickly and effectively."
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Built by professionals, for professionals. We share what actually works in the field."
    }
  ];

  const achievements = [
    { icon: Users, metric: "50K+", label: "Professionals Trained" },
    { icon: Award, metric: "200+", label: "Organizations Served" },
    { icon: TrendingUp, metric: "40%", label: "Avg. Productivity Gain" },
    { icon: Zap, metric: "1M+", label: "Hours Saved" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 gradient-mesh">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Empowering Professionals<br />with AI Knowledge
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agentic Learning Labs is your trusted partner in navigating the AI revolution, providing practical tools and insights for real-world success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We exist to democratize AI knowledge for professionals across all industries. In a rapidly evolving technological landscape, we believe everyone deserves access to practical, actionable AI education.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our focus isn't on coding or technical implementation—it's on helping you understand how to leverage AI tools effectively in your daily work, regardless of your technical background.
              </p>
              <p className="text-lg text-muted-foreground">
                From marketing professionals to finance teams, operations managers to HR leaders, we provide the insights and resources you need to stay competitive in the AI age.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">2020</CardTitle>
                  <CardDescription>Founded during the AI transformation wave</CardDescription>
                </CardHeader>
              </Card>
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">50+ Industries</CardTitle>
                  <CardDescription>Served professionals across diverse sectors</CardDescription>
                </CardHeader>
              </Card>
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">Global Reach</CardTitle>
                  <CardDescription>Supporting professionals in 85+ countries</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <Card key={idx} className="text-center glass">
                  <CardContent className="pt-6">
                    <Icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <p className="text-4xl font-bold mb-2">{achievement.metric}</p>
                    <p className="text-sm text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI Adoption by Department</CardTitle>
                <CardDescription>Percentage of professionals using AI tools regularly</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={aiAdoptionData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="category" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="percentage" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Impact Areas</CardTitle>
                <CardDescription>How AI is transforming professional work</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 gradient-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Practitioners</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team consists of business professionals, consultants, and industry experts who have successfully integrated AI into their workflows. We're not just teaching theory—we're sharing what we've learned in the trenches of real-world business.
          </p>
          <p className="text-lg text-muted-foreground">
            Every resource, tip, and guide is tested and validated by professionals who use these tools daily. We're committed to continuous learning and updating our content as AI technology evolves.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
