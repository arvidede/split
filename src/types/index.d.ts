import getGroup from "@/actions/group/getGroup"
import { Database } from "./db"

type FromQuery<T> = NonNullable<Awaited<ReturnType<T>>>
type FromArray<T, C extends keyof T> = T[C][number]

export type Group = FromQuery<typeof getGroup>
export type Expense = FromArray<Group, "expenses">
export type Payment = FromArray<Expense, "payments">
export type Profile = Database["public"]["Tables"]["profiles"]["Row"]

export type { User } from "@supabase/supabase-js"
