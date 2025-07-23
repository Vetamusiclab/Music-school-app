"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface Subscription {
  month: string
  totalLessons: number
  completed: number
  missed: number
  remaining: number
  history: string[]
}

const mockSubscription: Subscription = {
  month: "Июль 2025",
  totalLessons: 8,
  completed: 5,
  missed: 1,
  remaining: 2,
  history: [
    "03.07 – Урок прошёл ✅",
    "05.07 – Урок прошёл ✅",
    "08.07 – Урок отменён ❌",
    "12.07 – Урок прошёл ✅",
    "16.07 – Урок прошёл ✅",
    "19.07 – Урок прошёл ✅",
  ],
}

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  useEffect(() => {
    setSubscription(mockSubscription) // Здесь в будущем будет загрузка с сервера
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Абонемент на {subscription?.month}</h1>

      <div className="space-y-2 text-base">
        <p>Всего занятий: {subscription?.totalLessons}</p>
        <p>Пройдено: {subscription?.completed}</p>
        <p>Отменено: {subscription?.missed}</p>
        <p>Осталось: {subscription?.remaining}</p>
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">История занятий:</h2>
      <ul className="list-disc list-inside space-y-1">
        {subscription?.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
