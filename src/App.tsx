import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import SobreMi from "./components/SobreMi"
import Technologies from "./components/Technologies"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return savedTheme ? savedTheme === "dark" : prefersDark
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  // Detecta cambios en el tema del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches)
    }
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return (
    <div className="min-h-screen transition-all bg-white dark:bg-gray-900">
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <main>
        <Hero />
        <SobreMi />
        <Technologies />
      </main>
      <Footer />
    </div>
  )
}

export default App