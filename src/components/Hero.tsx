import { Calendar, Download, MapPin } from "lucide-react";
import SplitText from "../animations/SplitText";
import DarkVeil from "../animations/background/DarkVeil";
import GlareHover from "../animations/GlareHover";
import ProfileCard from "../animations/ProfileCard";
import ShinyText from "../animations/ShinyText";

function Hero() {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 py-8 sm:py-12 lg:py-0 dark:text-white">
            {/* Dark Veil de fondo */}
            <div className="absolute inset-0 z-0">
                <DarkVeil
                    hueShift={14}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={1}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            {/* Imagen de perfil */}
            <div className="z-10 flex-shrink-0 order-1 lg:order-1">
                <div className="lg:mr-24 mx-auto">
                    <ProfileCard
                        name="Ian Gael Fernandez Andrade"
                        title="Ingeniero en Software"
                        handle="gaelfdzz"
                        status="Disponible"
                        contactText="Contactame"
                        avatarUrl="/fotoAvatar.png"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                    />
                </div>
            </div>

            {/* Texto y datos */}
            <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl order-2 lg:order-2 space-y-4 sm:space-y-6">

                {/* Estado disponible */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Disponible para trabajar</span>
                </div>

                {/* Título principal */}
                <div className="space-y-2">
                    <div className="font-bold leading-tight">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            <SplitText
                                className="text-gray-300"
                                text="👋 ¡Hola!, soy"
                                splitType="words"
                                lineHeight="1.2"
                            />
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                            <SplitText
                                className="text-blue-600"
                                text="Ian Gael"
                                splitType="words"
                                lineHeight="1.2"
                            />
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                            <SplitText
                                className="text-blue-600"
                                text="Fernandez Andrade"
                                splitType="words"
                                lineHeight="1.2"
                            />
                        </div>
                    </div>

                    <SplitText
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400"
                        text="Desarrollador Full Stack"
                        splitType="lines"
                    />
                </div>

                {/* Información de ubicación */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="flex-shrink-0" />
                        <span>Cancún, Quintana Roo</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="flex-shrink-0" />
                        <span>Estudiante 2023 - Presente</span>
                    </div>
                </div>

                {/* Botones de contacto */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full max-w-lg">

                    {/* Botón Descargar CV */}
                    <GlareHover className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-blue-500/30 hover:bg-blue-400/20 rounded-md text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
                        <button className="flex items-center gap-2 font-semibold cursor-pointer">
                            <Download size={18} className="flex-shrink-0" />
                            <ShinyText
                                text="Descargar CV"
                                disabled={false}
                                speed={3}
                                className='bg-white/80 text-base sm:text-lg'
                            />
                        </button>
                    </GlareHover>

                    {/* Botón Contactame */}
                    <GlareHover className="border-none rounded-md w-full sm:w-auto bg-indigo-800 py-3 px-6 hover:bg-indigo-800/70 transition">
                        <button className="font-semibold cursor-pointer">
                            <ShinyText
                                text="¡Contactame!"
                                disabled={false}
                                speed={3}
                                className='bg-white/80 text-base sm:text-lg'
                            />
                        </button>
                    </GlareHover>
                </div>
            </div>

            {/* Difuminado al final */}
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-18 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-0" />
        </section>
    )
}

export default Hero;