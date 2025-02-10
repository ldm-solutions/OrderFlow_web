import { GradientBadge } from "@/components/gradient-badge"
import Hero from "@/components/hero"
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps"
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps"
import { ScrollArea } from "@/components/ui/scroll-area"
import { hasEnvVars } from "@/utils/supabase/check-env-vars"

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4 max-h-[400px]">
        <div>
          <GradientBadge
            title={`Melhorias na versão ${process.env.NEXT_PUBLIC_APP_VERSION}`}
          />
        </div>
        <ScrollArea className="h-[200px]">
          <SignUpUserSteps />
          <SignUpUserSteps />
        </ScrollArea>
      </main>
    </>
  )
}
