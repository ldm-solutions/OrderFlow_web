import { LogoGianina } from "./logo-gianina"

export default function Header() {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex gap-8 justify-center items-center">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a> */}
        <LogoGianina width={300} height={115} />
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-2xl text-center">
        Este app foi desenvolvido para facilitar e agilizar o fluxo de separação
        de pedidos. Feito com ❤️ pela{" "}
        <a
          href="https://gianina.com.br"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Gianina
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  )
}
