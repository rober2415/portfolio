import { Injectable } from '@angular/core';

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  tasks: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: 1,
      role: 'SysAdmin',
      company: 'Acrelec',
      startDate: new Date('2023-01-02'),
      endDate: new Date('2024-12-31'),
      tasks: [
        'Reduje los tiempos de configuración de los equipos al crear un entorno WinPE para ejecutar las actualizaciones  automatizadas con más rapidez, logrando puestas en marcha más ágiles y un estándar en la configuración de los equipos.',
        'Mantuve la operativa de los usuarios sin interrupciones prolongadas al gestionar y resolver incidencias priorizando por impacto, logrando que los problemas se solucionaran de raíz con rapidez.',
        'Resolví incidencias al ofrecer soporte remoto, logrando una atención más ágil y menos paradas para los usuarios.',
      ],
    },
    {
      id: 2,
      role: 'IT Project Manager',
      company: 'Acrelec',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2026-09-30'),
      tasks: [
        'Logré que los proyectos de software y hardware se entregaran alineados con los objetivos del negocio al planificarlos con metodologías ágiles y seguimiento continuo en Asana, lo que dio al equipo prioridades claras y entregas más previsibles.',
        'Minimicé los riesgos y las paradas de servicio en producción al coordinar y ejecutar actualizaciones y despliegues con validación previa y plan de contingencia, logrando puestas en marcha seguras y sin interrumpir la operación.',
        'Reduje la dependencia de conocimiento individual dentro del equipo al estandarizar la documentación técnica en Confluence, de modo que cualquier persona pudiera consultar y reproducir los procedimientos sin ayuda',
        'Aceleré el ritmo de trabajo del equipo al revisar y mejorar de forma continua sus flujos de trabajo, eliminando fricciones y trabajo duplicado.',
      ],
    },
    {
      id: 3,
      role: 'Software Developer',
      company: 'KTP Consulting',
      startDate: new Date('2026-10-01'),
      tasks: [
        'Transformé las necesidades del cliente al desarrollar e integrar nuevas funcionalidades a medida, mejorando la satisfacción del usuario y valor del producto.',
        'Aseguré la estabilidad y evolución de las aplicaciones al desarrollar y mantener soluciones, adaptadas a las necesidades del negocio.',
        'Reforcé la seguridad y robustez del software mediante la identificación y corrección de vulnerabilidades críticas, reduciendo riesgos y protegiendo la integridad de los datos.',
        'Mejoré la mantenibilidad mediante la refactorización del código base, para mejorar su legibilidad, mantenibilidad y escalabilidad.',
      ],
    },
  ];

  getExperiences() {
    return [...this.experiences].sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime(),
    );
  }
}
