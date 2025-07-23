'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const mockSubscription = {
  total: 8,
  used: 5,
  validUntil: '31.07.2025',
  lessons: [
    { date: '01.07.2025', comment: 'Хорошая работа на гаммах' },
    { date: '04.07.2025', comment: 'Немного опоздал, но справился' },
    { date: '08.07.2025', comment: '' },
    { date: '11.07.2025', comment: 'Прошел новый этюд' },
    { date: '15.07.2025', comment: 'Очень внимателен на уроке' },
  ],
}

export default function StudentSubscription() {
  const remaining = mockSubscription.total - mockSubscription.used

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-4">Мой абонемент</h1>

      <Card className="bg-[#FFF3E0] p-4 mb-6">
        <p className="text-[#333] mb-2">
          <strong>Всего занятий:</strong> {mockSubscription.total}
        </p>
        <p className="text-[#333] mb-2">
          <strong>Посещено:</strong> {mockSubscription.used}
        </p>
        <p className="text-[#333] mb-2">
          <strong>Осталось:</strong> {remaining}
        </p>
        <p className="text-[#333]">
          <strong>Действует до:</strong> {mockSubscription.validUntil}
        </p>
      </Card>

      <h2 className="text-xl font-semibold text-[#FF6F00] mb-3">История занятий</h2>
      <div className="space-y-3">
        {mockSubscription.lessons.map((lesson, index) => (
          <Card key={index} className="p-3 bg-[#FFE0B2] text-[#333]">
            <p><strong>{lesson.date}</strong></p>
            <p>{lesson.comment || 'Без комментария'}</p>
          </Card>
        ))}
      </div>

      <Link href="/student">
        <Button className="mt-6 bg-[#FF6F00] text-white hover:bg-orange-600">Назад</Button>
      </Link>
    </div>
  )
}
