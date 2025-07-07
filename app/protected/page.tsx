import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Hello, {data.user.email}!
        </h1>
        <p className="text-lg text-muted-foreground">
          Additional capabilities coming soon!
        </p>
      </div>
    </div>
  );
}
