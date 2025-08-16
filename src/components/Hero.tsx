import { Linkedin, Mail, Phone } from "lucide-react";
import SplitText from "../animations/SplitText";
import DarkVeil from "../animations/background/DarkVeil";
import GlareHover from "../animations/GlareHover";
import ProfileCard from "../animations/ProfileCard";

function Hero() {
    return (
        <section className="relative flex flex-col sm:flex-row items-center justify-center min-h-screen gap-10 sm:gap-20 px-6 sm:px-16 lg:px-32 dark:text-white">

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
            <div className="z-10">
                <ProfileCard
                    name="Ian Gael Fernandez Andrade"
                    title="Ingeniero en Software"
                    handle="gaelfdzz"
                    status="Disponible"
                    contactText="Contactame"
                    avatarUrl="../../public/fotoAvatar.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={true}
                />
            </div>

            {/* Texto y datos */}
            <div className="z-10 flex-col items-center sm:items-start text-center sm:text-left max-w-xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left">
                    <SplitText className="text-white text-3xl" text="Hola soy," splitType="lines" />
                    <SplitText className="text-blue-600 text-4xl" text="Ian Gael Fernandez Andrade" splitType="lines" />
                </h1>
                <SplitText className="text-lg sm:text-xl lg:text-2xl mt-3 sm:mt-4 text-gray-400" text="Estudiante en desarrollo de software" splitType="lines" />

                {/* Contacto */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                    <div className="flex justify-center gap-6 sm:gap-8 text-white">
                        <Mail size={30} className="sm:w-10 sm:h-10" />
                        <Phone size={30} className="sm:w-10 sm:h-10" />
                        <Linkedin size={30} className="sm:w-10 sm:h-10" />
                    </div>

                    <GlareHover className="border-none rounded-md w-full mt-4 sm:mt-0 bg-indigo-800 py-2 px-6 sm:px-8 hover:bg-indigo-800/70 transition">
                        <button className="text-white font-semibold cursor-pointer">
                            Contactar
                        </button>
                    </GlareHover>
                </div>
            </div>

            {/* Difuminado al final */}
            <div className="absolute bottom-0 left-0 w-full h-18 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-0" />
        </section>
    )
}

export default Hero;