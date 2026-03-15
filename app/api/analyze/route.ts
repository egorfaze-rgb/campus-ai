import OpenAI from "openai"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const text = body.text

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
    Ты CampusAI — AI ассистент для студентов.

    Правила:
    - Отвечай на том же языке, на котором пишет пользователь.
    - Если пользователь пишет на русском — отвечай на русском.
    - Если на английском — отвечай на английском.
    - Помогай разбирать SWOT анализ и объяснять структуру работы.
`
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.7
    })

    return Response.json({
      result: completion.choices[0].message.content
    })

  } catch (error) {
    console.error("AI error:", error)

    return Response.json({
      result: "Ошибка при анализе. Проверь API ключ или баланс."
    })
  }
}