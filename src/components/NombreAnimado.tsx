import { animate, createScope, utils, Scope } from "animejs"
import { useRef, useEffect } from "react"

export function NombreAnimado() {
    const root = useRef(null)
    const scope = useRef(null as Scope | null)

    useEffect(() => {
        scope.current = createScope({ root }).add(() => {
            const $letra = utils.$("span")

            animate($letra, {
                y: [
                    { to: "-0.5rem", ease: "outExpo", duration: 100 },
                    { to: 0, ease: "outBounce", duration: 700, delay: 0 },
                ],
                delay: (_, i) => i * 10,
                loop: true,
                loopDelay: 1500
            })
        })
    }, [])
    return (
        <div ref={root} className="flex items-center justify-center h-screen">
            {/* Poner al centro de la pantalla */}
            <h1 className="flex font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-all duration-200">
                <span>G</span>
                <span>A</span>
                <span>E</span>
                <span>L</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>E</span>
                <span>R</span>
                <span>N</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>E</span>
                <span>Z</span>
            </h1>
        </div>
    )
}

export default NombreAnimado