import Image from 'next/image';
import Link from 'next/link';
import { projects } from './data-projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Nuestro Trabajo
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            Casos de Éxito Probados
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explora cómo hemos ayudado a empresas como la tuya a superar desafíos y lograr resultados notables a través de la transformación digital.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="relative aspect-video mb-4">
                    <Image
                      src={project.image}
                      alt={project.imageHint || project.title}
                      fill
                      className="object-cover rounded-md"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
