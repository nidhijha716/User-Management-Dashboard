"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Users, UserPlus, Home } from "lucide-react"
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster /> {/* ✅ Required for toast to show */}
        {children}
      </body>
    </html>
  )
}


export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="font-bold text-xl">UserDash</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant={pathname === "/dashboard" ? "default" : "ghost"} asChild>
              <Link href="/dashboard" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </Button>

            <Button variant={pathname === "/dashboard/add" ? "default" : "ghost"} asChild>
              <Link href="/dashboard/add" className="flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Add User</span>
              </Link>
            </Button>

            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
