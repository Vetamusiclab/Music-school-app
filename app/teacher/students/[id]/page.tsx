"use client"

import { useParams } from "next/navigation"

export default function StudentDetailPage() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Карточка ученика</h1>
      <p>Идентификатор ученика: <strong>{id}</strong></p>

      <div className="mt-6 space-y-4">
        <button className="w-full p-3 rounded bg-[#FF6F00] text-white">Задания</button>
        <button className="w-full p-3 rounded bg-[#FF6F00] text-white">Абонемент</button>
        <button className="w-full p-3 rounded bg-[#FF6F00] text-white">Достижения</button>
        <button className="w-full p-3 rounded bg-gray-300 text-black">Назад</button>
      </div>
    </div>
  )
}
