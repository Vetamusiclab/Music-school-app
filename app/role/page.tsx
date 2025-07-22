'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'

const roles = [
  { label: 'Ученик', icon: '🎓', value: 'student' },
  { label: 'Преподаватель', icon: '🎵', value: 'teacher' },
  { label: 'Админ', icon: '🛠️', value: 'admin' },
]

export default function RolePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-[#333] p-4">
      <h2 className="text-xl font-semibold mb-6 text-center">Выберите свою роль</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-xl">
        {roles.map((role) => (
          <Card
            key={role.value}
            onClick={() => router.push(`/auth?role=${role.value}`)}
            className="hover:shadow-lg cursor-pointer transition-all border border-gray-200 rounded-2xl"
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">{role.icon}</div>
              <div className="text-lg font-medium">{role.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <button
        onClick={() => router.push('/')}
        className="mt-8 text-[#FF6F00] underline hover:text-[#e85f00] transition"
      >
        ← Назад
      </button>
    </main>
  )
}
