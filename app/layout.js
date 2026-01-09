import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Eveasy - track events",
  description: "Create locate memorable events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <ConvexClientProvider>
              <Header />

              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                {/* Background glow effects (behind everything) */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute left-0 top-1/4 w-96 h-110 bg-indigo-600/20 rounded-full blur-3xl" />
                  <div className="absolute right-0 bottom-1/4 w-110 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                </div>

                {/* Page content (above glow) */}
                <div className="relative z-10">{children}</div>
                <Footer />
              </main>
              <Toaster position="top-center" richColors />
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}