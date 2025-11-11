import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Scale, Target, Copyright, UserCheck, AlertTriangle, ExternalLink, Shield, FileText } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <div className="container w-maxContent m-auto py-12 md:py-20 max-w-4xl">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>

      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Scale className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-headline font-bold tracking-tight mb-4">
          Términos de Uso
        </h1>
        <p className="text-muted-foreground">
          Última actualización: noviembre 2025
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg">
              El presente Aviso Legal regula el uso del sitio web{' '}
              <strong>www.fwstudioagency.com</strong> (en adelante, "el Sitio"), propiedad de{' '}
              <strong>FWstudio</strong>, cuyo titular es <strong>Faustino Watschinger</strong>{' '}
              (en adelante, "el Titular").
            </p>
            <p className="mt-4 font-semibold">
              Al acceder y utilizar este Sitio, el usuario acepta los presentes Términos de Uso. Si no está de acuerdo con ellos, debe abstenerse de utilizar el sitio o enviar información mediante los formularios disponibles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              1. Objeto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              A través del Sitio, FWstudio ofrece servicios de consultoría tecnológica, desarrollo de software, automatización y soluciones digitales personalizadas para empresas.
            </p>
            <p>
              El acceso al Sitio tiene carácter gratuito y no implica relación contractual alguna entre el usuario y FW Studio.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Copyright className="h-5 w-5 text-primary" />
              2. Propiedad intelectual
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Todos los contenidos del Sitio —textos, imágenes, logotipos, diseños, código fuente y demás elementos— son propiedad exclusiva de FWstudio o de terceros que han autorizado su uso.
            </p>
            <p>
              Está prohibida su reproducción, distribución o modificación sin el consentimiento previo y por escrito del Titular.
            </p>
            <p className="font-semibold">
              El uso no autorizado de cualquier elemento del Sitio podrá dar lugar a las acciones legales correspondientes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              3. Responsabilidad del usuario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El usuario se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Utilizar el Sitio y sus contenidos de forma lícita y adecuada.</li>
              <li>No realizar acciones que puedan dañar, sobrecargar o afectar el funcionamiento del Sitio.</li>
              <li>No emplear los datos o la información obtenida para fines ilícitos o comerciales sin consentimiento.</li>
            </ul>
            <p>
              El usuario es responsable de la veracidad y exactitud de los datos que envíe mediante los formularios de contacto.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              4. Limitación de responsabilidad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              FWstudio no garantiza la disponibilidad ininterrumpida del Sitio ni la ausencia de errores técnicos.
            </p>
            <p>
              Tampoco se hace responsable de los daños o perjuicios que pudieran derivarse del uso indebido de la información contenida en el Sitio o del uso de enlaces externos.
            </p>
            <p>
              Los contenidos se ofrecen únicamente con fines informativos y pueden modificarse o actualizarse sin previo aviso.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              5. Enlaces externos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              El Sitio puede incluir enlaces a sitios de terceros. FWstudio no se responsabiliza del contenido, funcionamiento o prácticas de privacidad de dichos sitios, los cuales son ajenos al control del Titular.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              6. Protección de datos personales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              El tratamiento de los datos personales se rige por lo establecido en nuestra{' '}
              <Link href="/privacy" className="text-primary hover:underline font-semibold">
                Política de Privacidad
              </Link>
              , que forma parte integrante de estos Términos de Uso.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              7. Modificaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              FWstudio se reserva el derecho de modificar, actualizar o eliminar en cualquier momento el contenido del Sitio y las presentes condiciones, sin necesidad de previo aviso.
            </p>
            <p>
              La versión vigente estará siempre disponible en esta misma página.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              8. Legislación aplicable y jurisdicción
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Estos Términos de Uso se rigen por las leyes de la República Argentina.
            </p>
            <p>
              Cualquier controversia que surja en relación con el uso del Sitio será sometida a los tribunales competentes de la ciudad de Neuquén, Argentina, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5">
          <CardContent className="pt-6 text-center">
            <p className="text-lg">
              FWstudio agradece tu visita y confianza.
            </p>
            <p className="mt-2">
              Para cualquier duda o reclamo podés escribirnos a{' '}
              <a href="mailto:contacto@fwstudio.com" className="text-primary hover:underline font-semibold">
                contacto@fwstudioagency.com
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/#contact">Contactar con FWstudio</Link>
        </Button>
      </div>
    </div>
  );
}
