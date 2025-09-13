import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import {
  Users,
  Target,
  Award,
  BookOpen,
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight,
  Eye,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About BIN-AMEEN CONSULTING</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Empowering Excellence Through
              <span className="text-primary"> Professional Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              For over a decade, we have been at the forefront of educational transformation and business development in
              Nigeria, delivering world-class consulting services that create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BIN-AMEEN CONSULTING was founded with a simple yet powerful vision: to transform the educational
                landscape and business environment in Nigeria through expert consulting and professional development.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a passion for educational excellence has grown into a comprehensive consulting firm that
                serves schools, universities, businesses, and government institutions across Nigeria. Our TRCN
                registration and proven track record speak to our commitment to professional standards and measurable
                results.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we are proud to have trained over 5,000 teachers, partnered with 50+ educational institutions,
                and helped countless businesses achieve their strategic objectives through our evidence-based consulting
                approach.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="/education-system-presentation.jpg"
                alt="BIN-AMEEN CONSULTING educational consulting presentation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To empower educational institutions and businesses with innovative consulting solutions that drive
                  sustainable growth, enhance performance, and create lasting positive impact in Nigerian communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be Nigeria's leading consulting firm, recognized for transforming educational practices and
                  business operations through evidence-based solutions and professional excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Excellence, Integrity, Innovation, and Impact. We believe in delivering exceptional results while
                  maintaining the highest ethical standards and fostering continuous improvement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose BIN-AMEEN CONSULTING</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              What sets us apart in the consulting landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">TRCN Certified</h3>
                <p className="text-muted-foreground">
                  Official recognition from the Teachers Registration Council of Nigeria ensures our programmes meet the
                  highest professional standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Over 5,000 teachers trained and 50+ institutions partnered with us, demonstrating our consistent
                  delivery of results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Evidence-Based Approach</h3>
                <p className="text-muted-foreground">
                  Our methodologies are grounded in research and best practices, ensuring sustainable and measurable
                  outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovative Solutions</h3>
                <p className="text-muted-foreground">
                  We combine traditional wisdom with modern innovation to create solutions that work in the Nigerian
                  context.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Continuous Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end with project completion. We provide ongoing support to ensure long-term
                  success.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of the Nigerian educational and business landscape enables us to deliver contextual
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience the BIN-AMEEN Difference?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Join our community of satisfied clients and discover how our expertise can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/programmes">View Our Programmes</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
