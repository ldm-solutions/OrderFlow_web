import { signOutAction } from "@/app/actions"
import Link from "next/link"
import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/server"
import { ThemeSwitcher } from "./theme-switcher"

export default async function AuthButton() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    //TODO: Add user Avatar/DropDown here
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <ThemeSwitcher />
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  )
}
