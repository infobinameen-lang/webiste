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
            {/* Training Services */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/50 transition-colors">
                  <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-2xl">Training & Professional Development</CardTitle>
                <CardDescription className="text-base">
                  Empowering individuals and organizations through comprehensive training programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Teacher Professional Development</div>
                      <div className="text-sm text-muted-foreground">
                        Upskilling and continuous learning programs for educators.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Business & Entrepreneurship Training</div>
                      <div className="text-sm text-muted-foreground">
                        Building business acumen and entrepreneurial skills.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Leadership & Management Training</div>
                      <div className="text-sm text-muted-foreground">
                        Developing effective leaders and managers across all levels.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Digital & ICT Skills Training</div>
                      <div className="text-sm text-muted-foreground">
                        Equipping teams with essential digital competencies.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Mass Education & Community Sensitization Programs</div>
                      <div className="text-sm text-muted-foreground">
                        Raising awareness and engagement across communities.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">School-Based Workshops & Seminars</div>
                      <div className="text-sm text-muted-foreground">
                        Targeted learning sessions tailored to school needs.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* EduTech Services */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <CardHeader>
                <div className="bg-cyan-100 dark:bg-cyan-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors">
                  <TrendingUp className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="text-2xl">EduTech Solutions</CardTitle>
                <CardDescription className="text-base">
                  Technology integration for modern educational excellence and institutional growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Technology Integration for Teaching and Learning</div>
                      <div className="text-sm text-muted-foreground">
                        Implementing digital tools and platforms to enhance educational delivery.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Digital Classroom Setup & Support</div>
                      <div className="text-sm text-muted-foreground">
                        Designing and setting up technology-enabled learning environments.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Learning Management System (LMS) Advisory</div>
                      <div className="text-sm text-muted-foreground">
                        Expert guidance on selecting and implementing effective LMS solutions.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Technology Training</div>
                      <div className="text-sm text-muted-foreground">
                        Upskilling teachers and schools in effective EdTech utilization.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">EduTech Consulting for Institutions</div>
                      <div className="text-sm text-muted-foreground">
                        Strategic consulting to optimize technology adoption and implementation.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ICT Services */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">ICT & Digital Solutions</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive information and communication technology services for organizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Computer Training Programs</div>
                      <div className="text-sm text-muted-foreground">
                        Comprehensive computer skills and hardware training.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Office Productivity Software Training</div>
                      <div className="text-sm text-muted-foreground">
                        Mastering Word, Excel, PowerPoint, and other essential tools.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">IT Support for Schools and SMEs</div>
                      <div className="text-sm text-muted-foreground">
                        Reliable technical support and system maintenance.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Basic Networking & Systems Setup</div>
                      <div className="text-sm text-muted-foreground">
                        Setting up and configuring network infrastructure.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Digital Literacy Programs</div>
                      <div className="text-sm text-muted-foreground">
                        Building foundational digital skills for all ages.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Services */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <CardHeader>
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                  <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-2xl">Research Consulting</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive support for academic and educational research excellence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Academic and Educational Research Consulting</div>
                      <div className="text-sm text-muted-foreground">
                        Expert guidance on research methodology and educational best practices.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Proposal Writing & Research Design Support</div>
                      <div className="text-sm text-muted-foreground">
                        Crafting compelling research proposals and solid research designs.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Data Collection & Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        Expert guidance on qualitative and quantitative data methods.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Thesis, Dissertation & Project Guidance</div>
                      <div className="text-sm text-muted-foreground">
                        Supporting students and scholars through major research projects.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Monitoring & Evaluation (M&E) Support</div>
                      <div className="text-sm text-muted-foreground">
                        Designing and implementing effective monitoring and evaluation frameworks.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Public Speaking Services */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="600">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                  <Mic className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">Public Speaking & Communication</CardTitle>
                <CardDescription className="text-base">
                  Crafting compelling speakers and facilitating impactful communications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Master of Ceremonies (Academic & Corporate Events)</div>
                      <div className="text-sm text-muted-foreground">
                        Professional event hosting and facilitation services.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Public Speaking & Presentation Skills Coaching</div>
                      <div className="text-sm text-muted-foreground">
                        Coaching individuals to deliver impactful presentations.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Event Facilitation & Moderation</div>
                      <div className="text-sm text-muted-foreground">
                        Managing discussions and workshops with expertise and engagement.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Communication & Confidence-Building Training</div>
                      <div className="text-sm text-muted-foreground">
                        Developing effective communicators with enhanced confidence.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Printing & Publishing Services */}
            <Card className="group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="700">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl">Printing & Publishing</CardTitle>
                <CardDescription className="text-base">
                  Professional printing and publishing solutions for educational and corporate needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Academic & Corporate Printing & Binding</div>
                      <div className="text-sm text-muted-foreground">
                        High-quality printing services with professional binding options.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Certificate & Document Printing</div>
                      <div className="text-sm text-muted-foreground">
                        Printing official certificates and important documents.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Book, Journal & Educational Material Publishing</div>
                      <div className="text-sm text-muted-foreground">
                        End-to-end publishing services for educational content.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Design & Layout of Educational and Corporate Documents</div>
                      <div className="text-sm text-muted-foreground">
                        Professional design services for visually compelling materials.
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