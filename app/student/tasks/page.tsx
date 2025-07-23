'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const mockTasks = [
  {
    id: 1,
    title: 'Разминка на гитаре',
    type: 'text',
    content: 'Разучить гамму C-dur на 5 ладов',
  },
  {
    id: 2,
    title: 'Упражнение по вокалу',
    type: 'video',
    content: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Файл с партитурой',
    type: 'file',
    content: '/files/etude.pdf',
  },
  {
    id: 4,
    title: 'Слушать трек',
    type: 'audio',
    content: 'https://musiclab.ru/audio/exercise1.mp3',
  },
]

export default function StudentTasks() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-6">Мои задания</h1>

      <div className="space-y-4">
        {mockTasks.map(task => (
          <Card key={task.id} className="p-4 bg-[#FFF3E0]">
            <h2 className="text-lg font-semibold text-[#FF6F00] mb-1">{task.title}</h2>
            {task.type === 'text' && <p className="text-[#333]">{task.content}</p>}
            {task.type === 'video' && (
              <a
                href={task.content}
                className="text-blue-600 underline text-sm"
                target="_blank" rel="noopener noreferrer"
              >
                Смотреть видео
              </a>
            )}
            {task.type === 'file' && (
              <a
                href={task.content}
                className="text-blue-600 underline text-sm"
                download
              >
                Скачать файл
              </a>
            )}
            {task.type === 'audio' && (
              <audio controls className="mt-2">
                <source src={task.content} type="audio/mpeg" />
                Ваш браузер не поддерживает аудио.
              </audio>
            )}
          </Card>
        ))}
      </div>

      <Link href="/student">
        <Button className="mt-6 bg-[#FF6F00] text-white hover:bg-orange-600">Назад</Button>
      </Link>
    </div>
  )
}
