'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Student {
  id: string
  name: string
  avatarUrl?: string
}

export default function TeacherStudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const router = useRouter()

  useEffect(() => {
    // Здесь можно подключить API или mock данные
    setStudents([
      { id: '1', name: 'Анна Соколова' },
      { id: '2', name: 'Иван Петров' },
      { id: '3', name: 'Мария Ли' },
    ])
  }, [])

  const handleClick = (id: string) => {
    router.push(`/teacher/students/${id}`)
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#333]">Мои ученики</h1>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="grid gap-4">
          {students.map((student) => (
            <Card
              key={student.id}
              className="cursor-pointer hover:shadow-lg transition"
              onClick={() => handleClick(student.id)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="text-base font-medium">{student.name}</div>
                <div className="text-sm text-[#6BCB77]">Подробнее</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </main>
  )
}
