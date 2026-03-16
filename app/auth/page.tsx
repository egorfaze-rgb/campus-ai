"use client"

import { useState } from "react"
import { createClient } from "@/lib/browser-client"

export default function AuthPage() {
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: typeof window !== "undefined"
          ? `${window.location.origin}/auth/callback`
          : undefined,
      },
    })

    if (error) {
      setMessage("Ошибка при отправке ссылки. Попробуй еще раз.")
    } else {
      setMessage("Ссылка для входа отправлена на почту.")
    }

    setLoading(false)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07040e",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "32px",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: "#ff4bb7",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Вход в CampusAI
        </div>

        <h1
          style={{
            margin: "0 0 14px",
            fontSize: "42px",
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          Получить доступ
        </h1>

        <p
          style={{
            margin: "0 0 24px",
            color: "rgba(255,255,255,0.72)",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Введи свою почту. Мы отправим безопасную ссылку для входа в CampusAI.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontSize: "16px",
              outline: "none",
              marginBottom: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: "16px",
              border: "none",
              cursor: loading ? "default" : "pointer",
              background:
                "linear-gradient(90deg, rgba(255,0,153,0.98) 0%, rgba(176,53,255,0.98) 100%)",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              boxShadow: "0 12px 35px rgba(255, 0, 153, 0.35)",
            }}
          >
            {loading ? "Отправляем..." : "Отправить ссылку для входа"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "18px",
              color: "rgba(255,255,255,0.78)",
              fontSize: "15px",
              lineHeight: 1.5,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  )
}