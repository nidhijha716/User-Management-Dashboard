"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { UserList } from "@/components/dashboard/user-list"
import { UserSearch } from "@/components/dashboard/user-search"
import { Navigation } from "@/components/layout/navigation"
import { useUsers } from "@/hooks/use-users"
import type { User } from "@/lib/types"

export default function DashboardPage() {
  const { users, loading, error } = useUsers()
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (users) {
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.address.city.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredUsers(filtered)
    }
  }, [users, searchTerm])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">User Management Dashboard</h1>
            <p className="text-muted-foreground text-lg">Manage and search through user profiles</p>
          </div>

          <UserSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <UserList users={filteredUsers} loading={loading} error={error} />
        </motion.div>
      </main>
    </div>
  )
}
