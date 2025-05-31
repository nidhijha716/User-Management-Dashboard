"use client"

import { useState, useEffect } from "react"
import type { User } from "@/lib/types"
import { fetchUsers } from "@/lib/api"

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true)
        const userData = await fetchUsers()
        setUsers(userData)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch users")
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  return { users, loading, error }
}
