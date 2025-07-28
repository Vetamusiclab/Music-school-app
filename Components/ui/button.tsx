```tsx
import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
children: React.ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
return (
 <button
   className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl transition"
   {...props}
 >
   {children}
 </button>
)
}

