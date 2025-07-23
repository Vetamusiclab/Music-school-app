'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Group {
  id: string
  name: string
}

interface Direction {
  id: string
  title: string
  groups: Group[]
}

export default function AdminGroupsPage() {
  const [directions, setDirections] = useState<Direction[]>([
    {
      id: '1',
      title: 'Гитара',
      groups: [{ id: 'g1', name: 'Начинающие' }, { id: 'g2', name: 'Продвинутые' }],
    },
    {
      id: '2',
      title: 'Фортепиано',
      groups: [],
    },
  ])

  const [newDirection, setNewDirection] = useState('')
  const [groupInputs, setGroupInputs] = useState<Record<string, string>>({})

  const addDirection = () => {
    if (!newDirection.trim()) return
    const newDir: Direction = {
      id: Date.now().toString(),
      title: newDirection.trim(),
      groups: [],
    }
    setDirections([...directions, newDir])
    setNewDirection('')
  }

  const addGroup = (dirId: string) => {
    const groupName = groupInputs[dirId]?.trim()
    if (!groupName) return
    setDirections(directions.map((dir) =>
      dir.id === dirId
        ? {
            ...dir,
            groups: [...dir.groups, { id: Date.now().toString(), name: groupName }],
          }
        : dir
    ))
    setGroupInputs({ ...groupInputs, [dirId]: '' })
  }

  const removeDirection = (id: string) => {
    if (confirm('Удалить направление и все его группы?')) {
      setDirections(directions.filter((d) => d.id !== id))
    }
  }

  const removeGroup = (dirId: string, groupId: string) => {
    if (confirm('Удалить группу?')) {
      setDirections(directions.map((dir) =>
        dir.id === dirId
          ? { ...dir, groups: dir.groups.filter((g) => g.id !== groupId) }
          : dir
      ))
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#FF6F00] mb-4">Направления и группы</h1>

      <div className="bg-[#FFE0B2] p-4 rounded-lg mb-6 space-y-2">
        <h2 className="text-lg font-semibold">Добавить направление</h2>
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="Название направления"
            value={newDirection}
            onChange={(e) => setNewDirection(e.target.value)}
          />
          <Button onClick={addDirection}>Добавить</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {directions.map((dir) => (
          <Card key={dir.id}>
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{dir.title}</h3>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeDirection(dir.id)}
                >
                  Удалить направление
                </Button>
              </div>

              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {dir.groups.map((g) => (
                  <li key={g.id} className="flex justify-between items-center">
                    {g.name}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500"
                      onClick={() => removeGroup(dir.id, g.id)}
                    >
                      Удалить
                    </Button>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 pt-2">
                <Input
                  placeholder="Название группы"
                  value={groupInputs[dir.id] || ''}
                  onChange={(e) =>
                    setGroupInputs({ ...groupInputs, [dir.id]: e.target.value })
                  }
                />
                <Button size="sm" onClick={() => addGroup(dir.id)}>
                  Добавить группу
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
