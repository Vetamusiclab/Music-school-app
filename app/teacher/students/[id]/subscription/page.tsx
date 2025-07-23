"use client"

import { useParams } from "next/navigation"

export default function SubscriptionPage() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Абонемент</h1>
      <p>Ученик ID: <strong>{id}</strong></p>

      <div className="mt-4 space-y-2">
        <p>Тип: <strong>4 занятия / месяц</strong></p>
        <p>Осталось занятий: <strong>2</strong></p>
        <p>Срок действия: <strong>до 31 июля</strong></p>
      </div>
    </div>
  )
}
