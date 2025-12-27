import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeIn from "@/components/animations/FadeIn";
import Particles from "@/components/animations/Particles";
import FloatingShapes from "@/components/animations/FloatingShapes";

const contactMethods = [
  {
    icon: Phone,
    title: "WhatsApp",
    description: "Chat with us instantly",
    value: "8238334799",
    action: "https://wa.me/8238334799",
    actionLabel: "Open WhatsApp",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message",
    value: "darshanaminfotech@gmail.com",
    action: "mailto:darshanaminfotech@gmail.com",
    actionLabel: "Send Email",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our location",
    value: "fo-426,abc-2, near abc circle, mota varacha,surat - 394101",
    action: null,
    actionLabel: null,
    highlight: false,
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we're available",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    action: null,
    actionLabel: null,
    highlight: false,
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital marketing services including Facebook Marketing, Instagram Marketing, Social Media Ads Management, and IT Solutions like Web Development, Software Support, Automation, and Tech Consulting.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "Simply reach out to us via WhatsApp or email with your project details. We'll schedule a free consultation to understand your needs and provide a customized quote.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website can take 2-4 weeks, while comprehensive marketing campaigns are ongoing. We'll provide specific timelines during our consultation.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We specialize in helping small and medium businesses grow their digital presence. Our solutions are scalable to fit businesses of all sizes.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We use data-driven metrics to measure success, including engagement rates, conversion rates, website traffic, and ROI. We provide regular reports so you can track your progress.",
  },
];

const Contact = () => {
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
                Contact Us
              </span>
            </FadeIn>
            <SplitText
              text="Let's Start a Conversation"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              delay={50}
              splitType="words"
            />
            <BlurText
              text="Have a project in mind or questions about our services? We'd love to hear from you."
              className="text-lg text-primary-foreground/80"
              delay={40}
              animateBy="words"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Methods */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Get in Touch"
            title="How to Reach Us"
            description="Choose your preferred method of contact"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <FadeIn key={method.title} delay={index * 100} direction="up">
                <div
                  className={`rounded-2xl border p-6 h-full ${
                    method.highlight
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card border-border"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      method.highlight ? "bg-accent-foreground/10" : "bg-accent/10"
                    }`}
                  >
                    <method.icon
                      className={`w-6 h-6 ${method.highlight ? "text-accent-foreground" : "text-accent"}`}
                    />
                  </div>
                  <h3
                    className={`font-semibold text-lg mb-1 ${
                      method.highlight ? "text-accent-foreground" : "text-foreground"
                    }`}
                  >
                    {method.title}
                  </h3>
                  <p
                    className={`text-sm mb-3 ${
                      method.highlight ? "text-accent-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {method.description}
                  </p>
                  <p
                    className={`text-sm font-medium mb-4 ${
                      method.highlight ? "text-accent-foreground" : "text-foreground"
                    }`}
                  >
                    {method.value}
                  </p>
                  {method.action && (
                    <Button
                      size="sm"
                      variant={method.highlight ? "secondary" : "outline"}
                      asChild
                      className="w-full"
                    >
                      <a
                        href={method.action}
                        target={method.action.startsWith("http") ? "_blank" : undefined}
                        rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.actionLabel}
                      </a>
                    </Button>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Main CTA */}
          <FadeIn delay={500} direction="up">
            <div className="bg-muted/50 rounded-2xl p-10 lg:p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Prefer a Quick Chat?
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                WhatsApp is the fastest way to reach us. Click below to start a conversation 
                and we'll respond within minutes during business hours.
              </p>
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
                <Button size="lg" variant="outline" className="px-8 h-14 text-base" asChild>
                  <a href="mailto:darshanaminfotech@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send an Email
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
