"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, GraduationCapIcon, LightbulbIcon, TrendingUpIcon, UserIcon } from "lucide-react";

// Custom SVG components
const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

// Other icons omitted for brevity...

export default function BlogPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Insights & Resources</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Educational Excellence
              <span className="text-primary"> Insights & Updates</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Stay informed with the latest trends, research findings, and best practices in education and professional
              development from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Featured Article</Badge>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>December 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4" />
                        <span>Dr. Ameen Bin-Ameen</span>
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      The Future of Teacher Training in Nigeria: Embracing Digital Transformation
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      As Nigeria's educational landscape evolves, the integration of digital technologies in teacher
                      training has become not just beneficial, but essential. This comprehensive analysis explores how
                      our Ethication programme is leading this transformation...
                    </p>
                    <Button asChild>
                      <Link href="/blog/future-teacher-training-nigeria">
                        Read Full Article
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <img
                      src="/educational-presentation-session.jpg"
                      alt="Digital teacher training and educational technology"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find articles and insights tailored to your interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-aos="fade-up">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCapIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Teacher Development</h3>
                <p className="text-sm text-muted-foreground mb-4">Professional growth and training insights</p>
                <Badge variant="secondary">12 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Educational Research</h3>
                <p className="text-sm text-muted-foreground mb-4">Latest research findings and analysis</p>
                <Badge variant="secondary">8 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Industry Trends</h3>
                <p className="text-sm text-muted-foreground mb-4">Education sector trends and predictions</p>
                <Badge variant="secondary">6 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <p className="text-sm text-muted-foreground mb-4">Proven strategies and methodologies</p>
                <Badge variant="secondary">10 Articles</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Latest insights from our education experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Articles omitted for brevity */}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}