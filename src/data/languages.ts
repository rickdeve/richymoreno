interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "Hablo y escribo con fluidez",
        show: true
    },
    {
        name: "Inglés",
        level: "Básico",
        description: "lectura técnica fluida, conversación básica",
        show: true
    }
];

export default languages;