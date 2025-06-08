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
                loopDelay: 800
            })
        })
    }, [])
    return (
        <div ref={root}>
            {/* Poner al centro de la pantalla */}
            <h1 className="flex text-6xl font-bold text-white">
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