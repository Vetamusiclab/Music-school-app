"use client"

import { useEffect, useState } from "react"

interface Achievement {
  title: string
  date: string
  description?: string
}

const mockAchievements: Achievement[] = [
  {
    title: "Первое выступление",
    date: "15.06.2025",
    description: "Принял участие в школьном концерте.",
  },
  {
    title: "Победа в конкурсе",
    date: "05.07.2025",
    description: "Занял 1 место в региональном музыкальном конкурсе.",
  },
]

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    setAchievements(mockAchievements) // В будущем заменим на данные с сервера
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Мои достижения</h1>

      {achievements.length === 0 ? (
        <p>Пока нет достижений.</p>
      ) : (
        <ul className="space-y-4">
          {achievements.map((ach, index) => (
            <li key={index} className="border p-3 rounded-lg shadow-sm bg-[#FFE0B2] text-[#333]">
              <h2 className="font-semibold">{ach.title}</h2>
              <p className="text-sm text-gray-700">{ach.date}</p>
              {ach.description && <p className="mt-1">{ach.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
