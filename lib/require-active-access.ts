import { redirect } from "next/navigation"
import { createClient } from "@/lib/server-client"

export async function requireActiveAccess() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth")
  }

  const { data: access } = await supabase
    .from("access_status")
    .select("status, access_level, expires_at")
    .eq("user_id", user.id)
    .maybeSingle()

  if (!access) {
    redirect("/pending")
  }

  if (access.status !== "active") {
    redirect("/pending")
  }

  return { user, access }
}