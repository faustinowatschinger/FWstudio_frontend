'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitConsultationForm } from '@/app/actions';
import type { ConsultationFormState } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Enviando...' : 'Enviar Solicitud'}
    </Button>
  );
}

export function ConsultationForm() {
  const initialState: ConsultationFormState = undefined;
  const [state, dispatch] = useActionState(submitConsultationForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: '¡Éxito!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" name="name" placeholder="Tu Nombre" required />
          {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input id="company" name="company" placeholder="Tu Empresa" required />
          {state?.errors?.company && <p className="text-sm text-destructive">{state.errors.company[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
        {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">¿Cómo podemos ayudar?</Label>
        <Textarea id="message" name="message" placeholder="Cuéntanos sobre tus desafíos..." required />
        {state?.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}

export function Consultation() {
    return (
        <section id="contact" className="w-full py-20 md:py-32 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-xl">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-headline font-bold">Agenda una Consulta Gratuita</CardTitle>
                            <CardDescription>
                                Discutamos tus desafíos y cómo podemos ayudarte a alcanzar tus metas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ConsultationForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
