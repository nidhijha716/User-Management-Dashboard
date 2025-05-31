"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/lib/types"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface AddressStepProps {
  data: FormData
  onUpdate: (data: Partial<FormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function AddressStep({ data, onUpdate, onNext, onPrevious }: AddressStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.street?.trim()) {
      newErrors.street = "Street address is required"
    }

    if (!data.city?.trim()) {
      newErrors.city = "City is required"
    }

    if (!data.zipcode?.trim()) {
      newErrors.zipcode = "Zipcode is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      onNext()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="street">Street Address *</Label>
          <Input
            id="street"
            type="text"
            placeholder="Enter street address"
            value={data.street || ""}
            onChange={(e) => onUpdate({ street: e.target.value })}
            className={errors.street ? "border-destructive" : ""}
          />
          {errors.street && <p className="text-sm text-destructive">{errors.street}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter city"
              value={data.city || ""}
              onChange={(e) => onUpdate({ city: e.target.value })}
              className={errors.city ? "border-destructive" : ""}
            />
            {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipcode">Zipcode *</Label>
            <Input
              id="zipcode"
              type="text"
              placeholder="Enter zipcode"
              value={data.zipcode || ""}
              onChange={(e) => onUpdate({ zipcode: e.target.value })}
              className={errors.zipcode ? "border-destructive" : ""}
            />
            {errors.zipcode && <p className="text-sm text-destructive">{errors.zipcode}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="suite">Suite/Apartment (Optional)</Label>
          <Input
            id="suite"
            type="text"
            placeholder="Enter suite or apartment number"
            value={data.suite || ""}
            onChange={(e) => onUpdate({ suite: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious} className="flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <Button onClick={handleNext} className="flex items-center space-x-2">
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
