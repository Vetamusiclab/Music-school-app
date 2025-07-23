'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockAchievements = [
  { title: 'Первое выступление', date: '12.06.2025', description: 'Участвовал в концерте учеников' },
  { title: 'Выучил первую песню', date: '25.05.2025', description: 'Самостоятельно исполнил произведение' },
]

export default function StudentAchievements() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-4">Мои достижения</h1>

      {mockAchievements.length === 0 ? (
        <p className="text-[#333]">Пока нет достижений. Но всё впереди! 🎯</p>
      ) : (
        <div className="space-y-4">
          {mockAchievements.map((item, index) => (
            <Card key={index} className="p-4 bg-[#E8F5E9] text-[#333]">
              <h2 className="text-xl font-semibold text-[#6BCB77]">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="mt-1">{item.description}</p>
            </Card>
          ))}
        </div>
      )}

      <Link href="/student">
        <Button className="mt-6 bg-[#FF6F00] text-white hover:bg-orange-600">Назад</Button>
      </Link>
    </div>
  )
}
