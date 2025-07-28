import * as React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-2xl shadow p-4 bg-white">{children}</div>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-2">{children}</div>
}

