import "./globals.css"
import HeaderAuth from "@/components/header-auth"
import { Geist } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Link from "next/link"
import { Box } from "lucide-react"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "OrderFlow",
  description:
    "Este app foi desenvolvido para facilitar e agilizar o fluxo de separação de pedidos",
}

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-16 items-center">
              {/* Header */}
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-1 items-center font-semibold ">
                    <Box size={24} strokeWidth={3} />
                    <Link href={"/"}>OrderFlow</Link>
                  </div>
                  <HeaderAuth />
                </div>
              </nav>

              {/* Body */}
              <div className="flex flex-col gap-20 max-w-8xl p-5">
                {children}
              </div>

              {/* Footer */}
              <footer className="w-full flex items-center justify-center mx-auto text-center text-xs gap-8 py-8 mt-auto ">
                <p>
                  Powered by{" "}
                  <a
                    href="https://gianina.com.br"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Gianina Distribuidora
                  </a>
                </p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
