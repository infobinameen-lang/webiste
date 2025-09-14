import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { GraduationCap, Building2, Users, TrendingUp, Award, ArrowRight, BookOpen, Target } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
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
      <section className="py-20">
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
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real transformations achieved through our consulting expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="hover:shadow-lg transition-shadow">
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
            <Card className="hover:shadow-lg transition-shadow">
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

            {/* Case Study 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <Badge variant="secondary">Research Project</Badge>
                </div>
                <CardTitle className="text-xl">National Teacher Effectiveness Study</CardTitle>
                <CardDescription>
                  Comprehensive research project informing national education policy recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Project Scope</h4>
                    <p className="text-sm text-muted-foreground">
                      18-month nationwide study examining teacher effectiveness factors across 200 schools in 6 states.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Methodology</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mixed-methods research approach</li>
                      <li>• Statistical analysis of performance data</li>
                      <li>• Qualitative interviews and observations</li>
                      <li>• Policy analysis and recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-accent/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-accent">200</div>
                        <div className="text-xs text-muted-foreground">Schools Studied</div>
                      </div>
                      <div className="bg-primary/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-primary">15</div>
                        <div className="text-xs text-muted-foreground">Policy Changes</div>
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

            {/* Case Study 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Training Programme</Badge>
                </div>
                <CardTitle className="text-xl">Multi-State Ethication Implementation</CardTitle>
                <CardDescription>
                  Large-scale teacher training programme across 5 states reaching 1,500 educators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Programme Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Coordinated implementation of Ethication programme across Lagos, Ogun, Oyo, Osun, and Ondo states.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implementation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 30 training cohorts over 12 months</li>
                      <li>• Local facilitator training and certification</li>
                      <li>• Customized materials for regional contexts</li>
                      <li>• Ongoing support and mentorship</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Outcomes</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-primary">1,500</div>
                        <div className="text-xs text-muted-foreground">Teachers Certified</div>
                      </div>
                      <div className="bg-secondary/5 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-secondary">98%</div>
                        <div className="text-xs text-muted-foreground">Completion Rate</div>
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

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Testimonials from satisfied partners and clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "The Ethication programme transformed our teaching approach. Our students are more engaged, and our
                    teachers feel more confident and effective."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Dr. Adebayo Ogundimu</div>
                  <div className="text-sm text-muted-foreground">Principal, Crown Heights Secondary School</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "BIN-AMEEN's business consulting helped us streamline operations and reduce costs by 45%. Their
                    expertise is unmatched."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Prof. Kemi Adeleke</div>
                  <div className="text-sm text-muted-foreground">Vice-Chancellor, Heritage University</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "The research quality and insights provided by BIN-AMEEN informed our state education policy. Their
                    work has lasting impact."
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Hon. Folake Osibodu</div>
                  <div className="text-sm text-muted-foreground">Commissioner for Education, Lagos State</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sectors We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our expertise spans across various educational and business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Primary & Secondary Schools</h3>
                <p className="text-sm text-muted-foreground">
                  Public and private schools seeking educational excellence
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Universities & Colleges</h3>
                <p className="text-sm text-muted-foreground">Higher education institutions and research centers</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Government Agencies</h3>
                <p className="text-sm text-muted-foreground">Education ministries and policy-making bodies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Corporate Training</h3>
                <p className="text-sm text-muted-foreground">Businesses seeking professional development solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
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
  )
}
