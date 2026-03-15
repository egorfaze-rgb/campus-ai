"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const features = [
    "Понятные ответы на русском и английском",
    "Разбор SWOT, курсовых и структуры работ",
    "Подготовка к midterm и exam",
    "AI по лекциям, методичкам и материалам курса",
    "Быстрый вход в нужный предмет",
    "Единая среда для учебы без хаоса",
  ]

  const useCases = [
    {
      title: "SWOT анализ - курсач",
      text: "Разбор структуры работы, сильных и слабых сторон, логики анализа и формулировок по курсу.",
      action: () => router.push("/swot"),
      button: "Открыть SWOT чат",
    },
    {
      title: "Менеджмент",
      text: "Подготовка к midterm и exam, объяснение теорий, терминов и сложных тем простым языком.",
      action: undefined,
      button: "Скоро",
    },
    {
      title: "Работа по материалам",
      text: "Следующий этап развития - AI, который умеет отвечать по лекциям, методичкам и базе предмета.",
      action: undefined,
      button: "В разработке",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Выбери предмет",
      text: "Студент открывает нужное направление и сразу попадает в рабочий режим без лишнего поиска.",
    },
    {
      number: "02",
      title: "Задай вопрос",
      text: "Можно попросить объяснение темы, помощь по SWOT, подготовку к экзамену или разбор задания.",
    },
    {
      number: "03",
      title: "Получи структурированный ответ",
      text: "CampusAI отвечает понятно, быстро и в формате, который реально помогает в учебе.",
    },
  ]

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 12% 10%, rgba(255, 0, 153, 0.22), transparent 24%),
          radial-gradient(circle at 84% 12%, rgba(120, 54, 255, 0.24), transparent 26%),
          radial-gradient(circle at 70% 50%, rgba(255, 0, 153, 0.08), transparent 28%),
          radial-gradient(circle at 18% 82%, rgba(0, 123, 255, 0.14), transparent 22%),
          linear-gradient(180deg, #05030a 0%, #090512 34%, #0b0615 68%, #07040e 100%)
        `,
        color: "white",
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.28) 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.28) 60%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(255,0,153,0.5) 0%, rgba(255,0,153,0.16) 42%, rgba(255,0,153,0) 72%)",
          filter: "blur(34px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "120px",
          right: "-90px",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(111,0,255,0.5) 0%, rgba(111,0,255,0.16) 42%, rgba(111,0,255,0) 74%)",
          filter: "blur(42px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "28px 24px 90px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "18px",
            marginBottom: "68px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(255,0,153,1) 0%, rgba(176,53,255,1) 100%)",
                boxShadow: "0 0 20px rgba(255, 0, 153, 0.85)",
              }}
            />
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              CampusAI
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => router.push("/swot")}
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                padding: "13px 22px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              Открыть AI чат
            </button>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "26px",
            alignItems: "stretch",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.035) 100%)",
              border: "1px solid rgba(255,255,255,0.11)",
              borderRadius: "36px",
              padding: "42px",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-70px",
                right: "-30px",
                width: "220px",
                height: "220px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,0,153,0.45) 0%, rgba(255,0,153,0.1) 42%, rgba(255,0,153,0) 72%)",
                filter: "blur(20px)",
              }}
            />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.82)",
                fontSize: "14px",
                marginBottom: "26px",
              }}
            >
              AI-платформа для учебы, анализа и подготовки
            </div>

            <h1
              style={{
                margin: "0 0 24px",
                fontSize: "82px",
                lineHeight: 0.94,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                maxWidth: "820px",
              }}
            >
              Вся учеба
              <br />
              в одном
              <br />
              AI-интерфейсе
            </h1>

            <p
              style={{
                margin: "0 0 32px",
                maxWidth: "780px",
                fontSize: "24px",
                lineHeight: 1.58,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              CampusAI объединяет подготовку к экзаменам, разбор SWOT, работу по
              методичкам и объяснение сложных тем в одном пространстве, которое
              постепенно превращается в полноценную AI-систему для студента.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "34px",
              }}
            >
              <button
                onClick={() => router.push("/swot")}
                style={{
                  border: "none",
                  borderRadius: "999px",
                  padding: "16px 28px",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "17px",
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, rgba(255,0,153,0.98) 0%, rgba(176,53,255,0.98) 100%)",
                  boxShadow: "0 12px 35px rgba(255, 0, 153, 0.36)",
                }}
              >
                Перейти в SWOT чат
              </button>

              <button
                style={{
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  padding: "16px 28px",
                  fontSize: "17px",
                  fontWeight: 600,
                  cursor: "default",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                Менеджмент - следующий этап
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              {[
                "SWOT и курсовые",
                "Экзамены и midterm",
                "AI по материалам курса",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "18px",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "15px",
                    lineHeight: 1.42,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <div
              style={{
                minHeight: "250px",
                borderRadius: "30px",
                padding: "28px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.035) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "0 16px 50px rgba(0,0,0,0.26)",
              }}
            >
              <div
                style={{
                  color: "#ff50bc",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Уже работает
              </div>

              <div
                style={{
                  fontSize: "40px",
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  marginBottom: "14px",
                }}
              >
                Первая версия
                <br />
                студенческого
                <br />
                AI-сервиса
              </div>

              <div
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "18px",
                  lineHeight: 1.58,
                }}
              >
                Уже есть сайт, AI-чат, деплой и основа для масштабирования в
                полноценный продукт.
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
              }}
            >
              {useCases.map((card) => (
                <div
                  key={card.title}
                  style={{
                    minHeight: "212px",
                    borderRadius: "24px",
                    padding: "22px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "999px",
                        background:
                          "linear-gradient(135deg, rgba(255,0,153,1) 0%, rgba(176,53,255,1) 100%)",
                        boxShadow: "0 0 14px rgba(255,0,153,0.7)",
                        marginBottom: "16px",
                      }}
                    />

                    <div
                      style={{
                        fontSize: "26px",
                        fontWeight: 700,
                        lineHeight: 1.08,
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </div>

                    <div
                      style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "16px",
                        lineHeight: 1.55,
                      }}
                    >
                      {card.text}
                    </div>
                  </div>

                  <button
                    onClick={card.action}
                    style={{
                      marginTop: "18px",
                      borderRadius: "999px",
                      border: card.action
                        ? "none"
                        : "1px solid rgba(255,255,255,0.1)",
                      background: card.action
                        ? "linear-gradient(90deg, rgba(255,0,153,0.95) 0%, rgba(176,53,255,0.95) 100%)"
                        : "rgba(255,255,255,0.05)",
                      color: "white",
                      padding: "12px 18px",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: card.action ? "pointer" : "default",
                      boxShadow: card.action
                        ? "0 10px 24px rgba(255,0,153,0.28)"
                        : "none",
                    }}
                  >
                    {card.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            marginBottom: "34px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "36px",
            padding: "42px 38px",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow:
              "0 16px 55px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  color: "#ff4bb7",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Что получит студент
              </div>

              <h2
                style={{
                  margin: "0 0 18px",
                  fontSize: "64px",
                  lineHeight: 0.94,
                  fontWeight: 800,
                  letterSpacing: "-0.055em",
                  maxWidth: "560px",
                }}
              >
                Один интерфейс
                <br />
                для учебы,
                <br />
                подготовки
                <br />
                и анализа
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.74)",
                  fontSize: "20px",
                  lineHeight: 1.68,
                  maxWidth: "580px",
                }}
              >
                Вместо десятков вкладок, методичек и хаоса студент получает
                единую AI-систему, где можно учиться, спрашивать, анализировать и
                постепенно строить персональную образовательную среду.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {features.map((item) => (
                <div
                  key={item}
                  style={{
                    minHeight: "118px",
                    borderRadius: "22px",
                    padding: "22px",
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "17px",
                    lineHeight: 1.5,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                borderRadius: "28px",
                padding: "28px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <div
                style={{
                  color: "#ff4bb7",
                  fontSize: "15px",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  marginBottom: "14px",
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: 1.08,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "17px",
                  lineHeight: 1.6,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
