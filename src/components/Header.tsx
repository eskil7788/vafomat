import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          Vafomat
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/information" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Information
          </Link>
          <Link 
            to="/om-oss" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Om oss
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
