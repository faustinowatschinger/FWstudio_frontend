# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Formcarry integration

1. Crea un formulario en [Formcarry](https://formcarry.com/docs) y copia el endpoint público (formato `https://formcarry.com/s/<FORM_ID>`). El proyecto ya incluye como valor por defecto `https://formcarry.com/s/gK7VjYbwh3y`.
2. (Opcional) Define la variable de entorno `FORMCARRY_ENDPOINT` para reemplazar el endpoint por otro distinto en tu entorno de ejecución (por ejemplo, en `.env` o en la configuración del hosting).
3. Despliega la aplicación. El formulario "Agenda una Consulta" usará ese endpoint para enviar los datos y Formcarry notificará por correo.
