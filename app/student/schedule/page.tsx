'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const mockSchedule = {
  Monday: [
    {
      time: '10:00 – 11:00',
      subject: 'Гитара',
      teacher: 'Алексей Иванов',
      comment: 'Разбор нового упражнения',
    },
    {
      time: '15:00 – 16:00',
      subject: 'Фортепиано',
      teacher: 'Мария Смирнова',
      comment: '',
    },
  ],
  Tuesday: [],
  Wednesday: [
    {
      time: '12:00 – 13:00',
      subject: 'Вокал',
      teacher: 'Елена Петрова',
      comment: 'Повторение гамм',
    },
  ],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function SchedulePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-6">Моё расписание</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-[#FFE0B2] text-[#333]">
            <tr>
              <th className="p-3 border border-gray-300">Время</th>
              {days.map(day => (
                <th key={day} className="p-3 border border-gray-300">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((_, index) => {
              const timeLabel = `${8 + index}:00 – ${9 + index}:00`
              return (
                <tr key={index}>
                  <td className="p-3 border border-gray-200 font-medium">{timeLabel}</td>
                  {days.map(day => {
                    const entry = mockSchedule[day]?.find(e => e.time === timeLabel)
                    return (
                      <td key={day} className="p-3 border border-gray-200 align-top">
                        {entry ? (
                          <Card className="bg-[#FFF3E0] p-2">
                            <div className="text-[#FF6F00] font-semibold">{entry.subject}</div>
                            <div className="text-xs text-[#333]">{entry.teacher}</div>
                            {entry.comment && (
                              <div className="text-[10px] text-gray-500 italic mt-1">{entry.comment}</div>
                            )}
                          </Card>
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Link href="/student">
        <Button className="mt-6 bg-[#FF6F00] text-white hover:bg-orange-600">Назад</Button>
      </Link>
    </div>
  )
}
