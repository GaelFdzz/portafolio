import { Zap } from "lucide-react"


function SobreMi() {

    return (
        <section className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-black dark:text-white font-bold">Sobre Mí</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mt-6 mb-6 border border-blue-500/30">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">
                    Estudiante de Ingeniería en Desarrollo de Software
                </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto px-4 py-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus eligendi, fugit et non libero consequatur? Harum doloribus magni fugit, libero sunt accusantium reiciendis maiores ut, recusandae ducimus in tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus eligendi, fugit et non libero consequatur? Harum doloribus magni fugit, libero sunt accusantium reiciendis maiores ut, recusandae ducimus in tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus eligendi, fugit et non libero consequatur? Harum doloribus magni fugit, libero sunt accusantium reiciendis maiores ut, recusandae ducimus in tenetur.
            </p>
        </section>
    )
}

export default SobreMi