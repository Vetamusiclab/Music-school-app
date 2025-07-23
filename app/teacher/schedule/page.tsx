'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

type Lesson = {
  subject: string;
  student: string;
  room: string;
  comment?: string;
};

export default function TeacherSchedulePage() {
  const [schedule, setSchedule] = useState<Record<string, Lesson | null>>({});

  const handleCellClick = (day: string, time: string) => {
    const key = `${day}_${time}`;
    const subject = prompt('Название предмета:');
    const student = prompt('Имя ученика:');
    const room = prompt('Кабинет:');
    const comment = prompt('Комментарий (необязательно):');

    if (subject && student && room) {
      setSchedule((prev) => ({
        ...prev,
        [key]: { subject, student, room, comment: comment || '' },
      }));
    }
  };

  const handleRemove = (key: string) => {
    if (confirm('Удалить это занятие?')) {
      setSchedule((prev) => ({ ...prev, [key]: null }));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Расписание</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-center">
          <thead>
            <tr>
              <th className="border px-2 py-1">Время</th>
              {days.map((day) => (
                <th key={day} className="border px-2 py-1">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time}>
                <td className="border px-2 py-1 font-medium">{time}</td>
                {days.map((day) => {
                  const key = `${day}_${time}`;
                  const lesson = schedule[key];

                  return (
                    <td
                      key={key}
                      className="border px-2 py-1 cursor-pointer hover:bg-orange-100"
                      onClick={() => handleCellClick(day, time)}
                    >
                      {lesson ? (
                        <div className="text-left text-xs space-y-1">
                          <div><strong>{lesson.subject}</strong></div>
                          <div>👤 {lesson.student}</div>
                          <div>🏫 Кабинет: {lesson.room}</div>
                          {lesson.comment && <div>💬 {lesson.comment}</div>}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemove(key);
                            }}
                            className="text-red-500 text-xs underline mt-1"
                          >
                            Удалить
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic">+</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
