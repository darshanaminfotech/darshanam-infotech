import { Target, Eye, Award, Users, Briefcase, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
import FadeIn from "@/components/animations/FadeIn";
import CountUp from "@/components/animations/CountUp";
import Particles from "@/components/animations/Particles";
import FloatingShapes from "@/components/animations/FloatingShapes";

const stats = [
  { value: 27, suffix: "", label: "Happy Clients" },
  { value: 48, suffix: "", label: "Projects Completed" },
  { value: 1, suffix: "", label: "Years Experience" },
  { value: 5, suffix: "", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships based on trust.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We stay ahead of trends to keep your business competitive.",
  },
];

const About = () => {
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
                About Us
              </span>
            </FadeIn>
            <SplitText
              text="Your Trusted Digital Partner"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              delay={50}
              splitType="words"
            />
            <BlurText
              text="We're a team of passionate digital marketers and IT experts dedicated to helping businesses thrive in the digital landscape."
              className="text-lg text-primary-foreground/80"
              delay={40}
              animateBy="words"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100} direction="up">
                <div className="bg-card rounded-xl border border-border p-6 text-center shadow-soft">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                    <CountUp
                      to={stat.value}
                      duration={2}
                      delay={index * 200}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <SectionHeading
                  subtitle="Our Story"
                  title="Building Digital Success Since Day One"
                  centered={false}
                />
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to bridge the gap between businesses and digital success,
                    Darshanam Infotech has grown from a small startup to a full-service digital marketing
                    and IT solutions company.
                  </p>
                  <p>
                    Our journey began when we noticed that many small and medium businesses were
                    struggling to navigate the complex world of digital marketing. We set out to
                    change that by providing accessible, results-driven solutions.
                  </p>
                  <p>
                    Today, we're proud to have helped hundreds of businesses across various industries
                    achieve their digital goals, from increasing brand awareness to driving sales
                    and streamlining operations.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-muted/50 flex items-center justify-center overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="space-y-4">
                      <FadeIn delay={400} direction="up">
                        <div className="h-32 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Briefcase className="w-12 h-12 text-accent" />
                        </div>
                      </FadeIn>
                      <FadeIn delay={500} direction="up">
                        <div className="h-48 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Target className="w-12 h-12 text-primary" />
                        </div>
                      </FadeIn>
                    </div>
                    <div className="space-y-4 pt-8">
                      <FadeIn delay={600} direction="up">
                        <div className="h-48 rounded-xl bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="w-12 h-12 text-primary" />
                        </div>
                      </FadeIn>
                      <FadeIn delay={700} direction="up">
                        <div className="h-32 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Users className="w-12 h-12 text-accent" />
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-soft h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative digital marketing strategies
                  and cutting-edge IT solutions that drive measurable growth and lasting success
                  in an ever-evolving digital landscape.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="bg-card rounded-2xl border border-border p-8 shadow-soft h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital partner for businesses worldwide, known for
                  our commitment to excellence, innovation, and delivering transformative results
                  that exceed expectations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="These core values guide everything we do and how we work with our clients"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 100} direction="up">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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

export default About;
