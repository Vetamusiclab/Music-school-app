'use client'

import { useParams } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

export default function AdminStudentDetailsPage() {
  const { id } = useParams()

  // Заглушка данных (в будущем — fetch по ID)
  const student = {
    id,
    name: 'Алексей Сидоров',
    email: 'aleksey@example.com',
    direction: 'Гитара',
    teacher: 'Павел Иванов',
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-[#FF6F00]">Ученик: {student.name}</h1>
      <p className="text-gray-700">Email: {student.email}</p>
      <p className="text-gray-700">Направление: {student.direction}</p>
      <p className="text-gray-700 mb-4">Преподаватель: {student.teacher}</p>

      <Tabs defaultValue="assignments" className="w-full">
        <TabsList className="bg-[#FFE0B2]">
          <TabsTrigger value="assignments">Задания</TabsTrigger>
          <TabsTrigger value="subscription">Абонемент</TabsTrigger>
          <TabsTrigger value="achievements">Достижения</TabsTrigger>
        </TabsList>

        <TabsContent value="assignments">
          <Card>
            <CardContent className="p-4">
              <p>Здесь будут материалы и ссылки, назначенные преподавателями.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription">
          <Card>
            <CardContent className="p-4">
              <p>Информация об абонементе, сроках, количестве занятий и истории.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card>
            <CardContent className="p-4">
              <p>Список достижений ученика — конкурсы, концерты, тесты и т.д.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
