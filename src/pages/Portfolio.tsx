import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  skills: string[];
  impact: string;
  image?: string;
  link?: string;
  github?: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Financial Analysis Dashboard",
      description:
        "Developed a comprehensive financial analysis tool that tracks market trends and provides investment insights for retail investors.",
      category: "Finance",
      skills: ["Financial Analysis", "Data Visualization", "Market Research"],
      impact: "Helped 100+ users track their investments effectively",
      link: "#",
    },
    {
      id: 2,
      title: "Digital Marketing Campaign",
      description:
        "Designed and executed a multi-channel digital marketing campaign that increased brand awareness by 150%.",
      category: "Marketing",
      skills: ["Social Media Marketing", "Content Strategy", "Analytics"],
      impact: "150% increase in brand awareness, 45% boost in engagement",
      link: "#",
    },
    {
      id: 3,
      title: "Business Strategy Analysis",
      description:
        "Conducted in-depth market analysis and created a strategic business plan for a startup seeking Series A funding.",
      category: "Business",
      skills: ["Market Analysis", "Strategic Planning", "Financial Modeling"],
      impact: "Secured $500K in seed funding",
      link: "#",
    },
    {
      id: 4,
      title: "Consumer Behavior Study",
      description:
        "Researched and analyzed consumer behavior patterns to develop targeted marketing strategies for a retail brand.",
      category: "Marketing",
      skills: ["Consumer Research", "Data Analysis", "Marketing Strategy"],
      impact: "Increased sales by 35% through targeted campaigns",
      link: "#",
    },
    {
      id: 5,
      title: "Financial Planning Tool",
      description:
        "Created an interactive financial planning calculator for personal finance management and budgeting.",
      category: "Finance",
      skills: ["Financial Planning", "Web Development", "UX Design"],
      impact: "1000+ downloads in first month",
      link: "#",
    },
    {
      id: 6,
      title: "Brand Strategy Development",
      description:
        "Developed a complete brand strategy and identity system for a new e-commerce startup.",
      category: "Marketing",
      skills: ["Brand Strategy", "Positioning", "Market Analysis"],
      impact: "Established strong brand presence in competitive market",
      link: "#",
    },
  ];

  const categories = ["All", "Finance", "Marketing", "Business"];
  const [selectedCategory, setSelectedCategory] = ["All"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Salman Sana - Finance & Marketing Projects</title>
        <meta
          name="description"
          content="Explore Salman Sana's portfolio of finance, marketing, and business projects. See case studies and real-world applications of expertise in financial analysis and market strategy."
        />
        <meta
          name="keywords"
          content="portfolio, projects, finance projects, marketing campaigns, business analysis, case studies"
        />
        <link rel="canonical" href="https://www.salmansana.me/portfolio" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Explore my finance, marketing, and business projects. Each project demonstrates 
              my analytical skills, strategic thinking, and ability to deliver measurable results.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory([category])}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary/50 mb-2">
                      {project.id}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-4 p-3 bg-background rounded border border-border/50">
                    <p className="text-sm font-semibold text-foreground mb-1">Impact:</p>
                    <p className="text-xs text-muted-foreground">{project.impact}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-card border border-border rounded hover:border-primary transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-foreground text-center">
            Project Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Project Categories</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">500%</div>
              <p className="text-muted-foreground">Average Impact</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Success Rate</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
            Interested in My Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help with your finance, marketing, or business projects.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Project
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
