"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const directionsMock = [
  { id: 1, name: "Гитара", teacher: "Иван Петров" },
  { id: 2, name: "Вокал", teacher: "Анна Смирнова" },
];

export default function StudentDashboard() {
  const router = useRouter();
  const [directions, setDirections] = useState(directionsMock);

  const [selectedDirection, setSelectedDirection] = useState<null | number>(null);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white p-6 text-[#333]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Добро пожаловать, Вета!</h1>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Выйти
        </Button>
      </div>

      {directions.length > 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {directions.map((dir) => (
            <div
              key={dir.id}
              className={`border rounded-2xl p-4 cursor-pointer shadow hover:shadow-md ${
                selectedDirection === dir.id ? "bg-[#FFE0B2]" : "bg-white"
              }`}
              onClick={() => setSelectedDirection(dir.id)}
            >
              <h2 className="text-lg font-semibold">{dir.name}</h2>
              <p className="text-sm text-[#666]">Педагог: {dir.teacher}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Загружается направление...</p>
      )}

      {selectedDirection !== null && (
        <div className="mt-8 flex flex-col gap-4">
          <Button onClick={() => alert("Открыть расписание")} className="bg-[#FF6F00] hover:bg-[#e65c00] text-white">
            Расписание
          </Button>
          <Button onClick={() => alert("Открыть задания")} className="bg-[#FF6F00] hover:bg-[#e65c00] text-white">
            Задания
          </Button>
          <Button onClick={() => alert("Открыть абонемент")} className="bg-[#FF6F00] hover:bg-[#e65c00] text-white">
            Абонемент
          </Button>
          <Button onClick={() => alert("Открыть достижения")} className="bg-[#FF6F00] hover:bg-[#e65c00] text-white">
            Достижения
          </Button>
        </div>
      )}
    </div>
  );
}
