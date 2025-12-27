import { Link } from "react-router-dom";
import {
  Users,
  TrendingUp,
  Shield,
  Clock,
  Headphones,
  CheckCircle2,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeIn from "@/components/animations/FadeIn";
import CountUp from "@/components/animations/CountUp";
import Particles from "@/components/animations/Particles";
import FloatingShapes from "@/components/animations/FloatingShapes";
import ParallaxSection from "@/components/animations/ParallaxSection";

const mainBenefits = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team consists of certified professionals with years of experience in digital marketing and IT. We stay updated with the latest trends and technologies to deliver cutting-edge solutions.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "We have a track record of delivering measurable results for our clients. From increased engagement to higher conversion rates, our strategies are designed for success.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "We build lasting relationships with our clients based on trust, transparency, and mutual respect. Your business goals become our goals.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We understand the importance of time in business. Our efficient processes ensure quick delivery without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is always ready to assist you. Whether you have questions or need help, we're just a message away.",
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies and innovative approaches to give your business a competitive edge in the digital landscape.",
  },
];

const additionalReasons = [
  "Customized strategies for your unique business needs",
  "Transparent pricing with no hidden costs",
  "Regular progress reports and updates",
  "Data-driven decision making",
  "Scalable solutions that grow with you",
  "Multi-industry experience and expertise",
  "Strong focus on ROI and business outcomes",
  "Collaborative approach to project management",
];

const testimonials = [
  {
    quote:
      "Darshanam Infotech transformed our online presence. Our social media engagement increased by 300% within three months!",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The team's expertise in web development and digital marketing helped us launch our e-commerce platform successfully.",
    author: "Michael Chen",
    role: "Founder, GreenMart",
  },
  {
    quote:
      "Professional, responsive, and results-oriented. Darshanam Infotech is the best decision we made for our digital growth.",
    author: "Emily Davis",
    role: "Marketing Director, Bloom Agency",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero relative overflow-hidden">
        <Particles particleCount={35} minSize={2} maxSize={5} speed={0.4} />
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn delay={0} direction="up">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Why Choose Us
              </span>
            </FadeIn>
            <SplitText
              text="Your Success Is Our Mission"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              delay={50}
              splitType="words"
            />
            <BlurText
              text="Discover why businesses trust us to deliver exceptional digital marketing and IT solutions."
              className="text-lg text-primary-foreground/80"
              delay={40}
              animateBy="words"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Advantages"
            title="What Sets Us Apart"
            description="Here's why businesses choose us as their digital partner"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 100} direction="up">
                <div className="bg-card rounded-2xl border border-border p-8 shadow-soft hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Reasons */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <SectionHeading
                  subtitle="More Reasons"
                  title="We Go Above and Beyond"
                  centered={false}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  {additionalReasons.map((reason, index) => (
                    <FadeIn key={index} delay={index * 50} direction="up">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{reason}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <div className="bg-card rounded-2xl border border-border p-10 shadow-soft">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="font-display text-5xl font-bold text-accent mb-2">
                        <CountUp to={98} duration={2} suffix="%" />
                      </div>
                      <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-5xl font-bold text-accent mb-2">
                        <CountUp to={27} duration={2} suffix="" delay={200} />
                      </div>
                      <div className="text-muted-foreground text-sm">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-5xl font-bold text-accent mb-2">
                        <CountUp to={48} duration={2} suffix="" delay={400} />
                      </div>
                      <div className="text-muted-foreground text-sm">Projects Done</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-5xl font-bold text-accent mb-2">
                        <CountUp to={1} duration={2} suffix="" delay={600} />
                      </div>
                      <div className="text-muted-foreground text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from our satisfied clients"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 150} direction="up">
                <div className="bg-card rounded-2xl border border-border p-8 shadow-soft h-full">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <Particles particleCount={25} minSize={1} maxSize={4} speed={0.3} />
        <div className="container mx-auto px-4 relative z-10">
          <ParallaxSection speed={0.2}>
            <div className="max-w-3xl mx-auto text-center">
            <SplitText
              text="Ready to Experience the Difference?"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
              delay={50}
              splitType="words"
            />
            <BlurText
              text="Join hundreds of satisfied clients who have transformed their business with our help. Get in touch today!"
              className="text-lg text-primary-foreground/80 mb-10"
              delay={40}
              animateBy="words"
            />
            <FadeIn delay={400} direction="up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base"
                  asChild
                >
                  <a
                    href="https://wa.me/8238334799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-base"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
