"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function ParallaxBackground() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDashboard = pathname === "/dashboard"
  const isAddUser = pathname === "/dashboard/add"

  return (
    <div className="fixed inset-0 z-0">
      {/* Base layer */}
      <motion.div
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className={`w-full h-full ${isDashboard ? "dashboard-bg" : isAddUser ? "add-user-bg" : "dashboard-bg"}`} />
      </motion.div>

      {/* Second layer */}
      <motion.div
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent" />
      </motion.div>

      {/* Third layer - floating shapes */}
      <motion.div
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="w-full h-full relative overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full blur-lg" />
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full blur-xl" />
        </div>
      </motion.div>

      {/* Overlay for better text readability */}
      <div className="parallax-layer bg-black/20" />
    </div>
  )
}
