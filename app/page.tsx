"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: `
          radial-gradient(circle at 12% 12%, rgba(255, 0, 153, 0.22), transparent 24%),
          radial-gradient(circle at 82% 14%, rgba(130, 44, 255, 0.28), transparent 26%),
          radial-gradient(circle at 60% 46%, rgba(255, 0, 153, 0.08), transparent 30%),
          radial-gradient(circle at 22% 78%, rgba(0, 132, 255, 0.16), transparent 22%),
          linear-gradient(180deg, #04030a 0%, #090512 38%, #0c0717 68%, #09030f 100%)
        `,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.2) 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.2) 55%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-140px",
          left: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(255,0,153,0.55) 0%, rgba(255,0,153,0.18) 40%, rgba(255,0,153,0) 72%)",
          filter: "blur(36px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "120px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(111,0,255,0.5) 0%, rgba(111,0,255,0.16) 42%, rgba(111,0,255,0) 76%)",
          filter: "blur(42px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "120px",
          left: "18%",
          width: "320px",
          height: "320px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(0,140,255,0.24) 0%, rgba(0,140,255,0.12) 38%, rgba(0,140,255,0) 72%)",
          filter: "blur(36px)",
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
            marginBottom: "72px",
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
                  "linear-gradient(135deg, rgba(255,0,153,1) 0%, rgba(178,59,255,1) 100%)",
                boxShadow: "0 0 22px rgba(255, 0, 153, 0.8)",
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
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => router.push("/swot")}
              style={{
                padding: "13px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 600,
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
            gridTemplateColumns: "1.12fr 0.88fr",
            gap: "28px",
            alignItems: "stretch",
            marginBottom: "34px",
          }}
        >
          <div
            style={{
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)",
              border: "1px solid rgba(255,255,255,0.11)",
              borderRadius: "34px",
              padding: "38px",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow:
                "0 20px 70px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-40px",
                width: "240px",
                height: "240px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,0,153,0.42) 0%, rgba(255,0,153,0.08) 46%, rgba(255,0,153,0) 72%)",
                filter: "blur(20px)",
                pointerEvents: "none",
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
              AI-платформа для учебы и анализа
            </div>

            <h1
              style={{
                margin: "0 0 24px",
                fontSize: "78px",
                lineHeight: 0.95,
                fontWeight: 800,
                letterSpacing: "-0.055em",
                maxWidth: "760px",
              }}
            >
              AI-ассистент
              <br />
              для студентов
              <br />
              нового уровня
            </h1>

            <p
              style={{
                margin: "0 0 30px",
                maxWidth: "760px",
                fontSize: "24px",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              CampusAI помогает разбирать SWOT, готовиться к midterm и exam,
              понимать сложные темы по менеджменту и постепенно станет единой
              AI-средой для всей учебы.
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
                  padding: "16px 28px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "17px",
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, rgba(255,0,153,0.95) 0%, rgba(176,53,255,0.95) 100%)",
                  boxShadow: "0 12px 35px rgba(255, 0, 153, 0.35)",
                }}
              >
                Перейти в SWOT чат
              </button>

              <button
                style={{
                  padding: "16px 28px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  fontSize: "17px",
                  fontWeight: 600,
                  cursor: "default",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                Менеджмент - скоро
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
                "Подготовка к экзаменам",
                "AI по учебным материалам",
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
                    lineHeight: 1.4,
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
                position: "relative",
                minHeight: "250px",
                borderRadius: "30px",
                padding: "28px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.035) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                overflow: "hidden",
                boxShadow: "0 16px 50px rgba(0,0,0,0.24)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "auto -40px -40px auto",
                  width: "180px",
                  height: "180px",
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle, rgba(255,0,153,0.46) 0%, rgba(255,0,153,0.12) 40%, rgba(255,0,153,0) 75%)",
                  filter: "blur(18px)",
                }}
              />

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
                Сейчас внутри
              </div>

              <div
                style={{
                  fontSize: "38px",
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
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
                  lineHeight: 1.55,
                  maxWidth: "420px",
                }}
              >
                Уже есть рабочий сайт, деплой, AI-чат и база для дальнейшего
                роста в полноценный продукт.
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
              }}
            >
              {[
                {
                  title: "SWOT анализ",
                  text: "Разбор структуры работы, логики анализа и помощи по курсачу.",
                },
                {
                  title: "Менеджмент",
                  text: "Позже добавим midterm, exam и отдельный AI-режим по предмету.",
                },
                {
                  title: "Финансы",
                  text: "Следующий слой - задачи, формулы и разбор финансовых кейсов.",
                },
                {
                  title: "Материалы",
                  text: "Дальше встроим лекции, методички и внутреннюю базу знаний.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    minHeight: "182px",
                    borderRadius: "24px",
                    padding: "22px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                >
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
                      fontSize: "25px",
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
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "22px",
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
                  fontSize: "52px",
                  lineHeight: 0.98,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
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
                  lineHeight: 1.65,
                  maxWidth: "560px",
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
              {[
                "Понятные ответы на русском и английском",
                "Разбор SWOT и структуры работ",
                "Подготовка к midterm и exam",
                "Следующий этап - AI по лекциям и методичкам",
                "Быстрый запуск нужного предмета",
                "Основа для будущего платного продукта",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    minHeight: "116px",
                    borderRadius: "20px",
                    padding: "18px 20px",
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "17px",
                    lineHeight: 1.45,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
