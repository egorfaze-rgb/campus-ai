"use client"

import { useRouter } from "next/navigation"

export default function Home() {

const router = useRouter()

return (
<main
style={{
minHeight: "100vh",
background: "#f5f7fb",
fontFamily: "system-ui"
}}
>

<div
style={{
maxWidth: "1100px",
margin: "0 auto",
padding: "80px 20px"
}}
>

<h1
style={{
fontSize: "48px",
fontWeight: "700",
marginBottom: "20px"
}}
>
CampusAI
</h1>

<p
style={{
fontSize: "20px",
color: "#555",
marginBottom: "60px",
maxWidth: "600px"
}}
>
AI ассистент для студентов. Помогает разбирать SWOT, готовиться к экзаменам
и понимать сложные темы по менеджменту.
</p>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
gap: "25px"
}}
>

<div
onClick={() => router.push("/swot")}
style={{
background: "white",
padding: "30px",
borderRadius: "14px",
boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
cursor: "pointer",
transition: "0.2s"
}}
>
<h3
style={{
fontSize: "22px",
marginBottom: "10px"
}}
>
SWOT анализ
</h3>

<p style={{color:"#777"}}>
AI помогает разобрать сильные и слабые стороны компании.
</p>

</div>

<div
style={{
background: "white",
padding: "30px",
borderRadius: "14px",
boxShadow: "0 6px 25px rgba(0,0,0,0.06)"
}}
>

<h3
style={{
fontSize: "22px",
marginBottom: "10px"
}}
>
Менеджмент
</h3>

<p style={{color:"#777"}}>
Помощь с теориями менеджмента и подготовкой к экзаменам.
</p>

</div>

<div
style={{
background: "white",
padding: "30px",
borderRadius: "14px",
boxShadow: "0 6px 25px rgba(0,0,0,0.06)"
}}
>

<h3
style={{
fontSize: "22px",
marginBottom: "10px"
}}
>
Финансы
</h3>

<p style={{color:"#777"}}>
Разбор финансовых задач, формул и кейсов.
</p>

</div>

</div>

</div>

</main>
)
}
