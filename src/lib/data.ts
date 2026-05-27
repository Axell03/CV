export const data = {
  name: 'Axell Baez',
  role: 'Full Stack Developer',
  tagline: 'Building scalable systems,\ninternal platforms & cloud-ready apps.',
  description:
    'Desarrollador Full Stack especializado en aplicaciones empresariales, automatización e infraestructura web. Experiencia real con React, Node.js, PostgreSQL, Docker, CI/CD y despliegues productivos. En ruta activa hacia Cloud Engineering con Azure.',
  location: 'Santo Domingo, RD',
  github: 'https://github.com/Axell03',
  linkedin: 'www.linkedin.com/in/axell-baez-aba559258',
  email: 'axellbaez@gmail.com', 

  stats: [
    { value: '2+',   label: 'Años de experiencia profesional' },
    { value: '5+',   label: 'Sistemas internos en producción' },
    { value: 'Cloud', label: 'Azure Learning Path activo' },
    { value: 'CI/CD', label: 'Docker · PM2 · Cloudflare' },
  ],

  about: [
    'Soy un desarrollador Full Stack con base en <strong>Santo Domingo, República Dominicana</strong>, con experiencia construyendo aplicaciones web robustas y escalables para entornos empresariales reales.',
    'Me especializo en el stack <strong>React + Node.js + PostgreSQL</strong>, con experiencia en despliegues con Docker, pipelines CI/CD y servicios cloud. Actualmente en transición activa hacia roles de <strong>Cloud Engineer / DevOps</strong>, certificándome en Azure.',
    'Disfruto los equipos con cultura de mejora continua, los problemas que requieren pensar en escala, y siempre busco la siguiente versión de mí mismo como profesional.',
  ],

  aboutCards: [
    { value: '2+', label: 'Años de experiencia profesional' },
    { value: 'RD',  label: 'Santo Domingo · Open to remote' },
    { value: '☁',  label: 'Transición activa a Cloud / DevOps' },
    { value: 'AZ',  label: 'Ruta de certificación Azure' },
  ],

  specialties: [
    {
      icon: '⬡',
      title: 'Frontend Development',
      body: 'Interfaces rápidas y funcionales con React, TailwindCSS y PrimeReact. Enfoque en rendimiento, UX y componentes reutilizables que escalan con el producto.',
    },
    {
      icon: '◈',
      title: 'Backend & APIs',
      body: 'APIs REST sólidas con Node.js + Express, modelado de bases de datos relacionales con PostgreSQL y MongoDB. Arquitecturas pensadas para crecer.',
    },
    {
      icon: '◻',
      title: 'Infraestructura & DevOps',
      body: 'Despliegues con Docker, pipelines CI/CD, gestión de procesos con PM2 y configuración de DNS/CDN con Cloudflare. Deploy desde cero a producción.',
    },
    {
      icon: '△',
      title: 'Cloud Engineering (en curso)',
      body: 'Ruta de certificación activa en Azure: AZ-900, AZ-104, AZ-204 y SC-900. Aplicando prácticas cloud en proyectos personales mientras avanzo en la ruta.',
    },
  ],

  projects: [
    {
      name: 'Optic-d',
      description: 'Plataforma digital para óptica construida desde cero. Arquitectura completa: backend, frontend, base de datos y deploy en producción con Cloudflare.',
      status: 'live' as const,
      statusLabel: 'Live',
      url: 'https://www.optic-d.com/home',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Vercel', 'Stripe', 'Godaddy'],
      accentColor: '#7b6ef6',
    },
    {
      name: 'HDCO Group',
      description: 'Sistemas internos empresariales: módulos de gestión, automatizaciones y dashboards en producción. Entorno privado — no linkeable.',
      status: 'live' as const,
      statusLabel: 'Producción',
      url: null,
      tech: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'PM2'],
      accentColor: '#1db87a',
    },
    {
      name: 'Movi-R',
      description: 'Sitio web corporativo para empresa de tecnología estratégica. Instalación, configuración completa, gestión de plugins, administración activa de accesos y actualización de políticas en producción.',
      status: 'live' as const,
      statusLabel: 'Live · Administrado',
      url: 'https://movi-r.com/',
      tech: ['WordPress', 'cPanel', 'GoDaddy', 'Cloudflare'],
      accentColor: '#f97316',
    },
    {
      name: 'Movi-Club',
      description: 'Plataforma todo en uno para empresas de red de transporte y taxi. Solución tecnológica completa: instalación, configuración, plugins y administración activa en producción.',
      status: 'live' as const,
      statusLabel: 'Live · Administrado',
      url: 'https://movi-club.com',
      tech: ['WordPress', 'cPanel', 'GoDaddy', 'Cloudflare'],
      accentColor: '#0ea5e9',
    },
    {
      name: 'Proyecto Cloud',
      description: 'Proyecto personal de infraestructura en Azure como parte de la ruta de certificación. CI/CD, contenedores y monitoreo en la nube.',
      status: 'wip' as const,
      statusLabel: 'En desarrollo',
      url: null,
      tech: ['Azure', 'Docker', 'CI/CD', 'Node.js'],
      accentColor: '#7b6ef6',
    },
  ],

  experience: [
    {
      company: 'HDCO Group',
      role: 'Full Stack Developer',
      period: '2024 — Presente',
      current: true,
      description: 'Desarrollo y mantenimiento de sistemas internos empresariales. Construcción de módulos de gestión, dashboards de monitoreo y automatizaciones de procesos. Implementación de pipelines CI/CD y gestión de procesos con PM2 en entornos productivos.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'PrimeReact', 'Docker', 'CI/CD', 'PM2'],
      impact: [
        { value: '5+', label: 'Módulos internos entregados en producción' },
        { value: 'CI/CD', label: 'Pipelines implementados desde cero' },
      ],
    },
    {
      company: 'MercaSID',
      role: 'Full Stack Developer — Pasantía',
      period: '2023 — 2024',
      current: false,
      description: 'Participación en el ciclo completo de desarrollo: diseño de APIs REST, integración con base de datos y construcción de interfaces con React. Primera experiencia en entorno empresarial real.',
      tags: ['React', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
      impact: [],
    },
  ],

  certifications: [
    { code: 'AZ\n900', name: 'Azure Fundamentals',              issuer: 'Microsoft · AZ-900', status: 'wip' as const,  statusLabel: 'En progreso' },
    { code: 'AZ\n104', name: 'Azure Administrator Associate',   issuer: 'Microsoft · AZ-104', status: 'wip' as const,  statusLabel: 'Próximo' },
    { code: 'AZ\n204', name: 'Azure Developer Associate',       issuer: 'Microsoft · AZ-204', status: 'wip' as const,  statusLabel: 'En ruta' },
    { code: 'SC\n900', name: 'Security, Compliance & Identity', issuer: 'Microsoft · SC-900', status: 'wip' as const,  statusLabel: 'En ruta' },
  ],
}