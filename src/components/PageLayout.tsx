import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  backTo?: string;
}

const PageLayout = ({ children, showBackButton = true, backTo = '/' }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-16">
        {showBackButton && (
          <div className="container pt-6">
            <Link 
              to={backTo}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Tillbaka
            </Link>
          </div>
        )}
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
