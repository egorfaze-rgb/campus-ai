import { requireActiveAccess } from "@/lib/require-active-access"

export default async function DashboardPage() {
  const { user, access } = await requireActiveAccess()

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07040e",
        color: "white",
        padding: "40px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "32px",
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
          Dashboard
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
          Доступ подтвержден
        </h1>

        <p
          style={{
            margin: "0 0 18px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Эта страница открывается только для авторизованного пользователя с активным доступом в системе.
        </p>

        <div
          style={{
            display: "grid",
            gap: "14px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Твой email: {user.email}
          </div>

          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Статус доступа: {access.status}
          </div>

          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Уровень доступа: {access.access_level}
          </div>
        </div>
      </div>
    </main>
  )
}