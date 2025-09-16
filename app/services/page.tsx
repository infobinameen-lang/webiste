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
import {
  GraduationCap,
  Building2,
  Mic,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Award,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Comprehensive Solutions for
              <span className="text-primary"> Educational & Business Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              From teacher training to business consulting, we provide end-to-end solutions that drive measurable
              results and sustainable growth across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Six pillars of excellence that define our comprehensive approach to consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Consulting */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Educational Consulting</CardTitle>
                <CardDescription className="text-base">
                  Helping schools, NGOs, and education agencies improve systems and outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Teacher Recruitment</div>
                      <div className="text-sm text-muted-foreground">
                        Sourcing, screening, and onboarding top teaching talent.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Certificate Translation</div>
                      <div className="text-sm text-muted-foreground">
                        Professional translation and verification for international use.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Technology Integration</div>
                      <div className="text-sm text-muted-foreground">
                        Helping schools adopt and implement smart boards, LMS, and other EdTech solutions.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        School needs assessments, curriculum evaluation, and data-driven recommendations.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">International Admission Processing</div>
                      <div className="text-sm text-muted-foreground">
                        Guiding students through applications, documentation, and visa preparation.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add AOS to Other Cards */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Research Consulting Services</CardTitle>
                <CardDescription className="text-base">
                  Supporting impactful research from proposal development to publication.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Research Proposal Development Support</div>
                      <div className="text-sm text-muted-foreground">
                        Assistance in creating compelling research proposals.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Data Collection & Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        Expert guidance on qualitative and quantitative methods.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Let's discuss how our comprehensive consulting services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}