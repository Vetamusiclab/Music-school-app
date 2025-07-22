'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-[#333] px-4">
      <Image src="/logo.png" alt="MUSIC.LAB" width={120} height={120} className="mb-6" />

      <h1 className="text-2xl md:text-3xl font-semibold font-['PT Sans'] text-center text-black mb-2">
        Творческая Лаборатория Веты Гулливер
      </h1>

      <Button
        onClick={() => router.push('/role')}
        className="mt-6 bg-[#FF6F00] hover:bg-[#e85f00] text-white text-lg rounded-2xl px-6 py-3 shadow-md transition-all"
      >
        Войти
      </Button>
    </main>
  )
}
