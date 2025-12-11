import PageLayout from '@/components/PageLayout';
import { Heart, Target, Users } from 'lucide-react';

const OmOss = () => {
  return (
    <PageLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Om oss
            </h1>
            <p className="text-muted-foreground text-lg">
              Människorna bakom Vafomat
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Varje dag tänker människor tanken “Vad ska vi äta idag?” och efter alldeles för lång tid 
                landar de ofta i samma maträtt som alltid. Samtidigt händer det att man lagar något nytt 
                och riktigt gott — som man sedan glömmer bort att göra igen. 
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Jag skapade Vafomat för att få ett enkelt sätt att samla alla mina maträtter 
                och få förslag utan att behöva lägga tid på att fundera.
              </p>
            </section>

            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Till min familj</h3>
                  <p className="text-muted-foreground text-sm">
                    Jag skapade Vafomat till min familj, som alltid ställer frågan om vad vi ska äta.
                    Jag hoppas att detta verktyg kommer att underlätta er vardag.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Framåt</h3>
                  <p className="text-muted-foreground text-sm">
                    Jag vill fortsätta utveckla Vafomat till ett ännu smidigare verktyg för vardagen. 
                    Med fler funktioner kan vardagens beslut bli ännu enklare. 
                  </p>
                </div>
                
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vår historia</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Allt började med en enkel fråga som ställdes alldeles för många gånger: 
                "Vad ska vi äta idag?" Efter att ha frågat det tusentals gånger utan bra svar, 
                bestämde vi oss för att göra något åt saken.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi samlade ihop hundratals maträtter – allt från klassiska svenska husmanskost 
                till exotiska rätter från fjärran länder. Målet var att skapa en tjänst som 
                var så enkel att vem som helst kunde använda den, och så smart att den alltid 
                gav bra förslag.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Idag är Vafomat ett verktyg som hjälper familjer, singlar och alla däremellan 
                att snabbt och enkelt bestämma vad som ska hamna på tallriken. Och vi är 
                bara i början av vår resa.
              </p>
            </section>

            <section className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-3 text-center">
                Tack för att du använder Vafomat!
              </h2>
              <p className="text-muted-foreground text-center">
                Varje gång du använder vår tjänst gör du vår dag lite bättre. Vi hoppas att 
                vi kan göra din vardag lite enklare också.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OmOss;
