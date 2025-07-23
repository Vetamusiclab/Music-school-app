'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Subscription = {
  startDate: string
  endDate: string
  totalLessons: number
  attended: number
  cancelled: number
}

export default function TeacherStudentSubscriptionPage() {
  const [subscription, setSubscription] = useState<Subscription>({
    startDate: '2025-07-01',
    endDate: '2025-07-31',
    totalLessons: 8,
    attended: 5,
    cancelled: 1,
  })

  const [editing, setEditing] = useState(false)

  const handleChange = (key: keyof Subscription, value: string | number) => {
    setSubscription(prev => ({
      ...prev,
      [key]: typeof value === 'string' && key !== 'startDate' && key !== 'endDate' ? parseInt(value) : value,
    }))
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-[#FF6F00]">Абонемент</h1>

      <Card>
        <CardContent className="space-y-3 pt-4 text-sm">
          {editing ? (
            <>
              <Input
                type="date"
                value={subscription.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
              />
              <Input
                type="date"
                value={subscription.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
              />
              <Input
                type="number"
                value={subscription.totalLessons}
                onChange={(e) => handleChange('totalLessons', e.target.value)}
                placeholder="Всего занятий"
              />
              <Input
                type="number"
                value={subscription.attended}
                onChange={(e) => handleChange('attended', e.target.value)}
                placeholder="Прошло занятий"
              />
              <Input
                type="number"
                value={subscription.cancelled}
                onChange={(e) => handleChange('cancelled', e.target.value)}
                placeholder="Отменено"
              />
              <Button onClick={() => setEditing(false)}>Сохранить</Button>
            </>
          ) : (
            <>
              <p>📅 Период: <strong>{subscription.startDate}</strong> – <strong>{subscription.endDate}</strong></p>
              <p>🎯 Всего занятий: <strong>{subscription.totalLessons}</strong></p>
              <p>✅ Прошло: <strong>{subscription.attended}</strong></p>
              <p>❌ Отменено: <strong>{subscription.cancelled}</strong></p>
              <p>🕓 Осталось: <strong>{subscription.totalLessons - subscription.attended - subscription.cancelled}</strong></p>
              <Button onClick={() => setEditing(true)}>Редактировать</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
