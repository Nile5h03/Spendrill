/* eslint-disable no-unused-vars */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { ScrollArea } from "./Scroll-Area"
import FeatureList from "./FeatureList"

const Features = () => {
  return (
    <ScrollArea className="h-screen">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Features
          </motion.h2>
          <FeatureList />
        </div>
      </section>
    </ScrollArea>
  )
}

export default Features








Features