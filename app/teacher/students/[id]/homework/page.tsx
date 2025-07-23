"use client"

import { useParams } from "next/navigation"

export default function HomeworkPage() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Задания ученика</h1>
      <p>Ученик ID: <strong>{id}</strong></p>

      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li>Разобрать этюд №3</li>
        <li>Повторить гаммы до мажор и соль мажор</li>
        <li>Подготовить песню к концерту</li>
      </ul>
    </div>
  )
}
