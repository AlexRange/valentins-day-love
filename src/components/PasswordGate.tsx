import { useState } from "react"

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(false)
  const [pass, setPass] = useState("")

  const PASSWORD = "beliyalex2024" // CAMBIA ESTO

  if (ok) return <>{children}</>

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300">
      <div className="bg-white/80 p-10 rounded-3xl shadow-xl text-center">

        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          💖 Solo para el amor de mi vida        
          </h2>

        <input
          type="password"
          placeholder="Contraseña"
          className="border rounded-xl px-4 py-2 mb-4 w-full"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />

        <button
          onClick={() => pass === PASSWORD && setOk(true)}
          className="bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition"
        >
          Entrar
        </button>

      </div>
    </div>
  )
}
