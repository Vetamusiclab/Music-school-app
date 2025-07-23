'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface Lesson {
  id: string
  date: string
  time: string
  student: string
  subject: string
  status: 'прошёл' | 'отменён'
}

const dummyLessons: Lesson[] = [
  {
    id: '1',
    date: '2025-07-22',
    time: '10:00–11:00',
    student: 'Иван Петров',
    subject: 'Гитара',
    status: 'прошёл',
  },
  {
    id: '2',
    date: '2025-07-23',
    time: '12:00–13:00',
    student: 'Мария Иванова',
    subject: 'Вокал',
    status: 'прошёл',
  },
  {
    id: '3',
    date: '2025-07-24',
    time: '14:00–15:00',
    student: 'Артём Смирнов',
    subject: 'Барабаны',
    status: 'отменён',
  },
]

const LESSON_RATE = 500 // ₽

export default function SalaryPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])

  useEffect(() => {
    // Заглушка: загружаем фейковые уроки
    setLessons(dummyLessons)
  }, [])

  const passedLessons = lessons.filter(l => l.status === 'прошёл')
  const totalEarnings = passedLessons.length * LESSON_RATE

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#FF6F00]">Зарплата за неделю</h1>

      <Card className="mb-6">
        <CardContent className="p-4 space-y-2">
          <p>Проведённых уроков: <strong>{passedLessons.length}</strong></p>
          <p>Ставка за урок: <strong>{LESSON_RATE} ₽</strong></p>
          <p>Итого: <strong className="text-green-600">{totalEarnings} ₽</strong></p>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-2">Уроки</h2>
      <div className="space-y-3">
        {lessons.map(lesson => (
          <Card key={lesson.id}>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">{format(new Date(lesson.date), 'dd MMMM, EEEE', { locale: ru })}</p>
              <p><strong>{lesson.time}</strong> — {lesson.subject} ({lesson.student})</p>
              <p className={`text-sm ${lesson.status === 'прошёл' ? 'text-green-600' : 'text-red-500'}`}>
                Статус: {lesson.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
