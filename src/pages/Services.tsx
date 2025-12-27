import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Megaphone,
  Code,
  Server,
  Cog,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      "Harness the power of Facebook's massive user base to reach your target audience with precision.",
    features: [
      "Targeted ad campaigns",
      "Audience research & segmentation",
      "Content strategy & creation",
      "Performance analytics & reporting",
      "Community management",
      "Lead generation campaigns",
    ],
  },
  {
    icon: Instagram,
    title: "Instagram Marketing",
    description:
      "Build a stunning visual presence on Instagram that captures attention and drives engagement.",
    features: [
      "Profile optimization",
      "Visual content creation",
      "Stories & Reels strategy",
      "Influencer partnerships",
      "Hashtag strategy",
      "Engagement growth tactics",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Ads Management",
    description:
      "Maximize your advertising ROI with data-driven campaigns across all major platforms.",
    features: [
      "Multi-platform ad management",
      "A/B testing & optimization",
      "Budget allocation strategy",
      "Conversion tracking setup",
      "Retargeting campaigns",
      "Monthly performance reports",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance.",
    features: [
      "Responsive website design",
      "E-commerce solutions",
      "Custom web applications",
      "CMS implementation",
      "Website maintenance",
      "Performance optimization",
    ],
  },
  {
    icon: Server,
    title: "Software Support",
    description:
      "Reliable technical support to keep your software systems running smoothly around the clock.",
    features: [
      "24/7 technical support",
      "Bug fixes & troubleshooting",
      "Software updates & patches",
      "System monitoring",
      "Backup & recovery",
      "Security maintenance",
    ],
  },
  {
    icon: Cog,
    title: "Automation Solutions",
    description:
      "Streamline your business processes with intelligent automation that saves time and reduces errors.",
    features: [
      "Workflow automation",
      "CRM integration",
      "Email automation",
      "Data synchronization",
      "Custom API integrations",
      "Process optimization",
    ],
  },
  {
    icon: Headphones,
    title: "Tech Consulting",
    description:
      "Strategic technology guidance to help you make informed decisions for your business growth.",
    features: [
      "Technology assessment",
      "Digital transformation strategy",
      "IT infrastructure planning",
      "Vendor selection assistance",
      "Security consulting",
      "Scalability planning",
    ],
  },
];

const Services = () => {
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
                Our Services
              </span>
            </FadeIn>
            <SplitText
              text="Comprehensive Digital Solutions"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              delay={40}
              duration={0.5}
              splitType="words"
            />
            <BlurText
              text="From social media marketing to IT solutions, we offer everything you need to succeed in the digital world."
              className="text-lg text-primary-foreground/80"
              delay={30}
              animateBy="words"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <FadeIn 
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                  direction={index % 2 === 1 ? "right" : "left"}
                  delay={index * 100}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <FadeIn key={feature} delay={(featureIndex + 1) * 50} direction="up">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </FadeIn>
                <FadeIn 
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  direction={index % 2 === 1 ? "left" : "right"}
                  delay={index * 100 + 200}
                >
                  <div className="aspect-[4/3] rounded-2xl bg-muted/50 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-accent/30" />
                  </div>
                </FadeIn>
              </div>
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
              text="Ready to Get Started?"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
              delay={50}
              splitType="words"
            />
            <BlurText
              text="Contact us today to discuss your project and learn how we can help your business grow with our digital solutions."
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

export default Services;
