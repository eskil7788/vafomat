import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Calendar } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useMeals } from '@/context/MealContext';

const weekdays = [
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
  'Söndag',
];

const Veckoschema = () => {
  const { getWeeklyMenu } = useMeals();
  const [weeklyMeals, setWeeklyMeals] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateMenu = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setWeeklyMeals(getWeeklyMenu());
      setIsGenerating(false);
    }, 500);
  };

  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veckomeny
            </h1>
            <p className="text-muted-foreground">
              Generera en veckomeny med sju slumpmässiga maträtter.
            </p>
          </div>

          {weeklyMeals.length > 0 && (
            <div className="mb-8 space-y-3">
              {weeklyMeals.map((meal, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 flex items-center gap-4 animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">
                      {weekdays[index]}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-foreground font-medium">
                    {meal}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleGenerateMenu}
              disabled={isGenerating}
              className="gap-2 px-8"
            >
              <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              {weeklyMeals.length > 0 ? 'Generera ny meny' : 'Skapa veckomeny'}
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Veckoschema;
