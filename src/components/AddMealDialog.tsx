import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useMeals } from '@/context/MealContext';
import { useToast } from '@/hooks/use-toast';

interface AddMealDialogProps {
  trigger?: React.ReactNode;
}

const AddMealDialog = ({ trigger }: AddMealDialogProps) => {
  const [mealName, setMealName] = useState('');
  const [open, setOpen] = useState(false);
  const { addMeal, meals } = useMeals();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mealName.trim()) {
      toast({
        title: 'Fel',
        description: 'Ange ett namn på maträtten',
        variant: 'destructive',
      });
      return;
    }

    if (meals.includes(mealName.trim())) {
      toast({
        title: 'Finns redan',
        description: 'Denna maträtt finns redan i listan',
        variant: 'destructive',
      });
      return;
    }

    addMeal(mealName);
    toast({
      title: 'Tillagd!',
      description: `${mealName} har lagts till i listan`,
    });
    setMealName('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Lägg till maträtt
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Lägg till ny maträtt</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Skriv maträttens namn..."
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Avbryt
            </Button>
            <Button type="submit">
              Lägg till
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMealDialog;
