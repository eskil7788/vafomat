import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, UtensilsCrossed, ListTodo, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
const Index = () => {
  const features = [{
    title: 'Skapa veckoschema',
    description: 'Få ett komplett veckoschema med sju olika maträtter, en för varje dag.',
    icon: Calendar,
    to: '/veckoschema'
  }, {
    title: 'Se maträtter',
    description: 'Bläddra igenom hela listan av maträtter och hantera dina favoriter.',
    icon: UtensilsCrossed,
    to: '/matratter'
  }, {
    title: 'Skriv handlingslista',
    description: 'Skapa din inköpslista i ett enkelt kvittoformat.',
    icon: ListTodo,
    to: '/handlingslista'
  }, {
    title: 'Lägg till maträtt',
    description: 'Lägg till egna maträtter till databasen för framtida förslag.',
    icon: Plus,
    to: '/lagg-till'
  }];
  return <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Vad vill du äta idag?
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-in" style={{
          animationDelay: '100ms'
        }}>
            Sluta fundera och låt oss hjälpa dig bestämma. 
            Med Vafomat får du snabbt ett förslag på vad du kan laga.
          </p>
          <Link to="/valj-matratt">
            <Button size="lg" className="text-lg px-8 py-6 animate-fade-in shadow-lg hover:shadow-xl transition-shadow" style={{
            animationDelay: '200ms'
          }}>
              Välj maträtt
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Utforska funktioner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} to={feature.to} delay={index * 100} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Redo att börja?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Med över 300 maträtter i vår databas kommer du aldrig att sakna inspiration.
          </p>
          <Link to="/valj-matratt">
            <Button size="lg">
              Få ditt förslag nu
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;