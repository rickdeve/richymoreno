/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Scrum Master - daltonseminuevos.com",
        startDate: "2023-08-10",
        company: "",
        location: "México",
        description: "Lideré equipos de desarrollo, gestionando sprints y facilitando la comunicación para la entrega de valor en cada iteración. Coordiné el soporte de páginas web de la división automotriz.",
        goals: [
            "Angular, Angular SSR, .NET Web APIs, Cosmos DB, SQL Server, Azure Logic Apps.",
        ],
        currentJob: true,
    },
    {
        title: "Líder Técnico - daltonseminuevos.com",
        startDate: "2022-07-10",
        endDate: "2023-07-10",
        company: "",
        location: "México",
        description: "Supervisé el desarrollo de la plataforma e-commerce, mejorando rendimiento y experiencia de usuario. Coordiné la integración de nuevas funcionalidades y optimización de procesos.",
        goals: [
            "Angular, Angular SSR, .NET Web APIs, Cosmos DB, SQL Server, Azure Logic Apps.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Full Stack - daltonseminuevos.com",
        startDate: "2021-03-10",
        endDate: "2022-06-10",
        company: "",
        location: "México",
        description: "Desarrollé un sistema de filtros y catálogo de autos, integrando Web APIs y Cosmos DB para optimizar la gestión de inventarios. Mejoré el SEO y la experiencia de usuario.",
        goals: [
            "Angular, Angular SSR, .NET Web APIs, Cosmos DB, SQL Server, Azure Logic Apps.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Full Stack - FarmaApp (Freelancer)",
        startDate: "2021-01-10",
        endDate: "2021-02-10",
        company: "",
        location: "México",
        description: "Desarrollé un sistema de control de inventario farmacéutico con administración de usuarios, roles y permisos.",
        goals: [
            "PHP, Laravel, MySQL, Angular.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Full Stack (Web/Móvil) - Dental App",
        startDate: "2020-08-10",
        endDate: "2021-02-10",
        company: "",
        location: "México",
        description: "Desarrollé una plataforma web y móvil para la gestión de clínicas dentales, incluyendo pagos y notificaciones push.",
        goals: [
            "PHP, Laravel, MySQL (web) | Ionic, TypeScript, Laravel, MySQL (móvil).",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Web - DOMENE (Soporte y Mantenimiento)",
        startDate: "2020-04-10",
        endDate: "2020-07-10",
        company: "",
        location: "México",
        description: "Optimicé y mantuve un sistema educativo, mejorando la interfaz y la experiencia del usuario. Implementé nuevas funcionalidades y corregí errores.",
        goals: [
            "PHP, Laravel, MySQL, jQuery, JavaScript, Bootstrap.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Móvil - LUPACAN (Soporte y Mantenimiento)",
        startDate: "2020-01-10",
        endDate: "2020-03-10",
        company: "",
        location: "México",
        description: "Di soporte a una app móvil en Ionic para LupaCan, integrando APIs, geolocalización y notificaciones push para mejorar funcionalidad y experiencia de usuario.",
        goals: [
            "Ionic, TypeScript, PHP, Laravel, SCSS, MySQL.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Web - Colima es Colima (Freelancer)",
        startDate: "2020-01-10",
        endDate: "2020-04-10",
        company: "",
        location: "México",
        description: "Digitalicé una revista impresa a una plataforma web interactiva. Desarrollé un sistema de gestión de usuarios y roles, mejorando la administración del contenido.",
        goals: [
            "Vue, Laravel, MySQL.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Full Stack (Web/Móvil) - Colimotl Food",
        startDate: "2019-10-01",
        endDate: "2019-12-06",
        company: "",
        location: "México",
        description: "Desarrollé una aplicación de pedidos de comida a domicilio con pasarela de pago. ",
        goals: [
            "React Native, Expo, PHP, Laravel, MySQL, Firebase.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Full Stack - Pido Taxi",
        startDate: "2019-06-06",
        endDate: "2019-09-31",
        company: "",
        location: "México",
        description: "Desarrollé una app móvil para solicitud y reserva de viajes, integrando pagos y servicios de mapas. En tiempo real, gestioné la ubicación de los usuarios y conductores.",
        goals: [
            "Ionic, TypeScript, PHP, Laravel, SCSS, MySQL, Google Maps, Firebase.",
        ],
        currentJob: false,
    },
    {
        title: "Desarrollador Web - Pizza Happy (Freelance)",
        startDate: "2018-02-01",
        endDate: "2018-12-31",
        company: "",
        location: "México",
        description: "Desarrollé un sistema de punto de venta con gestión de inventarios, pagos,reportes, y administración de usuarios. y gestion de las pizzas para la venta.",
        goals: [
            "PHP, Laravel, HTML, Bootstrap, jQuery, MySQL.",
        ],
        currentJob: false,
    },
];
export default workExperience;