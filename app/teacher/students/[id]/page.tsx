"use client"

import { useParams } from "next/navigation"

export default function StudentDetailPage() {
  const { id } = useParams()

  return 
    (import { useRouter, useParams } from "next/navigation"

// внутри компонента:
const router = useRouter()
const { id } = useParams()

const goTo = (path: string) => router.push(`/teacher/students/${id}/${path}`)

return (
  <div className="mt-6 space-y-4">
    <button onClick={() => goTo("homework")} className="w-full p-3 rounded bg-[#FF6F00] text-white">Задания</button>
    <button onClick={() => goTo("subscription")} className="w-full p-3 rounded bg-[#FF6F00] text-white">Абонемент</button>
    <button onClick={() => goTo("achievements")} className="w-full p-3 rounded bg-[#FF6F00] text-white">Достижения</button>
    <button onClick={() => router.push("/teacher/students")} className="w-full p-3 rounded bg-gray-300 text-black">Назад</button>
  </div>
)
