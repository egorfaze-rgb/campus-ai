"use client"

import { useState } from "react"
import { createClient } from "@/lib/browser-client"

export default function AuthPage() {
  const supabase = createClient()

  const [step, setStep] = useState<"email" | "code">("email")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      },
    })

    if (error) {
      setMessage("Ошибка при отправке кода. Попробуй еще раз.")
      setLoading(false)
      return
    }

    setStep("code")
    setMessage("Код отправлен на почту.")
    setLoading(false)
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    })

    if (error) {
      setMessage("Неверный или просроченный код. Попробуй еще раз.")
      setLoading(false)
      return
    }

    window.location.href = "/dashboard"
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
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          borderRadius: "32px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(17,12,27,0.92)",
          boxShadow: "0 0 80px rgba(201, 55, 255, 0.12)",
          padding: "48px",
        }}
      >
        <div
          style={{
            color: "#ff4fc3",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Вход в CampusAI
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1,
            fontWeight: 800,
            margin: "0 0 24px 0",
          }}
        >
          {step === "email" ? "Получить код" : "Ввести код"}
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 32px 0",
            maxWidth: "620px",
          }}
        >
          {step === "email"
            ? "Введи свою почту. Мы отправим код для входа в CampusAI."
            : "Мы отправили код на твою почту. Введи его ниже, чтобы войти в CampusAI."}
        </p>

        {step === "email" ? (
          <form onSubmit={handleSendCode}>
            <input
              type="email"
              placeholder="Твоя почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                height: "84px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                fontSize: "20px",
                padding: "0 24px",
                outline: "none",
                marginBottom: "20px",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                height: "84px",
                borderRadius: "24px",
                border: "none",
                cursor: "pointer",
                fontSize: "22px",
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(90deg, #ff2f92 0%, #b845ff 100%)",
                boxShadow: "0 10px 40px rgba(201, 55, 255, 0.28)",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Отправляем..." : "Отправить код"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode}>
            <div
              style={{
                marginBottom: "16px",
                color: "rgba(255,255,255,0.65)",
                fontSize: "16px",
              }}
            >
              Почта: {email}
            </div>

            <input
              type="text"
              placeholder="Введи код из письма"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              style={{
                width: "100%",
                height: "84px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                fontSize: "20px",
                padding: "0 24px",
                outline: "none",
                marginBottom: "20px",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                height: "84px",
                borderRadius: "24px",
                border: "none",
                cursor: "pointer",
                fontSize: "22px",
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(90deg, #ff2f92 0%, #b845ff 100%)",
                boxShadow: "0 10px 40px rgba(201, 55, 255, 0.28)",
                opacity: loading ? 0.7 : 1,
                marginBottom: "14px",
              }}
            >
              {loading ? "Проверяем..." : "Войти"}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep("email")
                setCode("")
                setMessage("")
              }}
              style={{
                width: "100%",
                height: "64px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Изменить почту
            </button>
          </form>
        )}

        {message && (
          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  )
}