import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, to, delay = 0 }: FeatureCardProps) => {
  return (
    <Link 
      to={to}
      className="group block"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-card border border-border rounded-lg p-6 card-hover h-full">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
