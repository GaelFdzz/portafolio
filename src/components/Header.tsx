import { useState, useRef } from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { RadialMenu } from "./RadialMenu"

interface HeaderProps {
    toggleDarkMode: () => void
    darkMode: boolean
}

function Header({ toggleDarkMode, darkMode }: HeaderProps) {
    const [showRadialMenu, setShowRadialMenu] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
    const longPressTimer = useRef<number | null>(null)
    const touchStartPos = useRef({ x: 0, y: 0 })
    const [showHint, setShowHint] = useState(false);

    const navItems = [
        { href: "#inicio", label: "Inicio" },
        { href: "#sobreMi", label: "Sobre mi" },
        { href: "#experiencia", label: "Experiencia" },
        { href: "#estudios", label: "Estudios" },
        { href: "#tecnologias-herramientas", label: "Tecnologías" },
        { href: "#proyectos", label: "Proyectos" },
    ]

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0]
        touchStartPos.current = { x: touch.clientX, y: touch.clientY }

        longPressTimer.current = setTimeout(() => {
            setMenuPosition({ x: touch.clientX, y: touch.clientY })
            setShowRadialMenu(true)
            // Vibración táctil si está disponible
            if (navigator.vibrate) {
                navigator.vibrate(50)
            }
        }, 500) // 500ms para activar el menú
    }

    const handleTouchEnd = () => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
            // Si el menú no se abrió, fue un toque corto
            if (!showRadialMenu) {
                setShowHint(true);
                setTimeout(() => setShowHint(false), 1200); // Oculta el mensaje después de 1.2s
            }
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0]
        const deltaX = Math.abs(touch.clientX - touchStartPos.current.x)
        const deltaY = Math.abs(touch.clientY - touchStartPos.current.y)

        // Si el usuario mueve mucho el dedo, cancelar el long press
        if (deltaX > 10 || deltaY > 10) {
            if (longPressTimer.current) {
                clearTimeout(longPressTimer.current)
                longPressTimer.current = null
            }
        }
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4">
                {/* Navbar para desktop */}
                <nav className="hidden sm:block max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 rounded-full px-6 py-3">
                    <div className="flex items-center justify-between">
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
                        <div className="flex items-center hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:rounded-full px-4 py-2">
                            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-yellow-400 hover:opacity-75">
                                {darkMode ? <Sun /> : <Moon />}
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="sm:hidden fixed bottom-6 right-6 z-50">
                    {/* Botón flotante para abrir el menú radial */}
                    {showHint && (
                        <div className="absolute right-18 bottom-0 bg-black/90 text-white px-3 py-1 rounded-md shadow-xl text-md animate-fade-in">
                            Mantén presionado
                        </div>
                    )}
                    <button
                        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Menú radial */}
                <RadialMenu
                    isOpen={showRadialMenu}
                    position={menuPosition}
                    onClose={() => setShowRadialMenu(false)}
                    navItems={navItems}
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />
            </header>
        </>
    )
}

export default Header
