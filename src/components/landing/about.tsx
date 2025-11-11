import { Card, CardContent } from '@/components/ui/card';
import { Building2, Heart, Target, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Sobre Nosotros
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            Quiénes Somos
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6 text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos <strong className="text-foreground">FWstudio</strong>, una agencia tecnológica creada para ayudar a los negocios tradicionales a modernizarse sin perder su esencia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sabemos lo que significa manejar una empresa entre papeles, WhatsApp y planillas interminables, porque muchos de nuestros primeros proyectos nacieron acompañando empresas familiares que pasaban por lo mismo.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Hoy combinamos <strong className="text-foreground">tecnología, análisis y automatización</strong> para que cada empresa recupere el control, el tiempo y la tranquilidad de saber que todo está funcionando como debería.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Creemos en <strong className="text-foreground">soluciones simples</strong>, en hablar claro y en construir relaciones de confianza.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg bg-primary/5">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xl font-semibold text-foreground">
                Más que hacer software, ayudamos a las empresas a trabajar mejor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
