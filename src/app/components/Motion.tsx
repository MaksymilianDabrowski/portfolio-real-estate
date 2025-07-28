"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionProps {
  children: ReactNode
}

export default function Motion({ children }: MotionProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  )
}