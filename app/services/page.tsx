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
                  Helping schools, NGOs, and education agencies improve systems and outcomes.
 and professional development
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
                        helping schools adopt and implement smart boards, LMS, and other EdTech solutions.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Educational Analysis </div>
                      <div className="text-sm text-muted-foreground">
                        school needs assessments, curriculum evaluation, and data-driven recommendations.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">International Admission Processing</div>
                      <div className="text-sm text-muted-foreground">guiding students through applications, documentation, and visa preparation.
                    </div>
                    </div>
                  </div>
                </div>
                
              </CardContent>
            </Card>

            {/* Research Services */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Research Consulting
                </CardTitle>
                </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Research Proposal Development Support
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Data Collection & Analysis (Qualitative & Quantitative)
                      </div>
                      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Thesis & Dissertation Coaching</div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Publication Support (Journal Guidance)
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Survey Design & Instrument Validation
                       (Journal Guidance)
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Academic Writing Workshops</div>
                      </div>
                  </div>
                </div>
                
              </CardContent>
            </Card>

            {/* Business Consulting */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Entrepreneurship Education</CardTitle>
                <CardDescription className="text-base">
                  Building the next generation of innovators and job creators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Think Twice Programme – guiding youth in education vs. entrepreneurship decisions.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Business Plan Development & Review
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Startup Mentoring & Coaching
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Entrepreneurship Bootcamps & Seminars
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Innovation & Creative Thinking Workshops
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Funding Readiness & Pitch Deck Design
                      </div>
                    </div>
                  </div>
                </div>
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
                  Professional and academic printing services with quality assurance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Academic & Research Printing (Thesis, Dissertations, Reports)</div>
                      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Training Manuals & Workbooks</div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Certificates & ID Cards</div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Flyers, Posters, & Banners
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">eBook & Digital Publishing</div>
                      
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        Educational Materials Publishing
                      </div>                
                    </div>
                  </div>
                </div>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
{/* Teacher Training Service */}
<section className="py-20 bg-muted/10">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">Teacher Training Service</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
        At Bin-ameen Consulting, we believe that teachers are the cornerstone of educational transformation. Our Teacher Training Programme is designed to equip educators with the knowledge, skills, and mindset required to thrive in 21st-century classrooms.
      </p>
    </div>

    {/* Programme Overview */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Programme Overview</h3>
      <p className="text-muted-foreground text-lg leading-relaxed">
        This is a comprehensive, practice-oriented programme focused on pedagogy, educational technology, and professional development. It empowers teachers to create engaging classrooms, inspire learners, and deliver measurable results.
      </p>
    </div>

    {/* Programme Structure */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Programme Structure</h3>
      <ul className="list-disc list-inside text-muted-foreground text-lg leading-relaxed">
        <li>Pre-Training Needs Assessment – We identify the unique challenges of your teachers and school before the training.</li>
        <li>Interactive Workshops & Seminars – Hands-on sessions with practical strategies and real classroom scenarios.</li>
        <li>Micro-Teaching Sessions – Participants practice and receive constructive feedback to refine their teaching methods.</li>
        <li>Educational Technology Demonstrations – Practical exposure to tools and platforms for digital learning.</li>
        <li>Post-Training Evaluation & Support – Measuring impact and providing continued mentorship for sustainable results.</li>
      </ul>
    </div>

    {/* Curriculum Highlights */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Curriculum Highlights</h3>
      <ul className="list-disc list-inside text-muted-foreground text-lg leading-relaxed">
        <li>Effective Lesson Planning & Delivery</li>
        <li>Classroom Management & Student Engagement</li>
        <li>Assessment & Evaluation Techniques</li>
        <li>21st-Century Skills Integration (Critical Thinking, Collaboration, Creativity)</li>
        <li>Inclusive Education & Differentiated Instruction</li>
        <li>Educational Technology & Digital Literacy</li>
        <li>Professional Ethics & Teacher Motivation</li>
        <li>Leadership Skills for Teachers</li>
      </ul>
    </div>

    {/* Key Benefits */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
      <ul className="list-disc list-inside text-muted-foreground text-lg leading-relaxed">
        <li>Improved teacher confidence and competence.</li>
        <li>Practical tools for managing and engaging students.</li>
        <li>Integration of technology to enhance teaching outcomes.</li>
        <li>Increased student performance and school reputation.</li>
        <li>Certification of participation to motivate and recognize teachers.</li>
      </ul>
    </div>

    {/* Who Can Attend */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Who Can Attend</h3>
      <ul className="list-disc list-inside text-muted-foreground text-lg leading-relaxed">
        <li>Primary & Secondary School Teachers</li>
        <li>School Administrators & Heads of Department</li>
        <li>Prospective Teachers & NYSC Members in Education</li>
        <li>Education Officers from Ministries, NGOs, and Agencies</li>
      </ul>
    </div>

    {/* Delivery Options */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Delivery Options</h3>
      <ul className="list-disc list-inside text-muted-foreground text-lg leading-relaxed">
        <li>On-Site Training: We come to your school or organization.</li>
        <li>Centralized Workshops: Open sessions for participants from different schools.</li>
        <li>Virtual Training: Live online sessions for remote participation.</li>
      </ul>
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
