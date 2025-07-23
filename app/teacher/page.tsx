'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TeacherDashboard() {
  const teacherName = 'Мария Иванова' // Заглушка — позже будет из базы

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-[#333]">
      <h1 className="text-2xl font-bold mb-2 text-[#FF6F00]">Добро пожаловать,</h1>
      <h2 className="text-xl mb-6 text-[#6BCB77]">{teacherName}</h2>

      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <Link href="/teacher/students">
          <Button className="w-full bg-[#FF6F00] text-white hover:bg-orange-600">Ученики</Button>
        </Link>
        <Link href="/teacher/schedule">
          <Button className="w-full bg-[#FF6F00] text-white hover:bg-orange-600">Расписание</Button>
        </Link>
        <Link href="/teacher/salary">
          <Button className="w-full bg-[#FF6F00] text-white hover:bg-orange-600">Зарплата</Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="w-full">Выход</Button>
        </Link>
      </div>
    </div>
  )
}
