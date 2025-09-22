/* eslint-disable no-unused-vars */
"use client"

import React, { useState } from "react"
import FeatureCard from "./FeatureCard"

const features = [
  {
    title: "Easy Budgeting",
    description:
      "Take complete control of your finances with Easy Budgeting. Effortlessly create, organize, and track budgets tailored to your specific needs and spending habits. Whether you're planning for everyday expenses, saving for special occasions, or focusing on long-term financial goals, this feature makes budgeting simple and intuitive. With real-time insights into your current spending and predictions for the future, you can make informed decisions on how to allocate your money. Easily track your income, expenses, and even debt repayment, all in one place, allowing you to plan for the future with confidence.",
    icon: "💰",
  },
  {
    title: "Expense Tracking",
    description:
      "Take your financial management to the next level with Expense Tracking. Record all your daily transactions quickly and easily, categorize them into specific groups (e.g., groceries, entertainment, bills), and instantly gain deep insights into your spending patterns. This feature empowers you to spot trends over time, identify areas where you can save, and adjust your budget to avoid overspending. Whether you are tracking small daily expenses or large purchases, Expense Tracking helps ensure that you stay within your limits while optimizing your financial habits. Keep a detailed record and review it whenever you want to evaluate your progress.",
    icon: "📊",
  },
  {
    title: "Financial Insights",
    description:
      "Unlock the full potential of your financial data with Financial Insights. Our app goes beyond basic tracking by providing detailed reports and actionable recommendations to help you better understand your spending, income, and savings habits. With interactive graphs and visual reports, you can track your finances at a glance and dive into deeper insights with customizable breakdowns. The system provides clear visualizations of how you’re spending across categories, how much you're saving, and even predictions for your financial future. By leveraging these insights, you can make smarter decisions about your money, optimize your financial strategy, and take proactive steps toward financial independence.",
    icon: "📈",
  },
  {
    title: "Goal Setting",
    description:
      "Achieve your financial dreams and aspirations with the Goal Setting feature. Whether it’s buying a car, purchasing a home, building an emergency fund, or going on an unforgettable vacation, this feature helps you break down your larger financial goals into smaller, manageable milestones. As you make progress, the app will provide real-time updates and reminders, keeping you motivated and on track. With flexible options to set different timeframes, savings targets, and priority goals, you’ll always know how close you are to reaching your objective. Visualize your path to success with progress bars, and get personalized recommendations on how to fast-track your goals based on your current spending habits.",
    icon: "🎯",
  },
  {
    title: "Bill Reminders",
    description:
      "Take the stress out of managing recurring payments with Bill Reminders. Automatically track all your due dates for bills like rent, utilities, subscriptions, and loan payments. Customize reminders for any date or time, ensuring you never forget an important payment again. Receive notifications on your phone, email, or directly in the app to give you ample time to make payments. You can also organize and categorize your bills for easier tracking, ensuring you always stay on top of your finances and avoid late fees. With Bill Reminders, you’ll have a clear overview of upcoming payments, giving you peace of mind and better financial organization.",
    icon: "🔔",
  },
  {
    title: "Secure & Private",
    description:
      "Your financial security is our top priority. With Secure & Private, rest assured that your sensitive information is protected by the latest encryption technologies. All your personal data, including transaction history, budgets, and savings goals, is safely stored and only accessible by you. Our system uses industry-leading security measures to prevent unauthorized access, and regular updates ensure that your information stays safe. You’ll be able to manage your accounts, track expenses, and view reports with peace of mind, knowing that we are committed to maintaining the highest privacy standards. Additionally, we provide options to lock your app with biometric authentication (fingerprint or face ID) for an added layer of security.",
    icon: "🔒",
  },
]

const FeatureList = () => {
  const [expandedFeatures, setExpandedFeatures] = useState([])

  const toggleFeature = (index) => {
    setExpandedFeatures((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          isExpanded={expandedFeatures.includes(index)}
          onToggle={() => toggleFeature(index)}
          index={index}
        />
      ))}
    </div>
  )
}

export default FeatureList
