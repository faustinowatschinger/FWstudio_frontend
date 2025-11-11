import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Mail, Lock, Eye, Clock, FileText, RefreshCw, CheckCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-headline font-bold tracking-tight mb-4">
          Política de Privacidad
        </h1>
        <p className="text-muted-foreground">
          Última actualización: noviembre 2025
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg">
              En <strong>FWstudio</strong>, nos comprometemos a proteger la privacidad de las personas que visitan nuestro sitio web y confían en nosotros al enviarnos su información. Esta política explica cómo recopilamos, utilizamos y protegemos los datos personales que nos proporcionás.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Mail className="h-5 w-5 text-primary" />
              1. Responsable del tratamiento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-center">
            <p><strong>FWstudio</strong></p>
            <p>Email de contacto: <a href="mailto:contacto@fwstudioagency.com" className="text-primary hover:underline">contacto@fwstudioagency.com</a></p>
            <p>Titular responsable: Faustino Watschinger</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <FileText className="h-5 w-5 text-primary" />
              2. Datos que recopilamos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>A través de nuestro formulario de contacto, recopilamos los siguientes datos personales:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nombre y apellido</li>
              <li>Empresa (opcional)</li>
              <li>Correo electrónico</li>
              <li>Mensaje o descripción de la consulta</li>
            </ul>
            <p>
              Además, de forma automática, pueden recopilarse datos técnicos como dirección IP, navegador o tiempo de visita mediante herramientas analíticas (por ejemplo, Google Analytics), con el único fin de mejorar la experiencia del sitio.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Eye className="h-5 w-5 text-primary" />
              3. Finalidad del tratamiento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>La información recolectada se utiliza exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder consultas o solicitudes de contacto.</li>
              <li>Brindar información sobre nuestros servicios.</li>
              <li>Mantener comunicación comercial relacionada con tu mensaje.</li>
            </ul>
            <p className="font-semibold">
              En ningún caso utilizamos tus datos para envío masivo de publicidad ni los compartimos con terceros sin tu consentimiento previo.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Clock className="h-5 w-5 text-primary" />
              4. Conservación de los datos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              Tus datos serán conservados únicamente el tiempo necesario para cumplir con la finalidad por la cual fueron recabados. Luego serán eliminados de forma segura.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <CheckCircle className="h-5 w-5 text-primary" />
              5. Derechos del usuario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>Podés ejercer en cualquier momento tus derechos de:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acceso, rectificación y actualización de tus datos.</li>
              <li>Eliminación u oposición al tratamiento.</li>
            </ul>
            <p>
              Para hacerlo, escribinos a{' '}
              <a href="mailto:contacto@fwstudioagency.com" className="text-primary hover:underline">
                contacto@fwstudioagency.com
              </a>{' '}
              con el asunto "Protección de datos".
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Lock className="h-5 w-5 text-primary" />
              6. Seguridad de la información
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              FWs   tudio adopta las medidas técnicas y organizativas necesarias para garantizar la confidencialidad, integridad y seguridad de tus datos personales, evitando su pérdida, uso indebido o acceso no autorizado.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Shield className="h-5 w-5 text-primary" />
              7. Servicios de terceros
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              El formulario de contacto puede estar alojado o gestionado mediante servicios externos (como Formcarry o Google reCAPTCHA). Estos servicios cuentan con sus propias políticas de privacidad y cumplen con las normativas internacionales de protección de datos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <RefreshCw className="h-5 w-5 text-primary" />
              8. Cambios en esta política
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a nuevas disposiciones legales o cambios en nuestros procesos. La versión vigente siempre estará disponible en este sitio web.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              9. Aceptación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Al enviar un formulario o navegar en este sitio, el usuario declara haber leído y aceptado esta Política de Privacidad.
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
