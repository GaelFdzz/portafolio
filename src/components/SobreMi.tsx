import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

function SobreMi() {
    const sobreMiRef = useRef<HTMLDivElement>(null)
    const sobreMiTextRef = useRef<HTMLDivElement>(null)

    gsap.to(sobreMiRef.current, {
        scrollTrigger: {
            trigger: sobreMiRef.current,
            start: "-180px 80%",
            end: "bottom 100px",
            toggleActions: "restart none none none",
            markers: true
        },
        x: 100,
        duration: 2
    })

    // split all elements with the class "split" into words and characters
    let split = SplitText.create(sobreMiTextRef.current, { type: "lines" });

    // now animate the characters in a staggered fashion
    gsap.from(split.lines, {
        scrollTrigger:{
            trigger: sobreMiTextRef.current,
            start: "top 80%",
            end: "bottom 100px",
            toggleActions: "restart none none none",
            markers: true
        },
        ease: "power2.out",
        duration: 1,
        y: 100,         // animate from 100px below
        autoAlpha: 0,   // fade in from opacity: 0 and visibility: hidden
        stagger: 0.05,  // 0.05 seconds between each
    });

    return (
        <section className="flex flex-col items-center justify-center">
            <h2 ref={sobreMiRef} className="text-3xl text-white font-bold">Sobre Mí</h2>
            <p ref={sobreMiTextRef} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto px-4 py-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus eligendi, fugit et non libero consequatur? Harum doloribus magni fugit, libero sunt accusantium reiciendis maiores ut, recusandae ducimus in tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus eligendi, fugit et non libero consequatur? Harum doloribus magni fugit, libero sunt accusantium reiciendis maiores ut, recusandae ducimus in tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus eligendi, fugit et non libero consequatur? Harum doloribus magni fugit, libero sunt accusantium reiciendis maiores ut, recusandae ducimus in tenetur.
            </p>
        </section>
    )
}

export default SobreMi