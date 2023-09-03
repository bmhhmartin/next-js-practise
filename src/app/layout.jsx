"use client"
import './globals.css'
import Menu from "@/components/Menu";
import NextNProgress from 'nextjs-progressbar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-10">
        <NextNProgress color="#F11F1F" height={3} />
        <Menu></Menu>
        {children}
        </body>
    </html>
  )
}
