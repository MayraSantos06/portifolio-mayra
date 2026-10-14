export type Project = {
  id: number
  title: string
  description: string
  category: 'Web' | 'Aplicações' | 'Acadêmicos'
  technologies: string[]
  image: string
  githubUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Meu primeiro projeto',
    description: 'Descrição das funcionalidades do projeto.',
    category: 'Web',
    technologies: ['React', 'TypeScript', 'CSS'],
    image: '/images/projeto.png',
    githubUrl: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Projeto acadêmico',
    description: 'Projeto desenvolvido durante a graduação.',
    category: 'Acadêmicos',
    technologies: ['Java', 'Programação'],
    image: '/images/projeto-academico.png',
    githubUrl: 'https://github.com/',
  },
]
