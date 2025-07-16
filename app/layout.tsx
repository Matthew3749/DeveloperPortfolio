import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Matthew Collins | Full Stack Developer",
  description: "Full stack developer specializing in iOS development, machine learning, and backend architecture",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}