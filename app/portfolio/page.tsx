// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { GraduationCap, Building2, Users, TrendingUp, Award, ArrowRight, BookOpen, Target } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Portfolio</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Proven Success Stories &<span className="text-primary"> Measurable Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover how we've transformed educational institutions and businesses across Nigeria through our
              comprehensive consulting services and professional development programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Teachers Trained</div>
            </div>
            <div>
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Institutions Partnered</div>
            </div>
            <div>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real transformations achieved through our consulting expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Education Consulting</Badge>
                </div>
                <CardTitle className="text-xl">Lagos State Secondary School Transformation</CardTitle>
                <CardDescription>
                  Complete educational overhaul resulting in 40% improvement in student performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      A 2,000-student secondary school struggling with low academic performance, high teacher turnover,
                      and outdated teaching methodologies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comprehensive teacher training through Ethication programme</li>
                      <li>• Curriculum redesign aligned with modern standards</li>
                      <li>• Leadership development for school administrators</li>
                      <li>• Implementation of performance tracking systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-primary">40%</div>
                        <div className="text-xs text-muted-foreground">Performance Increase</div>
                      </div>
                      <div className="bg-secondary/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-secondary">85%</div>
                        <div className="text-xs text-muted-foreground">Teacher Retention</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge variant="outline">Business Consulting</Badge>
                </div>
                <CardTitle className="text-xl">Private University Strategic Restructuring</CardTitle>
                <CardDescription>
                  Operational efficiency improvement leading to 60% cost reduction and enhanced service delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      A private university facing financial difficulties, operational inefficiencies, and declining
                      enrollment rates.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Strategic planning and organizational restructuring</li>
                      <li>• Process optimization and workflow automation</li>
                      <li>• Faculty development and performance management</li>
                      <li>• Marketing strategy and enrollment improvement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-secondary">60%</div>
                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                      </div>
                      <div className="bg-accent/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-accent">35%</div>
                        <div className="text-xs text-muted-foreground">Enrollment Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Let's discuss how we can help your organization achieve similar transformational results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}