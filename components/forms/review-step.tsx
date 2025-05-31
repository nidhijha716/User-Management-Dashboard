"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FormData } from "@/lib/types"
import { ArrowLeft, Check } from "lucide-react"

interface ReviewStepProps {
  data: FormData
  onSubmit: () => void
  onPrevious: () => void
}

export function ReviewStep({ data, onSubmit, onPrevious }: ReviewStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{data.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{data.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone:</span>
              <span>{data.phone}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Address Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Street:</span>
              <span>{data.street}</span>
            </div>
            {data.suite && (
              <div className="flex justify-between">
                <span className="font-medium">Suite:</span>
                <span>{data.suite}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="font-medium">City:</span>
              <span>{data.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Zipcode:</span>
              <span>{data.zipcode}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious} className="flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        <Button onClick={onSubmit} className="flex items-center space-x-2">
          <Check className="h-4 w-4" />
          <span>Submit</span>
        </Button>
      </div>
    </motion.div>
  )
}
