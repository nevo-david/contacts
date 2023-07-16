import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "boladiiofieaticaqsjh.supabase.co",
  process.env.ANON_KEY!,
    {}
);
