"use client"

import { motion } from "framer-motion"
import { AddUserForm } from "@/components/forms/add-user-form"
import { Navigation } from "@/components/layout/navigation"

export default function AddUserPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Add New User</h1>
            <p className="text-muted-foreground text-lg">Fill out the form to add a new user to the system</p>
          </div>

          <AddUserForm />
        </motion.div>
      </main>
    </div>
  )
}
