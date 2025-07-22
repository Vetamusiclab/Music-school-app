
'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/select-role');
  };

  return (
    <main style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '1.8rem',
        maxWidth: '600px',
        lineHeight: '1.5',
        fontWeight: '700',
        color: '#333333'
      }}>
        Добро пожаловать в приложение творческой лаборатории Веты Гулливер!
      </h1>
      <button onClick={handleClick} style={{
        marginTop: '2rem',
        backgroundColor: '#FF6F00',
        color: '#FFFFFF',
        padding: '0.75rem 2rem',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s ease'
      }}>
        Войти
      </button>
    </main>
  );
}
