'use server';

import { z } from 'zod';
import type { ConsultationFormState } from '@/lib/definitions';

const formcarryEndpoint = process.env.FORMCARRY_ENDPOINT ?? 'https://formcarry.com/s/gK7VjYbwh3y';

const consultationSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'El nombre de la empresa debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce una dirección de correo electrónico válida.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export async function submitConsultationForm(
  prevState: ConsultationFormState,
  formData: FormData
): Promise<ConsultationFormState> {
  const validatedFields = consultationSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrige los errores e inténtalo de nuevo.',
      success: false,
    };
  }
  
  if (!formcarryEndpoint) {
    console.error('La variable FORMCARRY_ENDPOINT no está configurada.');
    return {
      message: 'El servicio de formularios no está disponible por el momento. Inténtalo más tarde.',
      success: false,
    };
  }

  try {
    const response = await fetch(formcarryEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => null);
      console.error('Formcarry respondió con un error:', errorPayload);
      return {
        message: 'No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente en unos minutos.',
        success: false,
      };
    }

    console.info('Solicitud de consulta enviada correctamente a Formcarry.');
  } catch (error) {
    console.error('Error al enviar la solicitud a Formcarry:', error);
    return {
      message: 'Ocurrió un problema al enviar la solicitud. Inténtalo nuevamente más tarde.',
      success: false,
    };
  }

  return {
    message: '¡Gracias! Tu solicitud de consulta ha sido enviada con éxito.',
    success: true,
  };
}
