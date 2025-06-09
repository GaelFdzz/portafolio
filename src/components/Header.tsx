import { Moon, Sun } from "lucide-react"

interface HeaderProps {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

function Header({ toggleDarkMode, darkMode }: HeaderProps) {
    const navItems = [
        { href: "#inicio", label: "Inicio" },
        { href: "#sobreMi", label: "Sobre mi" },
        { href: "#experiencia", label: "Expreriencia" },
        { href: "#estudios", label: "Estudios" },
        { href: "#tecnologias-herramientas", label: "Tecnologias" },
        { href: "#proyectos", label: "Proyectos" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
            <nav className="max-w-4xl mx-auto transition-all duration-500 ease-out bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 rounded-full px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold bg-gradient-to-b from-blue-500 to-blue-900 bg-clip-text text-transparent">
                        Portafolio
                    </div>
                    <div>
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    {/* Dark/light mode button*/}
                    <div className="flex items-center">
                        <button onClick={toggleDarkMode} className="text-gray-800 dark:text-yellow-400 hover:opacity-75">
                            {darkMode ? <Sun /> : <Moon />}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header