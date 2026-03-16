import Link from "next/link"

export default function PendingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 15% 15%, rgba(255, 0, 153, 0.16), transparent 24%),
          radial-gradient(circle at 85% 15%, rgba(111, 0, 255, 0.18), transparent 26%),
          linear-gradient(180deg, #05030a 0%, #090512 38%, #0b0615 68%, #07040e 100%)
        `,
        color: "white",
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "32px",
          padding: "40px",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
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
          Доступ ожидает активации
        </div>

        <h1
          style={{
            margin: "0 0 16px",
            fontSize: "52px",
            lineHeight: 0.98,
            fontWeight: 800,
            letterSpacing: "-0.05em",
          }}
        >
          Ты уже вошел
          <br />
          в CampusAI
        </h1>

        <p
          style={{
            margin: "0 0 18px",
            color: "rgba(255,255,255,0.76)",
            fontSize: "20px",
            lineHeight: 1.65,
            maxWidth: "620px",
          }}
        >
          Аккаунт успешно создан, но доступ к AI-инструментам еще не активирован.
          После подтверждения доступа ты сможешь пользоваться закрытыми разделами
          CampusAI.
        </p>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gap: "14px",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.88)",
              fontSize: "16px",
              lineHeight: 1.55,
            }}
          >
            Сейчас доступ к чату и AI-модулям открыт только для активированных пользователей.
          </div>

          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.88)",
              fontSize: "16px",
              lineHeight: 1.55,
            }}
          >
            Когда твой статус станет active, закрытые разделы начнут открываться автоматически.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              borderRadius: "999px",
              border: "none",
              padding: "15px 24px",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              background:
                "linear-gradient(90deg, rgba(255,0,153,0.98) 0%, rgba(176,53,255,0.98) 100%)",
              boxShadow: "0 12px 35px rgba(255, 0, 153, 0.35)",
            }}
          >
            На главную
          </Link>

          <Link
            href="/auth"
            style={{
              textDecoration: "none",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              padding: "15px 24px",
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            К странице входа
          </Link>
        </div>
      </div>
    </main>
  )
}