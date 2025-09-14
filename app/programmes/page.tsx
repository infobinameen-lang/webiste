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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ethication – Teacher Training Programme</h2>
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
        </div>
      </section>

      {/* Other Programmes */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Professional Development Programmes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our specialized training programmes designed to meet diverse educational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ethication Programme */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/logos/ethication-logo.png"
                  alt="Ethication Logo"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <CardTitle>Ethication – Teacher Training Programme</CardTitle>
                <CardDescription>Revolutionizing teaching practices with ethical principles.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Think Twice Programme */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/2.png"
                  alt="Think Twice Logo"
                  className="w-16 h-16 mx-auto mb-4"
                />
  <CardTitle>Think Twice – College of Entrepreneurship</CardTitle>
  <CardDescription>
    Think Twice – College of Entrepreneurship

    Think Twice – College of Entrepreneurship is designed for both secondary school leavers and university graduates. For secondary school leavers, the programme stresses that while a college degree is valuable, it is not the only path to success.
  </CardDescription>
</CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Stand & Speak Programme */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/1.png"
                  alt="Stand & Speak Logo"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <CardTitle>Stand & Speak – Own the Stage</CardTitle>
                <CardDescription>Stand & Speak – Own the Stage trains young professionals to overcome the fear of public speaking and build confidence on stage. 
                  The programme equips participants with proven strategies to manage stage anxiety, develop fluency, and deliver engaging presentations. 
Hold that Mic & Say your Piece!.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Research Lab Programme */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/logos/3.png"
                  alt="Research Lab Logo"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <CardTitle>Research Lab – From Proposal to Publication</CardTitle>
                <CardDescription>Research Lab is designed to instill strong research skills in young researchers, university graduates, and anyone interested in academic inquiry. The programme covers the full research journey, from proposal writing to journal publication. 
                Participants learn research design, data handling, journal identification and conformity, and practical steps for publishing in high-impact outlets.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
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