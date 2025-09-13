import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import {
  GraduationCap,
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Target,
  TrendingUp,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Professional Development</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Transform Your Teaching with
              <span className="text-primary"> World-Class Programmes</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              TRCN certified programmes designed to elevate educational standards and empower teachers with modern
              pedagogical skills and methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Ethication Programme - Featured */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Flagship Programme</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ethication - Teacher Training Programme</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive flagship programme that has revolutionized teaching practices across Nigeria.
                Ethication combines ethical teaching principles with practical classroom methodologies to create
                exceptional educators.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">5000+</div>
                    <div className="text-sm text-muted-foreground">Teachers Trained</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">TRCN</div>
                    <div className="text-sm text-muted-foreground">Certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">6 Weeks</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Certificate</div>
                    <div className="text-sm text-muted-foreground">Included</div>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/contact">
                  Enroll in Ethication
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div>
              <img
                src="/professional-training-workshop.jpg"
                alt="Ethication teacher training programme workshop session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Programme Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Programme Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Develop ethical teaching practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Master modern pedagogical methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Enhance classroom management skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Improve student engagement techniques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Curriculum Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Educational Psychology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Curriculum Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Assessment & Evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Technology Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Expected Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Improved teaching effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Enhanced student performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Professional certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Career advancement opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Programmes */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Additional Professional Development Programmes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Specialized training programmes designed for specific educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Leadership in Education</CardTitle>
                <CardDescription>For school administrators and educational leaders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>4 weeks duration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Max 25 participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>Certificate included</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Research Methodology</CardTitle>
                <CardDescription>Advanced research skills for educators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>3 weeks duration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Max 20 participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>Certificate included</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Special Needs Education</CardTitle>
                <CardDescription>Inclusive education strategies and techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>5 weeks duration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Max 15 participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>Certificate included</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upcoming Programme Schedule</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join our next cohort of professional educators
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Next Ethication Cohort</h3>
                    <p className="text-muted-foreground mb-2">Starting March 2024</p>
                    <Badge variant="secondary">Early Bird Discount Available</Badge>
                  </div>

                  <div className="text-center">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Training Locations</h3>
                    <p className="text-muted-foreground mb-2">Lagos, Abuja, Port Harcourt</p>
                    <Badge variant="outline">Virtual Options Available</Badge>
                  </div>

                  <div className="text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Limited Spaces</h3>
                    <p className="text-muted-foreground mb-2">30 participants per cohort</p>
                    <Badge variant="destructive">Register Early</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Teaching Career?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Join thousands of educators who have elevated their careers through our professional development programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
