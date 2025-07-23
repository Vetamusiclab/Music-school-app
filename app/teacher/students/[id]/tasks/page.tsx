'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Task = {
  id: string
  title: string
  link?: string
  comment?: string
}

export default function TeacherStudentTasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState({ title: '', link: '', comment: '' })

  const handleAdd = () => {
    if (!newTask.title.trim()) return
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newTask.title,
        link: newTask.link,
        comment: newTask.comment,
      },
    ])
    setNewTask({ title: '', link: '', comment: '' })
  }

  const handleRemove = (id: string) => {
    if (confirm('Удалить это задание?')) {
      setTasks(prev => prev.filter(task => task.id !== id))
    }
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-[#FF6F00]">Задания ученика</h1>

      {/* Форма добавления */}
      <Card>
        <CardContent className="space-y-2 pt-4">
          <Input
            placeholder="Название задания"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <Input
            placeholder="Ссылка (если есть)"
            value={newTask.link}
            onChange={(e) => setNewTask({ ...newTask, link: e.target.value })}
          />
          <Textarea
            placeholder="Комментарий"
            value={newTask.comment}
            onChange={(e) => setNewTask({ ...newTask, comment: e.target.value })}
          />
          <Button onClick={handleAdd}>Добавить</Button>
        </CardContent>
      </Card>

      {/* Список заданий */}
      <div className="space-y-3">
        {tasks.map(task => (
          <Card key={task.id}>
            <CardContent className="pt-4 space-y-1 text-sm">
              <p><strong>{task.title}</strong></p>
              {task.link && (
                <p>
                  <a href={task.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Перейти к материалу
                  </a>
                </p>
              )}
              {task.comment && <p className="text-gray-600">{task.comment}</p>}
              <Button variant="destructive" size="sm" onClick={() => handleRemove(task.id)}>
                Удалить
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
