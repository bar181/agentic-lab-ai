import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Headphones, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Guides & Ebooks",
      description: "Comprehensive guides on AI implementation in business",
      items: [
        { name: "AI Strategy Playbook for Leaders", type: "PDF", size: "2.4 MB" },
        { name: "Complete Guide to AI-Powered Analytics", type: "PDF", size: "1.8 MB" },
        { name: "AI Ethics & Governance Framework", type: "PDF", size: "980 KB" },
      ]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for practical AI tools",
      items: [
        { name: "Getting Started with ChatGPT for Business", type: "Video", duration: "12 min" },
        { name: "AI-Powered Market Research Techniques", type: "Video", duration: "18 min" },
        { name: "Automating Reports with AI Tools", type: "Video", duration: "15 min" },
      ]
    },
    {
      icon: FileText,
      title: "Templates & Worksheets",
      description: "Ready-to-use templates for AI implementation",
      items: [
        { name: "AI Prompt Library for Marketing", type: "DOCX", size: "450 KB" },
        { name: "ROI Calculator for AI Adoption", type: "XLSX", size: "120 KB" },
        { name: "AI Tool Evaluation Checklist", type: "PDF", size: "340 KB" },
      ]
    },
    {
      icon: Headphones,
      title: "Webinars & Podcasts",
      description: "Expert insights and industry discussions",
      items: [
        { name: "AI in Finance: Monthly Expert Panel", type: "Podcast", duration: "45 min" },
        { name: "Future of Work with AI Assistants", type: "Webinar", duration: "60 min" },
        { name: "Case Studies: AI Success Stories", type: "Podcast", duration: "30 min" },
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
              Resource Library
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your AI Learning Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated resources to help you leverage AI tools effectively in your professional workflow
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.type} • {item.size || item.duration}
                            </p>
                          </div>
                          <Button size="sm" variant="ghost">
                            {category.icon === Video || category.icon === Headphones ? (
                              <ExternalLink className="w-4 h-4" />
                            ) : (
                              <Download className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured This Month</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass">
              <CardHeader>
                <div className="w-full h-40 rounded-lg gradient-primary mb-4 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white" />
                </div>
                <CardTitle>AI Adoption Report 2024</CardTitle>
                <CardDescription>Industry insights and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <div className="w-full h-40 rounded-lg gradient-accent mb-4 flex items-center justify-center">
                  <Video className="w-16 h-16 text-white" />
                </div>
                <CardTitle>Masterclass Series</CardTitle>
                <CardDescription>5-part video course on AI tools</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Start Learning
                </Button>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <div className="w-full h-40 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <CardTitle>Prompt Engineering Guide</CardTitle>
                <CardDescription>Advanced techniques for better results</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Access Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
