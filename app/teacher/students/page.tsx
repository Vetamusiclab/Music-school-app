"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Student {
  id: string
  name: string
  instrument: string
}

const mockStudents: Student[] = [
  { id: "1", name: "Анна Смирнова", instrument: "Фортепиано" },
  { id: "2", name: "Иван Петров", instrument: "Гитара" },
  { id: "3", name: "Ольга Иванова", instrument: "Вокал" },
]

export default function TeacherStudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const router = useRouter()

  useEffect(() => {
    setStudents(mockStudents) // в будущем подключим данные с сервера
  }, [])

  const goToStudent = (id: string) => {
    router.push(`/teacher/students/${id}`)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Мои ученики</h1>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-4 border rounded-lg shadow-sm bg-[#FFE0B2] hover:bg-[#FFD699] cursor-pointer transition"
            onClick={() => goToStudent(student.id)}
          >
            <h2 className="text-lg font-semibold text-[#333]">{student.name}</h2>
            <p className="text-sm text-gray-700">{student.instrument}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
