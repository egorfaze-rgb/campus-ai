import { requireActiveAccess } from "@/lib/require-active-access"
import SwotClient from "./SwotClient"

export default async function SwotPage() {
  await requireActiveAccess()

  return <SwotClient />
}