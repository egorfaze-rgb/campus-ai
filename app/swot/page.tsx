"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SwotPage() {
const router = useRouter()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input) return

    const userMessage = {
      role: "user",
      content: input
    }

    setMessages([...messages, userMessage])
    setInput("")
    setLoading(true)

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: input })
    })

    const data = await res.json()

    const aiMessage = {
      role: "assistant",
      content: data.result
    }

    setMessages((prev) => [...prev, aiMessage])
    setLoading(false)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        padding: "40px",
        fontFamily: "system-ui"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h1
  onClick={() => router.push("/")}
  style={{
    marginBottom: "10px",
    cursor: "pointer"
  }}
>
  CampusAI
</h1>

<h2>swot анализ - курсач</h2>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Чат с материалами и методичкой SWOT
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            minHeight: "400px",
            marginBottom: "20px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.05)"
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                marginBottom: "15px"
              }}
            >
              <b>{msg.role === "user" ? "Вы:" : "CampusAI:"}</b>

              <div
                style={{
                  marginTop: "5px",
                  whiteSpace: "pre-wrap"
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && <p>CampusAI думает...</p>}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px"
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите компанию или вопрос..."
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ddd"
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              padding: "14px 20px",
              background: "#111",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            отправить
          </button>
        </div>
      </div>
    </main>
  )
}