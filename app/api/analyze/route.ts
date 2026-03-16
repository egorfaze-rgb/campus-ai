import OpenAI from "openai"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies()

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          },
        },
      }
    )

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json(
        { result: "Доступ запрещен. Сначала войди в аккаунт." },
        { status: 401 }
      )
    }

    const { data: access, error: accessError } = await supabase
      .from("access_status")
      .select("status, access_level, expires_at")
      .eq("user_id", user.id)
      .maybeSingle()

    if (accessError || !access || access.status !== "active") {
      return NextResponse.json(
        { result: "Доступ запрещен. У аккаунта нет активного доступа." },
        { status: 403 }
      )
    }

    const body = await req.json()
    const text = body.text

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Ты CampusAI - AI ассистент для студентов.

Правила:
- Отвечай на том же языке, на котором пишет пользователь.
- Если пользователь пишет на русском - отвечай на русском.
- Если на английском - отвечай на английском.
- Помогай разбирать SWOT анализ и объяснять структуру работы.
          `,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.7,
    })

    return NextResponse.json({
      result: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error("AI error:", error)

    return NextResponse.json(
      { result: "Ошибка при анализе. Проверь API ключ или баланс." },
      { status: 500 }
    )
  }
}