interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Ionic",
    description: "Framework preferido para desarrollo móvil híbrido multiplataforma con Angular y TypeScript.",
    icon: "react"
  },
  {
    name: "Angular / Angular SSR",
    description: "Amplia experiencia en desarrollo de SPAs y aplicaciones con renderizado del lado del servidor para mejorar SEO y rendimiento.",
    icon: "angular"
  },
  {
    name: ".NET Web APIs",
    description: "Integración y desarrollo de APIs RESTful para backend robusto y escalable.",
    icon: "donet"
  },
  {
    name: "Cosmos DB / SQL Server / MySQL",
    description: "Manejo de bases de datos NoSQL y relacionales para distintos tipos de aplicaciones.",
    icon: "db"
  },
  {
    name: "Laravel (PHP)",
    description: "Framework backend utilizado para construir APIs y sistemas administrativos con arquitectura sólida y segura.",
    icon: "laravel"
  },
  {
    name: "Firebase",
    description: "Utilizado para autenticación, notificaciones push y base de datos en tiempo real.",
    icon: "firebase"
  },
  {
    name: "Vue.js",
    description: "Uso de Vue en proyectos frontend para interfaces ligeras y reactivas, con Vue Router y Vuex.",
    icon: "vue"
  },
  {
    name: "React / React Native",
    description: "Experiencia en desarrollo web y móvil, con enfoque en UX y rendimiento.",
    icon: "react"
  }
];

export default hardSkills;