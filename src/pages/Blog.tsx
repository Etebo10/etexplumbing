import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import blogEmergency from "@/assets/blog-emergency.jpg";
import blogFrozenPipes from "@/assets/blog-frozen-pipes.jpg";
import blogWaterHeater from "@/assets/blog-water-heater.jpg";
import blogDiy from "@/assets/blog-diy.jpg";
import blogWaterPressure from "@/assets/blog-water-pressure.jpg";
import blogDrain from "@/assets/blog-drain.jpg";

const Blog = () => {
  const posts = [
    {
      title: "5 Signs You Need to Call a Plumber Immediately",
      excerpt:
        "Not sure if your plumbing issue can wait? Here are five warning signs that mean you should call a professional right away.",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "Emergency Tips",
      image: blogEmergency,
    },
    {
      title: "How to Prevent Frozen Pipes This Winter",
      excerpt:
        "Frozen pipes can cause serious damage to your home. Learn how to protect your plumbing when temperatures drop.",
      date: "January 10, 2024",
      readTime: "4 min read",
      category: "Maintenance",
      image: blogFrozenPipes,
    },
    {
      title: "Tankless vs. Traditional Water Heaters: Which Is Right for You?",
      excerpt:
        "Considering a new water heater? We break down the pros and cons of tankless and traditional options.",
      date: "January 5, 2024",
      readTime: "6 min read",
      category: "Water Heaters",
      image: blogWaterHeater,
    },
    {
      title: "DIY Plumbing Fixes vs. When to Call a Pro",
      excerpt:
        "Some plumbing issues you can handle yourself. Others require professional expertise. Here's how to know the difference.",
      date: "December 28, 2023",
      readTime: "5 min read",
      category: "Tips & Advice",
      image: blogDiy,
    },
    {
      title: "Understanding Your Home's Water Pressure",
      excerpt:
        "Low water pressure got you down? Learn what causes pressure problems and how to fix them.",
      date: "December 20, 2023",
      readTime: "4 min read",
      category: "Maintenance",
      image: blogWaterPressure,
    },
    {
      title: "The Ultimate Guide to Drain Maintenance",
      excerpt:
        "Keep your drains flowing freely with these simple maintenance tips from our expert plumbers.",
      date: "December 15, 2023",
      readTime: "7 min read",
      category: "Drain Care",
      image: blogDrain,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-24">
          <div className="container-custom px-4 text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Plumbing Tips & Insights
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Expert advice, maintenance tips, and industry insights from our 
              team of licensed plumbers.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom text-center">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Get Plumbing Tips Delivered
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for seasonal maintenance reminders and 
              exclusive tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              />
              <button className="btn-cta">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Blog;