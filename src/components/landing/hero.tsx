import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Transforma tu Negocio para la Era Digital
            </h1>
          </div>
          <div className="max-w-2xl text-muted-foreground md:text-xl">
            <p>
              FWstudio ofrece estrategias innovadoras y soluciones tecnológicas personalizadas 
              para impulsar el crecimiento, la eficiencia y la automatización.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/#contact">Obtén una Consulta Gratuita</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/#projects">Ver Nuestro Trabajo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
