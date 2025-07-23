'use client';

import { useEffect, useState } from 'react';

type Lesson = {
  date: string;
  student: string;
  subject: string;
  duration: number; // в минутах
  rate: number;     // ставка за 60 минут
};

export default function TeacherPaymentsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    // ВРЕМЕННЫЕ ДАННЫЕ — заменим позже на данные из БД
    setLessons([
      {
        date: '2025-07-22',
        student: 'Анна Иванова',
        subject: 'Фортепиано',
        duration: 60,
        rate: 800,
      },
      {
        date: '2025-07-23',
        student: 'Максим Петров',
        subject: 'Гитара',
        duration: 30,
        rate: 800,
      },
      {
        date: '2025-07-23',
        student: 'Саша Орлова',
        subject: 'Вокал',
        duration: 60,
        rate: 900,
      },
    ]);
  }, []);

  const total = lessons.reduce(
    (sum, lesson) => sum + (lesson.duration / 60) * lesson.rate,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Зарплата за неделю</h2>
      <table className="w-full text-sm border mb-4">
        <thead>
          <tr className="bg-orange-100">
            <th className="border px-2 py-1">Дата</th>
            <th className="border px-2 py-1">Ученик</th>
            <th className="border px-2 py-1">Предмет</th>
            <th className="border px-2 py-1">Длительность</th>
            <th className="border px-2 py-1">Ставка</th>
            <th className="border px-2 py-1">Итого</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{lesson.date}</td>
              <td className="border px-2 py-1">{lesson.student}</td>
              <td className="border px-2 py-1">{lesson.subject}</td>
              <td className="border px-2 py-1">{lesson.duration} мин</td>
              <td className="border px-2 py-1">{lesson.rate} ₽</td>
              <td className="border px-2 py-1">
                {(lesson.duration / 60) * lesson.rate} ₽
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right font-bold text-xl">
        Всего: {total} ₽
      </div>
    </div>
  );
}
