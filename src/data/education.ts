interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "TecNM - Campus Colima",
        startDate: "2013-01-02",
        endDate: "2018-12-12",
        school: "Instituto Tecnológico De Colima",
        location: "Colima, México",
        description: "ingenieria en sistemas computacionales con enfoque en desarrollo de software, bases de datos y tecnologías emergentes.",
        currentUni: false,
    }
];

export default education;