import PageLayout from '@/components/PageLayout';
import { Info, Utensils, Calendar, ListTodo, Sparkles } from 'lucide-react';

const Information = () => {
  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Info className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Information
            </h1>
            <p className="text-muted-foreground text-lg">
              Allt du behöver veta om Vafomat
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vad är Vafomat?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vafomat är en enkel och användarvänlig tjänst som hjälper dig att bestämma vad du ska äta. 
                Vi vet alla hur det är – du står i köket efter en lång dag och kan bara inte komma på vad 
                du ska laga. Det är där Vafomat kommer in i bilden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Med en databas på över 300 maträtter från olika kök världen över får du alltid nya 
                och spännande förslag. Oavsett om du vill ha något snabbt och enkelt eller lite mer 
                avancerat, har vi något för dig.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Hur fungerar det?</h2>
              
              <div className="grid gap-6">
                <div className="flex gap-4 bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Slumpmässigt val</h3>
                    <p className="text-muted-foreground text-sm">
                      Tryck på "Välj maträtt" och få ett slumpmässigt förslag från vår databas. 
                      Gillar du inte förslaget? Tryck igen för ett nytt!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Veckoplanering</h3>
                    <p className="text-muted-foreground text-sm">
                      Skapa ett komplett veckoschema med sju olika maträtter. Perfekt för att 
                      planera veckans middagar i förväg och undvika den dagliga frågan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ListTodo className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Handlingslista</h3>
                    <p className="text-muted-foreground text-sm">
                      Skriv din inköpslista direkt i appen. Med ett kvitto-liknande utseende 
                      blir det enkelt att hålla koll på vad du behöver handla.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Anpassa efter dig</h3>
                    <p className="text-muted-foreground text-sm">
                      Lägg till egna maträtter som du gillar eller ta bort de du inte vill se. 
                      Gör Vafomat till din egen personliga matassistent.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Varför Vafomat?
              </h2>
              <p className="text-muted-foreground">
                För att vardagens små beslut inte behöver vara svåra. Med Vafomat sparar du tid, 
                får inspiration och slipper den eviga frågan: "Vad ska vi äta idag?"
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Information;
