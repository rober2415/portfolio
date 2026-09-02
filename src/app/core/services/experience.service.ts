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
      role: 'IT Project Manager',
      company: 'Acrelec Informática Group',
      startDate: new Date('2024-01-01'),
      tasks: [
        'Gestión de proyectos IT, planificación, seguimiento y entrega de proyectos de software y hardware, alineados con los objetivos.',
        'Coordinación y ejecución segura de actualizaciones de software y despliegues de aplicaciones en entornos de producción, minimizando riesgos y tiempos de inactividad.',
        'Mejora continua en los flujos de trabajo del equipo y estandarización de la documentación técnica.',
      ],
    },
    {
      id: 2,
      role: 'Técnico de Sistemas',
      company: 'Acrelec Informática Group',
      startDate: new Date('2023-01-02'),
      endDate: new Date('2024-12-31'),
      tasks: [
        'Administración y configuración de equipos.',
        'Soporte remoto.',
        'Gestión y resolución de incidencias.',
      ],
    },
  ];
  constructor() {}

  getExperiences() {
    return [...this.experiences].sort(
      (a, b) => b.startDate.getTime() - a.startDate.getTime(),
    );
  }
}
