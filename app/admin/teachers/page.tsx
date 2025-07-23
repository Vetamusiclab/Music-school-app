'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Teacher {
  id: string
  name: string
  email: string
}

export default function AdminTeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([
    { id: '1', name: 'Анна Смирнова', email: 'anna@example.com' },
    { id: '2', name: 'Павел Иванов', email: 'pavel@example.com' },
  ])

  const [newTeacher, setNewTeacher] = useState({ name: '', email: '' })

  const addTeacher = () => {
    if (!newTeacher.name || !newTeacher.email) return
    const newEntry = {
      id: Date.now().toString(),
      ...newTeacher,
    }
    setTeachers([...teachers, newEntry])
    setNewTeacher({ name: '', email: '' })
  }

  const removeTeacher = (id: string) => {
    if (confirm('Удалить преподавателя?')) {
      setTeachers(teachers.filter(t => t.id !== id))
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-4">Преподаватели</h1>

      <div className="bg-[#FFE0B2] p-4 rounded-lg mb-6 space-y-2">
        <h2 className="text-lg font-semibold">Добавить преподавателя</h2>
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="Имя"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
          />
          <Button onClick={addTeacher}>Добавить</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="bg-white">
            <CardContent className="p-4 space-y-1">
              <p><strong>{teacher.name}</strong></p>
              <p className="text-sm text-gray-600">{teacher.email}</p>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeTeacher(teacher.id)}
              >
                Удалить
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
