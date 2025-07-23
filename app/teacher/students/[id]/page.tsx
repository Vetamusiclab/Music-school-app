// app/teacher/students/[id]/page.tsx

"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function StudentDetailPage() {
  const router = useRouter();
  const { id } = useParams();

  // 🔸 Здесь ты позже подгрузишь реальные данные
  const studentName = "Иван Иванов";

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-[#FF6F00]">Ученик: {studentName}</h1>

      <div className="grid gap-4">
        <Card onClick={() => alert("Переход в Задания")}>
          <CardContent className="p-4">Задания</CardContent>
        </Card>
        <Card onClick={() => alert("Переход в Абонемент")}>
          <CardContent className="p-4">Абонемент</CardContent>
        </Card>
        <Card onClick={() => alert("Переход в Достижения")}>
          <CardContent className="p-4">Достижения</CardContent>
        </Card>
      </div>

      <Button
        variant
