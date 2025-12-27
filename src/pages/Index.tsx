import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Megaphone,
  Code,
  ArrowRight,
  CheckCircle2,
  Phone,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeIn from "@/components/animations/FadeIn";
import Particles from "@/components/animations/Particles";
import FloatingShapes from "@/components/animations/FloatingShapes";
import ParallaxSection from "@/components/animations/ParallaxSection";

const services = [
  {
    icon: Facebook,
    title: "Facebook Marketing",
    description:
      "Reach millions of potential customers with targeted Facebook campaigns that drive engagement and conversions.",
  },
  {
    icon: Instagram,
    title: "Instagram Marketing",
    description:
      "Build your brand presence on Instagram with stunning visuals and strategic content that resonates with your audience.",
  },
  {
    icon: Megaphone,
    title: "Social Media Ads",
    description:
      "Maximize your ROI with data-driven ad campaigns across all major social platforms, optimized for results.",
  },
  {
    icon: Code,
    title: "IT Solutions",
    description:
      "From web development to tech consulting, we provide comprehensive IT solutions to power your business forward.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with years of industry experience",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable growth for clients",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "We treat your business goals as our own priority",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here when you need us, any time of day",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "Rigorous standards for every project we deliver",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        {/* Animated Background Elements */}
        <Particles particleCount={40} minSize={2} maxSize={5} speed={0.5} />
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0} direction="up">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Digital Marketing & IT Solutions
              </span>
            </FadeIn>
            <SplitText
              text="Transform Your Business with Digital Excellence"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              delay={50}
              duration={0.5}
              splitType="words"
            />
            <BlurText
              text="We help businesses grow through strategic digital marketing and innovative IT solutions. Let's build your success story together."
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
              delay={30}
              animateBy="words"
            />
            <FadeIn delay={600} direction="up">
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
                    Contact Us on WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base"
                  asChild
                >
                  <Link to="/services" className="flex items-center gap-2">
                    Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Services"
            title="What We Offer"
            description="Comprehensive digital solutions tailored to accelerate your business growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100} direction="up">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500} direction="up">
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Your Success Is Our Priority"
            description="We're committed to delivering exceptional results that drive your business forward"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 100} direction="up">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={700} direction="up">
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/why-choose-us" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <Particles particleCount={30} minSize={1} maxSize={4} speed={0.3} />
        <div className="container mx-auto px-4 relative z-10">
          <ParallaxSection speed={0.2}>
            <div className="max-w-3xl mx-auto text-center">
            <SplitText
              text="Ready to Grow Your Business?"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
              delay={50}
              splitType="words"
            />
            <BlurText
              text="Let's discuss how we can help you achieve your digital marketing and IT goals. Get in touch with us today!"
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
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base"
                  asChild
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=darshanaminfotech@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Send Us an Email
                    <ArrowRight className="w-5 h-5" />
                  </a>
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

export default Index;
