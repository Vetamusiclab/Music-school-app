'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const adminOptions = [
  { title: 'Преподаватели', path: '/admin/teachers' },
  { title: 'Ученики', path: '/admin/students' },
  { title: 'Расписание', path: '/admin/schedule' },
  { title: 'Кабинеты', path: '/admin/rooms' },
  { title: 'Загрузка из Excel', path: '/admin/import' },
  { title: 'Настройки', path: '/admin/settings' },
  { title: 'Выход', path: '/' },
]

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#FF6F00]">
        Панель администратора
      </h1>
      <div className="flex flex-col space-y-4">
        {adminOptions.map(({ title, path }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              onClick={() => router.push(path)}
              className="cursor-pointer hover:shadow-lg transition duration-200"
            >
              <CardContent className="p-4 text-center text-lg font-medium text-[#333]">
                {title}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
