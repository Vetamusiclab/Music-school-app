"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminStudentAchievementsPage() {
  const { id } = useParams()
  const [achievements, setAchievements] = useState<string[]>([
    "Участие в концерте 'Весна 2025'",
    "Грамота за творческий успех",
    "Победа в школьном конкурсе",
  ])
  const [newAchievement, setNewAchievement] = useState("")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const handleAdd = () => {
    if (newAchievement.trim()) {
      setAchievements((prev) => [...prev, newAchievement.trim()])
      setNewAchievement("")
    }
  }

  const handleUpdate = (index: number, value: string) => {
    const updated = [...achievements]
    updated[index] = value
    setAchievements(updated)
  }

  const handleDelete = (index: number) => {
    setAchievements((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-2 text-[#FF6F00]">Достижения ученика</h1>
      <p className="text-sm text-muted-foreground">ID ученика: <strong>{id}</strong></p>

      <Card>
        <CardContent className="pt-4 space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-3">
              {editingIndex === index ? (
                <Input
                  value={achievement}
                  onChange={(e) => handleUpdate(index, e.target.value)}
                  onBlur={() => setEditingIndex(null)}
                  autoFocus
                />
              ) : (
                <p
                  className="flex-1 cursor-pointer hover:underline"
                  onClick={() => setEditingIndex(index)}
                >
                  {achievement}
                </p>
              )}
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDelete(index)}
              >
                ✕
              </Button>
            </div>
          ))}

          <div className="flex gap-2">
            <Input
              placeholder="Новое достижение"
              value={newAchievement}
              onChange={(e) => setNewAchievement(e.target.value)}
            />
            <Button onClick={handleAdd}>Добавить</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
