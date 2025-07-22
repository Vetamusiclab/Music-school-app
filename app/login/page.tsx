"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "student";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!login || !password) {
      setError("Введите логин и пароль");
      return;
    }

    // Простая заглушка (в будущем заменим на запрос к серверу)
    if (login === "test" && password === "1234") {
      router.push(`/${role}/dashboard`);
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <Button
        onClick={() => router.push("/role")}
        variant="ghost"
        className="absolute top-4 left-4 text-black hover:text-[#FF6F00]"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад
      </Button>

      <h1 className="text-2xl font-bold mb-6 text-[#333]">Вход</h1>

      <div className="w-full max-w-sm space-y-4 bg-[#FFE0B2] p-6 rounded-2xl shadow-md">
        <div>
          <Label className="text-[#333]">Логин</Label>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="bg-white"
          />
        </div>

        <div>
          <Label className="text-[#333]">Пароль</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button onClick={handleLogin} className="w-full bg-[#FF6F00] hover:bg-[#e65c00] text-white">
          Войти
        </Button>

        <Button
          variant="link"
          onClick={() => alert("Функция восстановления пока недоступна")}
          className="text-[#333]"
        >
          Забыли пароль?
        </Button>
      </div>
    </div>
  );
}
