export type Project = {
  id: string;
  title: string;
  description: string;
  image: string; // nombre de archivo dentro de public/images/projects/
  imageHint?: string;
  technologies: string[];
  problema?: string;
  solucion?: string;
  resultado?: string;
};

export const projects: Project[] = [
  {
    id: 'proyecto-1',
    title: '3W Sistema de monitorio para frigoríficos',
    description:
      `3W realizaba mantenimientos en plantas frigoríficas, pero días después algunos clientes reclamaban fallas en los equipos y la empresa no tenía cómo demostrar que, al retirarse, todo funcionaba correctamente.
Ese problema de falta de trazabilidad y evidencia técnica generaba discusiones y pérdida de confianza.`,
    image: '/grafica1.png',
    imageHint: '3W PLC',
    technologies: ['Expo', 'Express', 'MongoDB', 'Raspberry Pi'],
    problema: `3W ofrecía servicios de mantenimiento y calibración en plantas frigoríficas. Al terminar cada trabajo todo quedaba correcto, pero días después algunos encargados reclamaban supuestos errores en las temperaturas o parámetros.
El problema era simple y costoso: no había evidencia técnica que demostrara que, al retirarse, el sistema funcionaba bien. Sin registros históricos, la palabra del técnico y la del cliente valían lo mismo.`,
    solucion: `FWstudio desarrolló junto a 3W un sistema de monitoreo y trazabilidad de datos que registra, guarda y muestra en tiempo real lo que sucede en cada cámara o túnel.

Una Raspberry Pi instalada en cada frigorífico se conecta al SCADA existente y captura variables como temperatura, humedad, oxígeno y presión.
Los datos se almacenan localmente y se sincronizan automáticamente con una base de datos MongoDB en un servidor seguro.
Mediante una API REST, la información llega a una app móvil y de escritorio construida en React Native, desde donde tanto el equipo de 3W como los encargados de los frigoríficos pueden:

Ver gráficas e históricos por cámara o planta.

Exportar reportes en PDF para auditorías o clientes.

Consultar remotamente varias plantas desde un único panel.`,
    resultado: `Evidencia inmediata: 3W ahora puede mostrar exactamente cómo quedaron los valores al finalizar cada servicio.

Confianza recuperada: los encargados visualizan los mismos datos, evitando reclamos y malentendidos.

Trazabilidad completa: todos los registros quedan guardados y auditables.

Ahorro operativo: menos visitas presenciales y seguimiento más ágil.

Escalabilidad: el sistema se replica fácilmente en nuevos frigoríficos.`,
  },
  {
    id: 'proyecto-2',
    title: 'Sistema de gestión de cobros y pagos',
    description:
      `El administrador de un barrio privado manejaba toda la contabilidad en Excel y papeles, lo que generó un caos de archivos, datos duplicados y deudas impagas.
Con el tiempo, ya no sabía quién debía, cuánto, ni tenía forma de demostrarlo ante los vecinos. La falta de control le hizo perder dinero y confianza.`,
    image: '/registroCobros.png',
    imageHint: 'Sistema de gestión de cobros y pagos',
    technologies: ['Python'],
    problema: `El administrador de un barrio privado manejaba toda la contabilidad con Excel y papeles: cobros, pagos, liquidaciones, gastos de luz y mantenimiento.
Con el paso del tiempo, la cantidad de archivos y planillas creció tanto que ya no podía saber con precisión quién debía, cuánto debía ni cuándo debía cobrar.
Los vecinos se aprovechaban de esa falta de control, generando deudas importantes y desconfianza.
Además, el administrador se había comprometido a entregar informes mensuales sobre el uso del dinero común, pero hacerlo manualmente era imposible: le tomaba horas y seguía sin tener claridad.`,
    solucion: `FWstudio desarrolló un software de escritorio a medida en Python que centraliza toda la gestión económica del barrio.

El sistema permite:

Registrar cobros, pagos, liquidaciones y clientes.

Calcular deudas y saldos automáticamente, según las operaciones cargadas.

Generar recibos y reportes mensuales listos para entregar a cada vecino.

Exportar e importar datos desde Excel, manteniendo compatibilidad con los registros antiguos.

Organizar toda la información en un entorno único, rápido y seguro, eliminando el riesgo de pérdida de datos o errores de fórmula.`,
    resultado: `Control total de la contabilidad: el administrador sabe exactamente quién debe, cuánto y desde cuándo.

Mayor transparencia: los vecinos reciben informes claros y verificables.

Ahorro de tiempo: las tareas que antes llevaban horas ahora se resuelven en minutos.

Recupero económico: al tener respaldo de datos, pudo reclamar y cobrar deudas pendientes.

Orden y tranquilidad: dejó atrás el caos de papeles y planillas para trabajar con un sistema simple y confiable.`,
  },
];