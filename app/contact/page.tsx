"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Link from "next/link"

// Custom SVG icons
const PhoneIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const MessageSquareIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const SendIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const Building2Icon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            organization: "",
            service: "",
            message: "",
          })
        }, 5000)
      } else {
        setSubmitError(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumber = "+2347030363774"
  const whatsappMessage = "Hello! I'm interested in learning more about BIN-AMEEN CONSULTING's services."

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Ready to Transform Your
              <span className="text-primary"> Educational Journey?</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Connect with our team of experts to discuss your needs and discover how we can help you achieve
              educational excellence and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-3">Speak directly with our team</p>
                <div className="space-y-1">
                  <div className="text-sm font-medium">+234 703 036 3774</div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailIcon />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">Send us a detailed message</p>
                <div className="space-y-1">
                  <div className="text-sm font-medium">info.binameen@gmail.com</div>
                  <div className="text-sm font-medium">training@binameenconsulting.com</div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquareIcon />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">Quick chat and instant responses</p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon />
                </div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground mb-3">When we're available</p>
                <div className="space-y-1 text-sm">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 2:00 PM</div>
                  <div className="text-muted-foreground">Sun: Closed</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll respond to your inquiry within 24 hours at
                      info.binameen@gmail.com
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                        {submitError}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="Your school/organization"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select a service</option>
                        <option value="ethication">Ethication - Teacher Training Programme</option>
                        <option value="education-consulting">Education Consulting</option>
                        <option value="research-services">Research Services</option>
                        <option value="business-consulting">Business Consulting</option>
                        <option value="public-speaking">Public Speaking</option>
                        <option value="printing-services">Printing Services</option>
                        <option value="custom-training">Custom Training Programme</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your needs and how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendIcon />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPinIcon />
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Head Office */}
                  <div>
                    <h4 className="font-semibold mb-2">Head Office - Kano</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Building 5 New Site</p>
                      <p>Yusuf Maitama Sule Federal University of Education</p>
                      <p>Kano State, Nigeria</p>
                      <p>Phone: +234 703 036 3774</p>
                      <p>Email: info.binameen@gmail.com</p>
                    </div>
                  </div>

                  
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Get started with our most popular services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/programmes">
                      <CalendarIcon />
                      Schedule Ethication Training
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/services">
                      <UsersIcon />
                      Request Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/partners">
                      <Building2Icon />
                      Explore Partnership
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquareIcon />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">How long does the Ethication programme take?</h4>
                    <p className="text-sm text-muted-foreground">
                      The Ethication programme is a comprehensive 6-week training with both theoretical and practical
                      components.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Do you offer virtual training options?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we provide both in-person and virtual training options to accommodate different needs and
                      locations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">What is the cost of your consulting services?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our consulting fees vary based on project scope and duration. Contact us for a customized quote.
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary" asChild>
                    <Link href="/blog">
                      View More FAQs
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Visit our office at Yusuf Maitama Sule Federal University of Education, Kano
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1234567890123!2d8.5167!3d12.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFederal%20College%20of%20Education%20Kano!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BIN-AMEEN CONSULTING - Federal College of Education Kano Location"
                  />
                  {/* Overlay with office details */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPinIcon />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">BIN-AMEEN CONSULTING</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Building 5 New Site
                          <br />
                          Yusuf Maitama Sule Federal University of Education
                          <br />
                          Kano State, Nigeria
                        </p>
                        <div className="mt-2 pt-2 border-t border-border/50">
                          <p className="text-xs font-medium">+234 703 036 3774</p>
                          <p className="text-xs text-primary">info.binameen@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPinIcon />
                    Getting There
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Located within the Federal University of Education campus</p>
                    <p>• Accessible by public transport and private vehicles</p>
                    <p>• Parking available on campus</p>
                    <p>• Look for Building 5 in the New Site area</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                    <a
                      href="https://www.google.com/maps/search/Federal+College+of+Education+Kano"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ClockIcon />
                    Visit Us
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong>Office Hours:</strong>
                    </p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent("I'd like to schedule a visit to your office.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Visit
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Don't wait to transform your educational journey. Contact us today and take the first step towards
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquareIcon />
                WhatsApp Us Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="tel:+2347030363774">
                <PhoneIcon />
                Call Us Direct
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
