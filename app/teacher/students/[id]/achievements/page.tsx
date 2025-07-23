"use client"

import { useParams } from "next/navigation"

export default function AchievementsPage() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Достижения ученика</h1>
      <p>Ученик ID: <strong>{id}</strong></p>

      <ul className="list-disc pl-5 mt-4 space-y-2">
        <li>Участие в концерте "Весна 2025"</li>
        <li>Грамота за творческий успех</li>
        <li>Победа в школьном конкурсе</li>
      </ul>
    </div>
  )
}
