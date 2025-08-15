"use client"

import { useRef, useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

interface RadialMenuProps {
  isOpen: boolean
  position: { x: number; y: number }
  onClose: () => void
  navItems: Array<{ href: string; label: string }>
  toggleDarkMode: () => void
  darkMode: boolean
}

export function RadialMenu({ isOpen, position, onClose, navItems, toggleDarkMode, darkMode }: RadialMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const getFloatingPositions = () => {
    const fixedPositions = [
      { x: position.x - 120, y: position.y - 120 }, // Arriba izquierda INICIO
      { x: position.x - 40, y: position.y - 190 }, // Arriba SOBRE MI
      { x: position.x - 100, y: position.y - 0 }, // Izquierda arriba EXPRERIENCIA

      { x: position.x - 210, y: position.y - 140 }, // Muy arriba izquierda ESTUDIOS
      { x: position.x - 190, y: position.y - 50 }, // Muy izquierda arriba TECNOLOGIAS
      { x: position.x - 140, y: position.y - 210 }, // Muy arriba PROYECTOS
      { x: position.x - 30, y: position.y - 100 }, // Arriba centro DARKMODE
    ]

    // Asegurar que todas las posiciones estén dentro de la pantalla
    return fixedPositions.map((pos) => ({
      x: Math.max(80, Math.min(window.innerWidth - 80, pos.x)),
      y: Math.max(80, Math.min(window.innerHeight - 80, pos.y)),
    }))
  }

  const getHoveredElement = (clientX: number, clientY: number) => {
    const positions = getFloatingPositions()

    for (let i = 0; i < positions.length; i++) {
      const pos = positions[i]
      const touchDistance = Math.sqrt(Math.pow(clientX - pos.x, 2) + Math.pow(clientY - pos.y, 2))

      if (touchDistance <= 40) {
        return i
      }
    }
    return null
  }

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!isOpen) return

      e.preventDefault()

      const touch = e.touches[0]
      if (touch) {
        setDragPosition({ x: touch.clientX, y: touch.clientY })
        setIsDragging(true)

        const hoveredIdx = getHoveredElement(touch.clientX, touch.clientY)
        setHoveredIndex(hoveredIdx)
      }
    }

    const handleTouchEnd = () => {
      if (!isOpen || !isDragging) return

      if (hoveredIndex !== null) {
        if (hoveredIndex < navItems.length) {
          const item = navItems[hoveredIndex]
          window.location.href = item.href
        } else {
          toggleDarkMode()
        }
      }

      setIsDragging(false)
      setDragPosition(null)
      setHoveredIndex(null)
      onClose()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isOpen) return

      setDragPosition({ x: e.clientX, y: e.clientY })
      setIsDragging(true)

      const hoveredIdx = getHoveredElement(e.clientX, e.clientY)
      setHoveredIndex(hoveredIdx)
    }

    const handleMouseUp = () => {
      if (!isOpen || !isDragging) return

      if (hoveredIndex !== null) {
        if (hoveredIndex < navItems.length) {
          const item = navItems[hoveredIndex]
          window.location.href = item.href
        } else {
          toggleDarkMode()
        }
      }

      setIsDragging(false)
      setDragPosition(null)
      setHoveredIndex(null)
      onClose()
    }

    if (isOpen) {
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd, { passive: false })
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isOpen, isDragging, hoveredIndex, navItems, toggleDarkMode, onClose, position])

  if (!isOpen) return null

  const positions = getFloatingPositions()

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        left: 0,
        top: 0,
      }}
    >
      {/* Centro del menú */}
      <div
        className="absolute w-4 h-4 bg-blue-500 rounded-full pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {isDragging && dragPosition && (
        <svg className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }}>
          <line
            x1={position.x}
            y1={position.y}
            x2={dragPosition.x}
            y2={dragPosition.y}
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.6"
          />
        </svg>
      )}

      {navItems.map((item, index) => {
        const pos = positions[index]
        const isHovered = hoveredIndex === index

        return (
          <div
            key={index}
            className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 duration-200"
            style={{
              left: pos.x,
              top: pos.y,
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div
              className={`flex items-center justify-center w-20 h-20 backdrop-blur-xl shadow-lg border rounded-full text-sm font-medium transition-all duration-200 ${
                isHovered
                  ? "bg-blue-500 text-white border-blue-400 scale-110 shadow-xl"
                  : "bg-white/90 dark:bg-gray-800/90 border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300"
              }`}
            >
              <span className="text-center leading-tight px-2">{item.label}</span>
            </div>
          </div>
        )
      })}

      {/* Botón de tema */}
      {positions[navItems.length] && (
        <div
          className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            left: positions[navItems.length].x,
            top: positions[navItems.length].y,
            animationDelay: `${navItems.length * 50}ms`,
          }}
        >
          <div
            className={`flex items-center justify-center w-20 h-20 backdrop-blur-xl shadow-lg border rounded-full transition-all duration-200 ${
              hoveredIndex === navItems.length
                ? "bg-blue-500 text-white border-blue-400 scale-110 shadow-xl"
                : "bg-white/90 dark:bg-gray-800/90 border-gray-200/20 dark:border-gray-700/20 text-gray-800 dark:text-yellow-400"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </div>
        </div>
      )}
    </div>
  )
}
