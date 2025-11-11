import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/components/landing/data-projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Proyectos
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Imagen principal */}
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageHint || project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Información principal */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{project.description}</p>

          <Button asChild size="lg" className="rounded-full">
            <Link href="/#contact">Solicitar Consulta Gratuita</Link>
          </Button>
        </div>
      </div>

      {/* Secciones detalladas */}
      <div className="mt-16 space-y-8">
        {project.problema && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">El Problema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-muted-foreground">{project.problema}</p>
            </CardContent>
          </Card>
        )}

        {project.solucion && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">La Solución</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-muted-foreground">{project.solucion}</p>
            </CardContent>
          </Card>
        )}

        {project.resultado && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Resultados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-muted-foreground">{project.resultado}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* CTA final */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-headline font-bold mb-4">
          ¿Tenés un desafío similar?
        </h2>
        <p className="text-muted-foreground mb-6">
          Hablemos sobre cómo podemos ayudarte a transformar tu negocio
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/#contact">Agendar Consulta Gratuita</Link>
        </Button>
      </div>
    </div>
  );
}
