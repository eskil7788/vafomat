import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Search, UtensilsCrossed } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import AddMealDialog from '@/components/AddMealDialog';
import { useMeals } from '@/context/MealContext';

const Matratter = () => {
  const { meals, removeMeal } = useMeals();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMeals = meals.filter(meal =>
    meal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <UtensilsCrossed className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alla maträtter
            </h1>
            <p className="text-muted-foreground">
              {meals.length} maträtter i databasen
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Sök maträtter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <AddMealDialog />
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {filteredMeals.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                {searchQuery ? 'Inga maträtter matchade din sökning' : 'Inga maträtter i listan'}
              </div>
            ) : (
              <ul className="divide-y divide-border max-h-[500px] overflow-y-auto">
                {filteredMeals.map((meal, index) => {
                  const originalIndex = meals.indexOf(meal);
                  return (
                    <li 
                      key={originalIndex}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground text-sm w-8">
                          {originalIndex + 1}.
                        </span>
                        <span className="text-foreground">{meal}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeMeal(originalIndex)}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Matratter;
