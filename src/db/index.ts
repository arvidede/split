import { createClient } from "@supabase/supabase-js";
import { Database } from "./db";

const db = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default db;
