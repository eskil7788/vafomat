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
              <p className="text-muted-foreground leading-relaxed text-lg">
                Vafomat skapades med en enkel tanke: att göra vardagen lite enklare. Vi har alla 
                varit där – stående i köket efter en lång dag, stirrande in i kylskåpet, utan 
                den minsta aning om vad vi ska laga till middag. Det var frustrerande, och vi 
                visste att vi inte var ensamma.
              </p>
            </section>

            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Vårt uppdrag</h3>
                  <p className="text-muted-foreground text-sm">
                    Att eliminera beslutsångesten kring mat och ge människor mer tid att 
                    fokusera på det som verkligen betyder något – att njuta av maten med 
                    nära och kära.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Vår vision</h3>
                  <p className="text-muted-foreground text-sm">
                    En värld där ingen behöver fundera i mer än några sekunder över vad 
                    de ska äta. Mat ska vara glädje, inte stress.
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
