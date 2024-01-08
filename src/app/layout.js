import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Wrapper from "@/components/Wrapper";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
