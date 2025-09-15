import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "@/components/navigation";
import { Navigation as SwiperNavigation } from "swiper/modules";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import {
  Building2,
  GraduationCap,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Handshake,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Partners</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Building Success Through
              <span className="text-primary"> Strategic Partnerships</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We collaborate with leading educational institutions, government agencies, and organizations across
              Nigeria to create lasting impact and drive educational excellence.
            </p>
          </div>
        </div>
      </section>

    {/* Partnership Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[SwiperNavigation]}
            navigation
            spaceBetween={50}
            slidesPerView={1}
            className="w-full"
          >
            <SwiperSlide>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/trcn.png" alt="TRCN" className="w-full h-full object-contain" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">TEACHERS REGISTRATION COUNCIL OF NIGERIA</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/birr.jpg" alt="AL-BIRR MULTIMEDIA" className="w-full h-full object-contain" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">AL-BIRR MULTIMEDIA</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/mm.jpg" alt="HAMUNA COURIER AND LOGISTIC SERVICES" className="w-full h-full object-contain" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">HAMUNA COURIER AND LOGISTIC SERVICES</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/kano.jpg" alt="KANO STATE MINISTRY OF EDUCATION" className="w-full h-full object-contain" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">KANO STATE MINISTRY OF EDUCATION</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      
      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              What you gain when you partner with BIN-AMEEN CONSULTING
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expertise Access</h3>
                <p className="text-muted-foreground">
                  Tap into our 15+ years of experience and TRCN-certified methodologies for educational excellence.
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
                  Work together on joint initiatives that leverage both organizations' strengths and resources.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  Achieve documented improvements in educational outcomes and organizational performance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Benefit from our rigorous quality standards and continuous improvement processes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Network Expansion</h3>
                <p className="text-muted-foreground">
                  Connect with our extensive network of educational and business partners across Nigeria.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Long-term Support</h3>
                <p className="text-muted-foreground">
                  Ongoing partnership support to ensure sustained success and continuous development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* How to Partner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How to Partner With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Simple steps to begin a transformative partnership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground text-sm">
                  Schedule a meeting to discuss your organization's needs, goals, and potential collaboration areas.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Partnership Design</h3>
                <p className="text-muted-foreground text-sm">
                  Collaborate to design a partnership framework that aligns with both organizations' objectives.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Begin collaborative activities with clear timelines, deliverables, and success metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Join our network of successful partners and create lasting impact in education and business development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
