"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4CAF50]/10 dark:bg-black/40 backdrop-blur-sm dark:border-white/10">
        <CardHeader className="pb-2">
          <div className="mb-2 text-primary">{icon}</div>
          <CardTitle className="text-secondary-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
