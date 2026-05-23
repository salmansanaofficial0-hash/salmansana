import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Salman Sana | BBA Student, Finance & Marketing Specialist</title>
        <meta
          name="description"
          content="Learn about Salman Sana, a BBA student specializing in Finance and Marketing at University of Turbat. Discover my skills, experience, and passion for financial analysis and market strategy."
        />
        <meta name="keywords" content="Salman Sana, BBA Student, Finance, Marketing, University of Turbat, Business Analysis" />
        <link rel="canonical" href="https://www.salmansana.me/about" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Salman Sana, a dedicated BBA student at the University of Turbat, Balochistan, 
              specializing in Finance and Marketing. My passion lies in understanding market dynamics, 
              financial planning, and developing business strategies that drive growth.
            </p>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Professional Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing a Bachelor of Business Administration (BBA) with specialization in 
                Finance and Marketing at the University of Turbat. My academic journey has equipped me 
                with strong analytical skills and a comprehensive understanding of modern business practices.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Financial Analysis & Planning</li>
                <li>✓ Market Research & Strategy</li>
                <li>✓ Business Development</li>
                <li>✓ Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Core Competencies</h3>
              <div className="space-y-3">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Financial Analysis</p>
                  <p className="text-sm text-muted-foreground">Proficient in analyzing financial statements and market trends</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Marketing Strategy</p>
                  <p className="text-sm text-muted-foreground">Developing data-driven marketing campaigns and strategies</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground">Business Planning</p>
                  <p className="text-sm text-muted-foreground">Creating comprehensive business plans and financial models</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-4 text-primary">Finance</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Financial Planning & Analysis</li>
                <li>• Investment Analysis</li>
                <li>• Budget Management</li>
                <li>• Financial Modeling</li>
                <li>• Risk Assessment</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-4 text-primary">Marketing</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Market Research</li>
                <li>• Brand Strategy</li>
                <li>• Digital Marketing</li>
                <li>• Consumer Behavior</li>
                <li>• Campaign Planning</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-4 text-primary">Business</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Business Analysis</li>
                <li>• Strategic Planning</li>
                <li>• Project Management</li>
                <li>• Data Analysis</li>
                <li>• Business Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Goals */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Vision & Goals</h2>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              My vision is to become a strategic business leader who bridges the gap between finance and marketing, 
              creating value for organizations through insightful analysis and innovative strategies. I'm committed to:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-foreground">Building expertise in financial and market analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-foreground">Developing innovative business solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-foreground">Contributing to business growth and profitability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-foreground">Continuous learning and professional development</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
            Ready to Connect?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm open to internship opportunities, collaborations, and conversations about finance, 
            marketing, and business strategy. Let's connect!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
