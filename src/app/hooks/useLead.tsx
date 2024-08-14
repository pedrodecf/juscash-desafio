"use client"

import { useContext } from "react"
import { LeadContext } from "../contexts/LeadContext"

export function useLead() {
  const context = useContext(LeadContext)
  return context
}