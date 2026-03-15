"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        padding: "40px",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          CampusAI
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          AI Academic Assistant
        </p>

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Выберите предмет
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* SWOT */}

          <div
            onClick={() => router.push("/swot")}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "14px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                marginBottom: "10px",
              }}
            >
              swot анализ - курсач
            </h3>

            <p
              style={{
                color: "#777",
              }}
            >
              Помощь с написанием и разбором SWOT анализа
            </p>
          </div>

          {/* MANAGEMENT */}

          <div
            onClick={() => router.push("/management")}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "14px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                marginBottom: "10px",
              }}
            >
              менеджмент
            </h3>

            <p
              style={{
                color: "#777",
              }}
            >
              Подготовка к midterm и exam
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}