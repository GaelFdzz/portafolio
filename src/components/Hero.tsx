import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Linkedin, Mail, Phone } from "lucide-react";

gsap.registerPlugin(SplitText)

function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            let split = SplitText.create(heroRef.current, { type: "words" });
            gsap.from(split.words, {
                duration: 0.5,
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, [])

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8 gap-8 dark:text-white sm:flex-row sm:justify-evenly sm:items-center">
            {/* Imagen de perfil */}
            <div>
                <img
                    className="w-48 h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg object-top shadow-blue-500/50 sm:w-84 sm:h-84"
                    src="gigachad.jpg"
                    alt="Imagen de perfil del hero"
                />
            </div>

            {/* Datos personales */}
            <div ref={heroRef}>
                <h1 className="text-5xl font-bold text-center mt-10">
                    <span className="text-black dark:text-white">Hola, soy</span>{" "}
                    <span className="text-blue-600">Ian Gael Fernandez Andrade</span>
                </h1>
                <p className="text-2xl text-center text-gray-700 mt-4 dark:text-yellow-600">
                    Estudiante en Desarrollo de Software.
                </p>
            </div>

            {/* Formas de contacto */}
            <div className="grid grid-cols-1 gap-4 items-center text-center w-40">
                <p className="text-2xl ">Contactame</p>
                <div className="flex justify-between">
                    <Mail size={40} />
                    <Phone size={40} />
                    <Linkedin size={40} />
                </div>
                <button className=" rounded-md bg-indigo-800 p-1 hover:bg-indigo-800/55">Descargar CV</button>
            </div>
        </section>
    );
}

export default Hero;