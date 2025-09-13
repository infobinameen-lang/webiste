import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Link from "next/link"

// Custom SVG components
const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
)

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Insights & Resources</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Educational Excellence
              <span className="text-primary"> Insights & Updates</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Stay informed with the latest trends, research findings, and best practices in education and professional
              development from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Featured Article</Badge>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>December 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4" />
                        <span>Dr. Ameen Bin-Ameen</span>
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      The Future of Teacher Training in Nigeria: Embracing Digital Transformation
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      As Nigeria's educational landscape evolves, the integration of digital technologies in teacher
                      training has become not just beneficial, but essential. This comprehensive analysis explores how
                      our Ethication programme is leading this transformation...
                    </p>
                    <Button asChild>
                      <Link href="/blog/future-teacher-training-nigeria">
                        Read Full Article
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <img
                      src="/educational-presentation-session.jpg"
                      alt="Digital teacher training and educational technology"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find articles and insights tailored to your interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCapIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Teacher Development</h3>
                <p className="text-sm text-muted-foreground mb-4">Professional growth and training insights</p>
                <Badge variant="secondary">12 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Educational Research</h3>
                <p className="text-sm text-muted-foreground mb-4">Latest research findings and analysis</p>
                <Badge variant="secondary">8 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Industry Trends</h3>
                <p className="text-sm text-muted-foreground mb-4">Education sector trends and predictions</p>
                <Badge variant="secondary">6 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <p className="text-sm text-muted-foreground mb-4">Proven strategies and methodologies</p>
                <Badge variant="secondary">10 Articles</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Latest insights from our education experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/training-session-presentation.jpg"
                  alt="Classroom management training session"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Dec 10, 2024</span>
                  </div>
                  <Badge variant="outline">Teacher Development</Badge>
                </div>
                <CardTitle className="text-lg">
                  Effective Classroom Management Strategies for Nigerian Schools
                </CardTitle>
                <CardDescription>
                  Practical techniques for maintaining discipline and engagement in diverse classroom environments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Prof. Kemi Adeleke</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog/classroom-management-strategies">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/cropbanking-presentation.jpg"
                  alt="Educational technology integration presentation"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Dec 5, 2024</span>
                  </div>
                  <Badge variant="outline">Industry Trends</Badge>
                </div>
                <CardTitle className="text-lg">Integrating Technology in Traditional Nigerian Classrooms</CardTitle>
                <CardDescription>
                  A step-by-step guide to successfully implementing educational technology in resource-constrained
                  environments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Dr. Ameen Bin-Ameen</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog/technology-integration-classrooms">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/education-system-presentation.jpg"
                  alt="Modern student assessment methods presentation"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Nov 28, 2024</span>
                  </div>
                  <Badge variant="outline">Best Practices</Badge>
                </div>
                <CardTitle className="text-lg">Modern Assessment Methods: Beyond Traditional Testing</CardTitle>
                <CardDescription>
                  Exploring innovative assessment techniques that better measure student learning and engagement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Dr. Folake Osibodu</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog/modern-assessment-methods">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/professional-training-workshop.jpg"
                  alt="Educational leadership development workshop"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Nov 20, 2024</span>
                  </div>
                  <Badge variant="outline">Educational Research</Badge>
                </div>
                <CardTitle className="text-lg">Building Strong Educational Leadership in Nigerian Schools</CardTitle>
                <CardDescription>
                  Research-backed strategies for developing effective school leaders who drive institutional success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Prof. Adebayo Ogundimu</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog/educational-leadership-development">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/educational-presentation-session.jpg"
                  alt="Inclusive education strategies presentation"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Nov 15, 2024</span>
                  </div>
                  <Badge variant="outline">Best Practices</Badge>
                </div>
                <CardTitle className="text-lg">Creating Inclusive Learning Environments for All Students</CardTitle>
                <CardDescription>
                  Practical approaches to ensuring every student, regardless of background or ability, can succeed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Dr. Ameen Bin-Ameen</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog/inclusive-learning-environments">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/printing-services-operation.jpg"
                  alt="Professional development and printing services"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Nov 8, 2024</span>
                  </div>
                  <Badge variant="outline">Teacher Development</Badge>
                </div>
                <CardTitle className="text-lg">The ROI of Continuous Professional Development for Teachers</CardTitle>
                <CardDescription>
                  Quantifying the benefits of ongoing teacher training on student outcomes and institutional success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Prof. Kemi Adeleke</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog/roi-professional-development">
                      Read More
                      <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            Subscribe to our newsletter and receive the latest articles, research findings, and educational resources
            directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary">
              Subscribe
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
