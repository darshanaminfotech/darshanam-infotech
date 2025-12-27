interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg ${
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
