import { Card } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp } from "lucide-react";

const courses = [
  {
    icon: BarChart3,
    title: "AI for Data Analytics & Decision Making",
    description: "Learn to leverage AI tools for analyzing data, generating insights, and making informed business decisions. Master practical techniques for working with data in your everyday role.",
    category: "4-Week Course"
  },
  {
    icon: Users,
    title: "AI for Customer Experience & Product Innovation",
    description: "Discover how to use AI to enhance customer interactions, streamline product development, and drive innovation. Build skills that help you deliver better experiences and outcomes.",
    category: "4-Week Course"
  },
  {
    icon: TrendingUp,
    title: "AI for Sales, Marketing & Business Development",
    description: "Master AI workflows for sales enablement, marketing campaigns, and business growth. Learn to craft effective prompts and integrate AI into your daily business activities.",
    category: "4-Week Course"
  }
];

const TipsGrid = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gain real-world, practical AI skills that help you stand out, get hired, or move up in your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={index}
                className="group p-8 glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
              >
                {/* Category Badge */}
                <div className="text-xs font-medium text-primary mb-4 uppercase tracking-wider">
                  {course.category}
                </div>

                {/* Icon */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
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
