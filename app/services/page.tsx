import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
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
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Four pillars of excellence that define our comprehensive approach to consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Consulting */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Educational Consulting</CardTitle>
                <CardDescription className="text-base">
                  Transforming educational institutions through evidence-based strategies and professional development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Teacher Training & Development</div>
                      <div className="text-sm text-muted-foreground">
                        TRCN certified programmes including our flagship Ethication
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Curriculum Development</div>
                      <div className="text-sm text-muted-foreground">
                        Custom curriculum design aligned with national standards
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Leadership</div>
                      <div className="text-sm text-muted-foreground">
                        Leadership development for school administrators
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Quality Assurance</div>
                      <div className="text-sm text-muted-foreground">Educational audits and improvement strategies</div>
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

            {/* Research Services */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Teacher Training</CardTitle>
                <CardDescription className="text-base">
                Helping schools, NGOs, and education agencies improve systems and outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Research</div>
                      <div className="text-sm text-muted-foreground">
                        Comprehensive studies on teaching methodologies and outcomes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Policy Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        Research-backed policy recommendations for institutions
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Data Analytics</div>
                      <div className="text-sm text-muted-foreground">
                        Statistical analysis and performance measurement
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Publication Support</div>
                      <div className="text-sm text-muted-foreground">
                        Research writing and academic publication assistance
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

            {/* Business Consulting */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Business Consulting</CardTitle>
                <CardDescription className="text-base">
                  Strategic business solutions that drive growth and operational excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Strategic Planning</div>
                      <div className="text-sm text-muted-foreground">
                        Long-term business strategy development and implementation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Process Optimization</div>
                      <div className="text-sm text-muted-foreground">
                        Operational efficiency and workflow improvement
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Change Management</div>
                      <div className="text-sm text-muted-foreground">
                        Organizational transformation and culture development
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Performance Management</div>
                      <div className="text-sm text-muted-foreground">
                        KPI development and performance tracking systems
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

            {/* Public Speaking & Printing */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mic className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Public Speaking & Printing</CardTitle>
                <CardDescription className="text-base">
                  Professional communication services and high-quality printing solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Keynote Speaking</div>
                      <div className="text-sm text-muted-foreground">
                        Expert speakers for conferences and educational events
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Workshop Facilitation</div>
                      <div className="text-sm text-muted-foreground">Interactive workshops and training sessions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Materials</div>
                      <div className="text-sm text-muted-foreground">
                        Custom textbooks, manuals, and learning resources
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Corporate Printing</div>
                      <div className="text-sm text-muted-foreground">
                        Professional printing services for all business needs
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

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A systematic approach that ensures successful outcomes for every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Assessment</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive analysis of your current situation, challenges, and objectives
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Strategy</h3>
              <p className="text-muted-foreground text-sm">
                Development of customized solutions based on best practices and research
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Implementation</h3>
              <p className="text-muted-foreground text-sm">
                Collaborative execution with your team, ensuring smooth transition and adoption
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Evaluation</h3>
              <p className="text-muted-foreground text-sm">
                Continuous monitoring and optimization to ensure sustained success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The advantages that set our consulting services apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Proven Expertise</h3>
                <p className="text-muted-foreground">
                  Over a decade of experience with TRCN certification and 5000+ successful training completions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Measurable Results</h3>
                <p className="text-muted-foreground">
                  Data-driven approach with clear KPIs and regular progress reporting
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with your team to ensure solutions are practical and sustainable
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Customized Solutions</h3>
                <p className="text-muted-foreground">
                  Every solution is tailored to your specific context, challenges, and objectives
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Continuous support and follow-up to ensure long-term success and sustainability
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control processes ensure excellence in every deliverable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
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
  )
}
