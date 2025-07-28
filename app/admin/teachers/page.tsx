'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, Pencil } from 'lucide-react'

type Teacher = {
  id: number
  name: string
  email: string
  type: 'Basic' | 'Progressive' | 'Prive'
  directions: string[]
}

const initialTeachers: Teacher[] = [
  {
    id: 1,
    name: 'Анастасия Иванова',
    email: 'nastya@musiclab.ru',
    type: 'Progressive',
    directions: ['Фортепиано', 'Теория'],
  },
  {
    id: 2,
    name: 'Дмитрий Смирнов',
    email: 'dima@musiclab.ru',
    type: 'Basic',
    directions: ['Гитара'],
  },
]

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<Partial<Teacher>>({
    name: '',
    email: '',
    type: 'Basic',
    directions: [],
  })

  const handleAdd = () => {
    if (!form.name || !form.email || !form.type) return
    setTeachers(prev => [
      ...prev,
      {
        id: Date.now(),
        name: form.name!,
        email: form.email!,
        type: form.type as 'Basic' | 'Progressive' | 'Prive',
        directions: form.directions || [],
      },
    ])
    setShowForm(false)
    setForm({ name: '', email: '', type: 'Basic', directions: [] })
  }

  const handleDelete = (id: number) => {
    setTeachers(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Преподаватели</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Добавить
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div>
              <Label>Имя</Label>
              <Input
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <Label>Тип</Label>
              <select
                className="w-full border rounded px-2 py-1"
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value as any })}
              >
                <option value="Basic">Basic</option>
                <option value="Progressive">Progressive</option>
                <option value="Prive">Prive</option>
              </select>
            </div>
            <div>
              <Label>Направления</Label>
              <Input
                placeholder="через запятую"
                value={form.directions?.join(', ') || ''}
                onChange={e =>
                  setForm({ ...form, directions: e.target.value.split(',').map(s => s.trim()) })
                }
              />
            </div>
            <div className="col-span-full flex justify-end">
              <Button onClick={handleAdd}>Сохранить</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {teachers.map(teacher => (
          <Card key={teacher.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{teacher.name}</h2>
                  <p className="text-sm text-gray-500">{teacher.email}</p>
                  <p className="text-sm mt-1">Тип: <b>{teacher.type}</b></p>
                  <p className="text-sm">Направления: {teacher.directions.join(', ')}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(teacher.id)}>
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

      </div>
    </div>
  )
}
