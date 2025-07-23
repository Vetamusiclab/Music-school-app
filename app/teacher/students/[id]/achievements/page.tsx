"use client"

import { useParams } from "next/navigation"
import { useState } from "react"

interface Achievement {
  title: string
  date: string
  description?: string
}

export default function AchievementsPage() {
  const { id } = useParams()
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      title: "Участие в концерте 'Весна 2025'",
      date: "15.04.2025",
      description: "Первое выступление на публике.",
    },
    {
      title: "Грамота за творческий успех",
      date: "01.06.2025",
      description: "За оригинальное музыкальное сочинение.",
    },
  ])

  const [newAchievement, setNewAchievement] = useState<Achievement>({
    title: "",
    date: "",
    description: "",
  })

  const handleAdd = () => {
    if (!newAchievement.title || !newAchievement.date) return

    setAchievements([...achievements, newAchievement])
    setNewAchievement({ title: "", date: "", description: "" })
  }

  const handleDelete = (index: number) => {
    const updated = [...achievements]
    updated.splice(index, 1)
    setAchievements(updated)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Достижения ученика</h1>
      <p className="mb-4 text-sm text-gray-600">ID ученика: <strong>{id}</strong></p>

      <ul className="space-y-4 mb-6">
        {achievements.map((ach, index) => (
          <li key={index} className="border p-3 rounded-md bg-[#FFE0B2] shadow-sm text-[#333]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{ach.title}</h3>
                <p className="text-sm text-gray-700">{ach.date}</p>
                {ach.description && <p className="text-sm mt-1">{ach.description}</p>}
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline text-sm"
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="border p-4 rounded-lg bg-white shadow-md max-w-md">
        <h2 className="font-bold mb-2">Добавить достижение</h2>
        <input
          type="text"
          placeholder="Название"
          value={newAchievement.title}
          onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
          className="w-full border px-2 py-1 mb-2 rounded text-sm"
        />
        <input
          type="date"
          value={newAchievement.date}
          onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
          className="w-full border px-2 py-1 mb-2 rounded text-sm"
        />
        <textarea
          placeholder="Описание (необязательно)"
          value={newAchievement.description}
          onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
          className="w-full border px-2 py-1 mb-3 rounded text-sm"
        />
        <button
          onClick={handleAdd}
          className="bg-[#6BCB77] text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
        >
          Добавить
        </button>
      </div>
    </div>
  )
}
