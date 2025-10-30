import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Briefcase } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Practical Skills",
      description: "Learn to use AI tools that solve real business problems—from analyzing data to improving customer experiences."
    },
    {
      icon: Users,
      title: "Career-Focused",
      description: "Build skills that help you stand out, get hired, or advance in your current role."
    },
    {
      icon: Zap,
      title: "Real-World Application",
      description: "Every lesson is designed for immediate use in your daily work, not just theory."
    },
    {
      icon: Briefcase,
      title: "Empowerment Through AI",
      description: "Learn to take initiative using AI workflows that enhance your analytical, communication, and innovation capabilities."
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
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Learn AI. Get Hired.<br />Get Promoted.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agentic Learning Labs teaches professionals how to use AI tools and workflows to improve real job performance and advance their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Agentic Learning Labs provides practical AI education for professionals, students, and job-seekers who want to improve their analytical, communication, and innovation workflows.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The term "agentic" reflects our mission: empowering people to take initiative using AI tools. We don't teach you to build autonomous software agents. We teach you how to use AI effectively in real work settings.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you're analyzing data, improving customer experiences, or developing business strategies, our four-week courses give you hands-on skills that employers value.
              </p>
              <p className="text-lg text-muted-foreground">
                Our goal is simple: help you gain confidence using AI at work, improve your efficiency, and strengthen your competitiveness in the job market.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">4 Weeks</CardTitle>
                  <CardDescription>Intensive, practical training that fits your schedule</CardDescription>
                </CardHeader>
              </Card>
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">3 Courses</CardTitle>
                  <CardDescription>Data Analytics, Customer Experience, and Sales & Marketing tracks</CardDescription>
                </CardHeader>
              </Card>
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl">Real Results</CardTitle>
                  <CardDescription>Skills that help you stand out, get hired, or move up</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
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

      {/* Who We Serve Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl mb-3">Professionals</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Looking to integrate AI into your current role? Learn workflows that help you analyze data, communicate insights, and drive innovation in your organization.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl mb-3">Job Seekers</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Searching for your next opportunity? Build practical AI skills that make your resume stand out and demonstrate value to potential employers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl mb-3">Career Changers</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Re-entering the workforce or pivoting careers? Gain confidence using modern AI tools that are increasingly essential across all industries.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-6 gradient-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our courses focus on practical application, not abstract theory. You'll learn to craft effective prompts, work with data, and integrate AI into everyday tasks across three specialized tracks:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Data Analytics & Decision Making</h3>
              <p className="text-muted-foreground">Use AI to analyze data, generate insights, and make informed business decisions.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Customer Experience & Product Innovation</h3>
              <p className="text-muted-foreground">Enhance customer interactions and streamline product development using AI tools.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Sales, Marketing & Business Development</h3>
              <p className="text-muted-foreground">Master AI workflows for sales enablement, marketing campaigns, and business growth.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
