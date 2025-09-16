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
import { ArrowRightIcon } from "lucide-react";

const GraduationCapIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM5 13.18l7 3.82 7-3.82V11L12 15 5 11v2.18z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2z" />
  </svg>
);

const MicIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H6c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

export default function HomePage() {
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
      <section
        className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32"
        data-aos="fade-up"
      >
        <div
          className="container mx-auto px-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/training-session-presentation.jpg')" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-black/50 p-8 rounded-lg">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                TRCN Registered • Professional Excellence
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-white">
                Transforming Education & Business Through
                <span className="text-primary"> Expert Consulting</span>
              </h1>
              <p className="text-xl text-white text-pretty mb-8 leading-relaxed">
                BIN-AMEEN CONSULTING delivers world-class education, research, and business solutions. Our flagship
                Ethication programme has trained thousands of teachers across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" asChild>
                  <Link href="/programmes">
                    Explore Our Programmes
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions for education, research, and business development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow" data-aos="fade-up">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCapIcon />
                </div>
                <CardTitle>Teacher Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional development programmes including our flagship Ethication curriculum
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon />
                </div>
                <CardTitle>Educational Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Evidence-based research solutions for educational institutions and policy makers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingIcon />
                </div>
                <CardTitle>Business Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategic business development and organizational improvement services
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MicIcon />
                </div>
                <CardTitle>Public Speaking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional speaking services for conferences, workshops, and corporate events
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethication Programme Highlight */}
      <section className="py-20 bg-muted/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/educational-presentation-session.jpg"
                alt="Ethication teacher training programme in session"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Flagship Programme</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ethication - Teacher Training Programme</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive teacher development programme that has transformed educational practices across
                Nigeria. TRCN certified and designed for modern classroom excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}