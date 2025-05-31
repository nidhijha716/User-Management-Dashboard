"use client"

import { useState, useEffect } from "react"
import type { FormData } from "@/lib/types"

const STORAGE_KEY = "user-form-data"

export function useFormStorage() {
  const [formData, setFormData] = useState<FormData>({})

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setFormData(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to parse stored form data:", error)
      }
    }
  }, [])

  const updateFormData = (newData: Partial<FormData>) => {
    const updated = { ...formData, ...newData }
    setFormData(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const clearFormData = () => {
    setFormData({})
    localStorage.removeItem(STORAGE_KEY)
  }

  return { formData, updateFormData, clearFormData }
}
