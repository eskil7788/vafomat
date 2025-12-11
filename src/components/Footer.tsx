import { Link } from 'react-router-dom';
import logo from "@/assets/vafomat-logotyp.png";
const Footer = () => {
  return <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Vafomat logotyp" className="h-20 w-auto mb-4 opacity-90" />
            <p className="text-muted-foreground text-sm">Snabbare matval, varje dag.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/valj-matratt" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Välj maträtt
                </Link>
              </li>
              <li>
                <Link to="/veckoschema" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Veckoschema
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Funktioner</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/matratter" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Se maträtter
                </Link>
              </li>
              <li>
                <Link to="/handlingslista" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Handlingslista
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Om Vafomat</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/information" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Information
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vafomat. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;