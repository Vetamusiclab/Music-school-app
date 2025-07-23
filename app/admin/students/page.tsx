'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Student {
  id: string
  name: string
  email: string
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: 'Вика Петрова', email: 'vika@example.com' },
    { id: '2', name: 'Максим Орлов', email: 'maksim@example.com' },
  ])

  const [newStudent, setNewStudent] = useState({ name: '', email: '' })

  const addStudent = () => {
    if (!newStudent.name || !newStudent.email) return
    const newEntry = {
      id: Date.now().toString(),
      ...newStudent,
    }
    setStudents([...students, newEntry])
    setNewStudent({ name: '', email: '' })
  }

  const removeStudent = (id: string) => {
    if (confirm('Удалить ученика?')) {
      setStudents(students.filter(s => s.id !== id))
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-4">Ученики</h1>

      <div className="bg-[#FFE0B2] p-4 rounded-lg mb-6 space-y-2">
        <h2 className="text-lg font-semibold">Добавить ученика</h2>
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="Имя"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <Button onClick={addStudent}>Добавить</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {students.map((student) => (
          <Card key={student.id} className="bg-white">
            <CardContent className="p-4 space-y-1">
              <p><strong>{student.name}</strong></p>
              <p className="text-sm text-gray-600">{student.email}</p>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeStudent(student.id)}
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
