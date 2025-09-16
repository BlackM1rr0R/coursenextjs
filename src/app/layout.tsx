import Header from "./component/header/header";
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "./globals.css" // context faylını doğru path ilə import et
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // 👈 burada dəyişənə bağladıq
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
