import { Plus } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import AddMealDialog from '@/components/AddMealDialog';
import { Button } from '@/components/ui/button';
const LaggTill = () => {
  return <PageLayout>
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lägg till maträtt
            </h1>
            <p className="text-muted-foreground mb-8">Lägg till en ny maträtt i listan så att den kan föreslås i framtiden.</p>
          </div>

          <AddMealDialog trigger={<Button size="lg" className="gap-2 px-8">
                <Plus className="w-5 h-5" />
                Lägg till ny maträtt
              </Button>} />
        </div>
      </div>
    </PageLayout>;
};
export default LaggTill;