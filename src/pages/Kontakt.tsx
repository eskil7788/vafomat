import PageLayout from '@/components/PageLayout';
import { Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
const Kontakt = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Tack för ditt meddelande!',
        description: 'Vi återkommer så snart vi kan.'
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  return <PageLayout>
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kontakta oss
            </h1>
            <p className="text-muted-foreground text-lg">
              Har du frågor eller feedback? Vi vill gärna höra från dig!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">E-post</h3>
              <p className="text-muted-foreground text-sm">
                info@vafomat.se
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sociala medier</h3>
              <p className="text-muted-foreground text-sm">
                @vafomat
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </PageLayout>;
};
export default Kontakt;