import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  code: string;
  preview: string;
  image: string;
}

export interface Tag {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'surl',
      title: 'SURL - URL Shortener',
      description:
        'Desarrollé la aplicación para resolver el problema de la gestión e interacciónn con enlaces largos, buscando ofrecer una herramienta rápida, ligera y escalable. La aplicación fue construida con Angular, haciendo uso de módulos y lazy loading para mejorar el rendimiento del cliente. Por su parte, la comunicación con el backend cuenta con protección de rutas y autenticación mediante Laravel Sanctum.',
      tags: [
        { name: 'Angular', icon: 'assets/img/angular.svg' },
        { name: 'Laravel', icon: 'assets/img/laravel.svg' },
        { name: 'PostgreSQL', icon: 'assets/img/postgresql.svg' },
      ],
      code: 'https://github.com/rober2415/short-url',
      preview: 'https://surlrca.vercel.app',
      image: 'assets/img/surl-preview.png',
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }
}
