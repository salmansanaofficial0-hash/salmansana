import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  slug: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Financial Markets: A Beginner's Guide",
      excerpt:
        "Learn the fundamentals of financial markets, including stocks, bonds, and commodities. Perfect for beginners looking to start their investment journey.",
      author: "Salman Sana",
      date: "May 23, 2026",
      category: "Finance",
      readTime: "8 min read",
      slug: "understanding-financial-markets",
      content: `
        Financial markets are the backbone of modern economies. They provide a platform for buying and selling financial assets, 
        enabling wealth creation and economic growth. In this comprehensive guide, we'll explore the key components of financial markets 
        and how they work.
        
        ## Types of Financial Markets
        
        1. **Stock Market** - Where shares of public companies are traded
        2. **Bond Market** - Where debt securities are traded
        3. **Commodity Market** - Where raw materials are traded
        4. **Foreign Exchange Market** - Where currencies are traded
        5. **Derivatives Market** - Where financial derivatives are traded
        
        ## Key Participants
        
        - Individual Investors
        - Institutional Investors
        - Brokers
        - Market Makers
        - Regulatory Bodies
        
        Understanding these markets helps you make informed investment decisions.
      `,
    },
    {
      id: 2,
      title: "Digital Marketing Strategies That Actually Work",
      excerpt:
        "Discover proven digital marketing strategies that drive real results. Learn about SEO, content marketing, social media, and paid advertising.",
      author: "Salman Sana",
      date: "May 20, 2026",
      category: "Marketing",
      readTime: "10 min read",
      slug: "digital-marketing-strategies",
      content: `
        Digital marketing has revolutionized how businesses connect with their audience. With the right strategies, 
        you can reach millions of potential customers and build a thriving business.
        
        ## Essential Digital Marketing Channels
        
        1. **Search Engine Optimization (SEO)**
           - On-page optimization
           - Technical SEO
           - Link building
           - Keyword research
        
        2. **Content Marketing**
           - Blog posts
           - Videos
           - Infographics
           - Podcasts
        
        3. **Social Media Marketing**
           - Facebook & Instagram
           - LinkedIn
           - Twitter/X
           - TikTok
        
        4. **Email Marketing**
           - Newsletter campaigns
           - Personalized messaging
           - Automation
        
        5. **Paid Advertising**
           - Google Ads
           - Facebook Ads
           - LinkedIn Ads
        
        The key is to create a cohesive strategy that integrates these channels for maximum impact.
      `,
    },
    {
      id: 3,
      title: "Investment Basics: How to Build a Strong Portfolio",
      excerpt:
        "Learn how to build a diversified investment portfolio that aligns with your financial goals and risk tolerance.",
      author: "Salman Sana",
      date: "May 18, 2026",
      category: "Finance",
      readTime: "9 min read",
      slug: "building-investment-portfolio",
      content: `
        Building an investment portfolio is one of the most important steps toward financial freedom. 
        A well-constructed portfolio can help you achieve your long-term financial goals while managing risk.
        
        ## Portfolio Construction Principles
        
        ### Diversification
        Spread your investments across different asset classes to reduce risk. Never put all your eggs in one basket.
        
        ### Asset Allocation
        Determine the right mix of stocks, bonds, and other assets based on your age, risk tolerance, and goals.
        
        ### Risk Management
        Understand the risks associated with each investment and how they might affect your portfolio.
        
        ### Regular Rebalancing
        Periodically review and adjust your portfolio to maintain your desired asset allocation.
        
        ## Common Portfolio Mistakes to Avoid
        
        1. Over-concentrating in one stock or sector
        2. Ignoring fees and expense ratios
        3. Market timing instead of time in the market
        4. Failing to rebalance
        5. Investing money you'll need in the short term
      `,
    },
    {
      id: 4,
      title: "The Future of E-commerce: Trends to Watch",
      excerpt:
        "Explore the latest trends shaping the e-commerce industry, from AI personalization to sustainable practices.",
      author: "Salman Sana",
      date: "May 15, 2026",
      category: "Marketing",
      readTime: "7 min read",
      slug: "ecommerce-trends",
    },
    {
      id: 5,
      title: "Risk Management in Business: Essential Strategies",
      excerpt:
        "Learn how to identify, assess, and mitigate risks in your business operations.",
      author: "Salman Sana",
      date: "May 12, 2026",
      category: "Business",
      readTime: "8 min read",
      slug: "risk-management-business",
    },
    {
      id: 6,
      title: "Personal Finance: Creating Your Financial Plan",
      excerpt:
        "Step-by-step guide to creating a comprehensive personal financial plan for long-term success.",
      author: "Salman Sana",
      date: "May 10, 2026",
      category: "Finance",
      readTime: "11 min read",
      slug: "personal-finance-planning",
    },
  ];

  const categories = ["All", "Finance", "Marketing", "Business"];

  return (
    <>
      <Helmet>
        <title>Blog | Salman Sana - Finance & Marketing Insights</title>
        <meta
          name="description"
          content="Read insightful articles about finance, marketing, and business strategy from Salman Sana. Expert analysis and actionable tips for professionals."
        />
        <meta
          name="keywords"
          content="finance blog, marketing blog, business insights, financial analysis, marketing tips, investment advice"
        />
        <link rel="canonical" href="https://www.salmansana.me/blog" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Insights and analysis on finance, marketing, and business strategy. 
              Stay updated with the latest trends and learn actionable strategies for success.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <span className="inline-block w-fit px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={16} />
                    {blogPosts[0].author}
                  </div>
                </div>
                <a
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Read Article
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary/30 to-accent/30 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-primary/50 mb-2">
                    Featured
                  </div>
                  <p className="text-muted-foreground">{blogPosts[0].category}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-foreground">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary/50 mb-2">
                      {post.id}
                    </div>
                    <p className="text-sm text-muted-foreground">{post.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date.split(",")[1]}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-4 block w-full text-center py-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-lg text-center text-primary-foreground">
            <h2 className="text-3xl font-display font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to my newsletter for weekly insights on finance, marketing, and business strategy.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white"
              />
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
            Have a Question?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Didn't find what you're looking for? Reach out, and I'll help you with your finance or marketing questions.
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

export default Blog;
