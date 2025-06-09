function Hero(){
    return(
        // Hero componente donde pongo mis datos de presentacion
        <section>
            <div>
                <h1 className="text-4xl font-bold text-center mt-10">
                    <span className="text-black dark:text-white">Hola, soy</span> <span className="text-blue-500">Gael Fernandez</span>
                </h1>
                <p className="text-center text-gray-600 mt-4 dark:text-white/60">
                    Estudiante en Desarrollo de Software.
                </p>
                <div className="flex justify-center mt-6">
                    <a href="#contacto" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                        Contactame
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero