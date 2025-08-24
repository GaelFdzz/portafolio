import {
    Code2,
    Server,
    Database,
    Wrench,
    Zap,
    Globe,
    FileCode,
    Palette,
    Box,
    GitBranch,
    TestTube,
    Send,
    Code
} from "lucide-react"
import SpotlightCard from "../animations/SpotlightCard"

// Definir el tipo para las tecnologías
interface Technology {
    name: string;
    icon: React.ReactNode;
}

// Definir el tipo para las props del componente TechList
interface TechListProps {
    techs: Technology[];
}

const Technologies = () => {
    const frontendTechs: Technology[] = [
        { name: "React.js", icon: <Code2 className="w-4 h-4" /> },
        { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
        { name: "TypeScript", icon: <FileCode className="w-4 h-4" /> },
        { name: "JavaScript (ES6+)", icon: <Zap className="w-4 h-4" /> },
        { name: "HTML5 & CSS3", icon: <Code className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> },
        { name: "Chakra UI", icon: <Box className="w-4 h-4" /> }
    ]

    const backendTechs: Technology[] = [
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Zap className="w-4 h-4" /> },
        { name: "Python", icon: <Code2 className="w-4 h-4" /> },
        { name: "Django", icon: <Server className="w-4 h-4" /> },
        { name: "Flask", icon: <Server className="w-4 h-4" /> },
        { name: "RESTful APIs", icon: <Globe className="w-4 h-4" /> },
        { name: "GraphQL", icon: <Database className="w-4 h-4" /> }
    ]

    const databaseTechs: Technology[] = [
        { name: "MySQL", icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "SQLite", icon: <Database className="w-4 h-4" /> },
        { name: "Firebase", icon: <Zap className="w-4 h-4" /> }
    ]

    const toolsTechs: Technology[] = [
        { name: "Git & GitHub", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Docker", icon: <Box className="w-4 h-4" /> },
        { name: "Jest", icon: <TestTube className="w-4 h-4" /> },
        { name: "Postman", icon: <Send className="w-4 h-4" /> },
        { name: "Visual Studio Code", icon: <Code className="w-4 h-4" /> }
    ]

    const TechList: React.FC<TechListProps> = ({ techs }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {techs.map((tech: Technology, index: number) => (
                <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                        {tech.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
    )

    return (
        <section className="flex flex-col items-center justify-center min-h-[50dvh] px-6 py-12 dark:text-white">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-3xl sm:text-5xl font-bold bg">
                        Habilidades Técnicas
                    </h2>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Tecnologías y herramientas que uso para crear soluciones completas
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
                <SpotlightCard className="custom-spotlight-card p-6" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div className="flex items-center gap-3 mb-6">
                        <Code2 className="w-8 h-8 text-cyan-400" />
                        <h3 className="text-xl font-bold text-white">Frontend</h3>
                    </div>
                    <TechList techs={frontendTechs} />
                </SpotlightCard>

                <SpotlightCard className="custom-spotlight-card p-6" spotlightColor="rgba(255, 0, 229, 0.2)">
                    <div className="flex items-center gap-3 mb-6">
                        <Server className="w-8 h-8 text-pink-400" />
                        <h3 className="text-xl font-bold text-white">Backend</h3>
                    </div>
                    <TechList techs={backendTechs} />
                </SpotlightCard>

                <SpotlightCard className="custom-spotlight-card p-6" spotlightColor="rgba(0, 255, 42, 0.2)">
                    <div className="flex items-center gap-3 mb-6">
                        <Database className="w-8 h-8 text-green-400" />
                        <h3 className="text-xl font-bold text-white">Bases de Datos</h3>
                    </div>
                    <TechList techs={databaseTechs} />
                </SpotlightCard>

                <SpotlightCard className="custom-spotlight-card p-6" spotlightColor="rgba(255, 165, 0, 0.2)">
                    <div className="flex items-center gap-3 mb-6">
                        <Wrench className="w-8 h-8 text-orange-400" />
                        <h3 className="text-xl font-bold text-white">Herramientas</h3>
                    </div>
                    <TechList techs={toolsTechs} />
                </SpotlightCard>
            </div>
        </section>
    )
}

export default Technologies