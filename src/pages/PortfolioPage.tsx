import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Award, 
  Star,
  ExternalLink,
  Smartphone,
  Globe,
  ShoppingCart,
  Heart
} from "lucide-react";

const PortfolioPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Welhaven Homecare Application",
      client: "Welhaven Homecare",
      category: "Mobile App Development",
      description: "Comprehensive mobile application for homecare services, available on both Android and iOS platforms. Features include real-time care scheduling, patient management, caregiver tracking, and secure communication channels.",
      challenge: "Welhaven needed a robust mobile solution to streamline their homecare operations, improve communication between caregivers and patients, and provide real-time updates to family members.",
      solution: "We developed a full-featured mobile app with cross-platform compatibility, integrating GPS tracking, push notifications, secure messaging, and an intuitive scheduling system.",
      results: [
        { metric: "85%", label: "Efficiency Increase" },
        { metric: "40%", label: "Cost Reduction" },
        { metric: "4.8/5", label: "User Rating" },
        { metric: "10k+", label: "Active Users" }
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase", "Google Maps API"],
      testimonial: {
        quote: "Gotechpluz transformed our operations completely. The app has become indispensable to our daily workflow, and our clients love the transparency it provides.",
        author: "Operations Director",
        company: "Welhaven Homecare"
      },
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Talent Homecare Digital Platform",
      client: "Talent Homecare",
      category: "Web Development & Branding",
      description: "A complete digital transformation including website development, brand identity redesign, and digital marketing strategy to position Talent Homecare as a premium care provider in competitive markets.",
      challenge: "Talent Homecare needed to modernize their online presence, establish trust with potential clients, and differentiate themselves from competitors in the healthcare space.",
      solution: "We created a comprehensive digital ecosystem including a responsive website with booking functionality, SEO-optimized content, brand guidelines, and targeted marketing campaigns.",
      results: [
        { metric: "250%", label: "Traffic Increase" },
        { metric: "180%", label: "Lead Generation" },
        { metric: "95%", label: "Client Satisfaction" },
        { metric: "60%", label: "Conversion Rate Boost" }
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "SEO Optimization", "Google Analytics"],
      testimonial: {
        quote: "Working with Gotechpluz was a game-changer. They didn't just build us a website—they created a complete digital strategy that has driven incredible growth.",
        author: "Marketing Manager",
        company: "Talent Homecare"
      },
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      title: "Prudential Insurance Website Redesign",
      client: "Prudential Insurance",
      category: "Enterprise Web Solution",
      description: "Enterprise-level website redesign for a major insurance provider, focusing on user experience, accessibility, and conversion optimization. Integrated quote calculator and policy management portal.",
      challenge: "The existing website was outdated, difficult to navigate, and failing to convert visitors into leads. The client needed a modern, secure platform that could handle high traffic volumes.",
      solution: "We delivered a complete website overhaul with modern UI/UX design, integrated CRM system, automated quote generation, secure client portal, and comprehensive analytics dashboard.",
      results: [
        { metric: "320%", label: "Online Quotes" },
        { metric: "150%", label: "User Engagement" },
        { metric: "45%", label: "Bounce Rate Drop" },
        { metric: "200%", label: "Policy Sign-ups" }
      ],
      technologies: ["React", "TypeScript", "AWS", "REST API", "Stripe Integration"],
      testimonial: {
        quote: "The new website has exceeded all our expectations. Gotechpluz delivered a professional, secure, and high-performing platform that our clients love.",
        author: "Digital Transformation Lead",
        company: "Prudential Insurance"
      },
      icon: Globe,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const additionalProjects = [
    {
      title: "E-commerce Platform Launch",
      category: "E-commerce",
      impact: "500% revenue increase in 6 months",
      icon: ShoppingCart
    },
    {
      title: "Corporate Branding Suite",
      category: "Graphic Design",
      impact: "Brand recognition up 85%",
      icon: Award
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      impact: "300k+ engagement reach",
      icon: Users
    },
    {
      title: "SEO Optimization Project",
      category: "SEO & Marketing",
      impact: "First page ranking for 50+ keywords",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-primary font-semibold text-sm">Success Stories • Real Results</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Portfolio & <span className="bg-gradient-primary bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve measurable success through innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {caseStudies.map((study, index) => {
        const Icon = study.icon;
        return (
          <section 
            key={study.id} 
            className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Card className="overflow-hidden border-border hover:border-primary/30 transition-all duration-300">
                  {/* Project Header */}
                  <div className={`bg-gradient-to-r ${study.color} p-8 md:p-12 text-white`}>
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                            {study.category}
                          </Badge>
                          <h2 className="text-3xl md:text-4xl font-bold">{study.title}</h2>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg opacity-90 max-w-3xl">
                      {study.description}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 md:p-12">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold">?</span>
                          </div>
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold">✓</span>
                          </div>
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold mb-6 text-center">Measurable Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {study.results.map((result, idx) => (
                          <div 
                            key={idx}
                            className="text-center p-6 bg-muted/50 rounded-2xl hover:bg-muted transition-colors"
                          >
                            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-2`}>
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-12">
                      <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="px-4 py-2">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-gradient-hero border-primary/10 p-8">
                      <div className="flex gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-lg mb-6 italic">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${study.color} flex items-center justify-center text-white font-bold`}>
                          {study.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{study.testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{study.testimonial.company}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                More <span className="bg-gradient-accent bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A selection of additional projects where we've delivered exceptional results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {additionalProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={project.title}
                    className="p-6 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.category}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      {project.impact}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed their businesses with our innovative digital solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
