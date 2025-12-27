import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="group p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="font-display font-semibold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
