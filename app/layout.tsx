
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import SessionWrapper from "./components/SessionWrapper";
import connect from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connect();
  return (
    <html lang="en">
      <SessionWrapper >
      <body className={inter.className}>{children}</body>
      </SessionWrapper>
      <PrelineScript />
    </html>
  );
}
