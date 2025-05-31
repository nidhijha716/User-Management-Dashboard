"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { useFormStorage } from "@/hooks/use-form-storage"
import { BasicInfoStep } from "./basic-info-step"
import { AddressStep } from "./address-step"
import { ReviewStep } from "./review-step"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const TOTAL_STEPS = 3

export function AddUserForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const { toast } = useToast()
  const { formData, updateFormData, clearFormData } = useFormStorage()

  const progress = (currentStep / TOTAL_STEPS) * 100

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData)
    toast({
      title: "User Added Successfully!",
      description: "The new user has been added to the system.",
    })
    clearFormData()
    setCurrentStep(1)
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Basic Information"
      case 2:
        return "Address Details"
      case 3:
        return "Review & Submit"
      default:
        return "Step"
    }
  }

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{getStepTitle()}</CardTitle>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {TOTAL_STEPS}
          </div>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && <BasicInfoStep data={formData} onUpdate={updateFormData} onNext={handleNext} />}
            {currentStep === 2 && (
              <AddressStep data={formData} onUpdate={updateFormData} onNext={handleNext} onPrevious={handlePrevious} />
            )}
            {currentStep === 3 && <ReviewStep data={formData} onSubmit={handleSubmit} onPrevious={handlePrevious} />}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-6 border-t">
          <Button variant="outline" asChild>
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
