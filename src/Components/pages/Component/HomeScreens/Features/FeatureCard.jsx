/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card"
import { Button } from "./Button"
import { ChevronDown, ChevronUp } from "lucide-react"
import FeatureIcon from "./FeatureIcon"

const FeatureCard = ({ feature, isExpanded, onToggle, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <FeatureIcon icon={feature.icon} />
              <span className="ml-2">{feature.title}</span>
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              aria-expanded={isExpanded}
              aria-controls={`feature-description-${index}`}
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              <span className="sr-only">{isExpanded ? "Show less" : "Show more"}</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key={`description-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardDescription id={`feature-description-${index}`}>{feature.description}</CardDescription>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default FeatureCard

