import {
  Workflow,
  Rocket,
  BarChart,
  Lightbulb,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const solutions = [
  {
    icon: <Workflow className="h-8 w-8 text-accent" />,
    title: 'Automatización de Procesos',
    description:
      'Identificamos y automatizamos tareas repetitivas para aumentar la productividad y reducir los costos operativos.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: 'Desarrollo de Productos Digitales',
    description:
      'Desde la idea hasta el lanzamiento, creamos aplicaciones personalizadas que resuelven los desafíos únicos de tu negocio.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Datos y Analítica',
    description:
      'Desbloquea información valiosa de tus datos para tomar decisiones más inteligentes y basadas en evidencia.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: 'Estrategia Tecnológica',
    description:
      'Creamos un plan tecnológico a prueba de futuro que se alinea con tus objetivos comerciales a largo plazo.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Nuestras Soluciones
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            Cómo Ayudamos a las Empresas a Tener Éxito
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos soluciones a medida que abordan tus desafíos más urgentes, convirtiendo obstáculos en oportunidades de crecimiento.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full">{solution.icon}</div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
