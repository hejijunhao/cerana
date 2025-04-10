'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="relative flex items-center">
            <Image
              src="/Cerana Capital Logo.png"
              alt="Cerana Capital"
              width={30}
              height={30}
              priority
            />
            <span className="ml-2 font-light text-xl tracking-tight">
              Cerana Capital
            </span>
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 text-sm font-light tracking-widest text-neutral-400">
            est. 2018
          </span>
          <Button variant="ghost" size="sm" className="gap-2">
            Contact <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Cerana.svg"
              alt=""
              fill
              priority
              className="object-cover opacity-[0.99]"
              aria-hidden="true"
            />
          </div>
          {/* Mouse follower */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-50 mouse-gradient transition duration-200"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.015) 0%, rgba(0,0,0,0.01) 25%, transparent 50%)`
            }}
          />
          
          <div className="container relative">
            <div className="max-w-3xl text-white space-y-8 animate-content-fade-in">
              <h1 className="text-4xl md:text-6xl font-light tracking-tight">
                Investing in the Asian Century.
              </h1>
              <p className="text-lg">
                But we chose this instead.
              </p>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 animate-scroll-fade-in">
            <div className="w-[1px] h-12 bg-neutral-300" />
            <p className="text-xs uppercase tracking-widest">Scroll</p>
          </div>
        </section>

        {/* Three Column Section */}
        <section className="py-32">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-16 md:gap-24">
              {/* Philosophy Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Philosophy</h2>
                <p className="text-neutral-600 leading-relaxed">
                  We believe in patient capital and meaningful partnerships, combining deep regional understanding 
                  with a global perspective.
                </p>
              </div>

              {/* Investments Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Investments</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Selective investments across various stages and sectors, partnering with founders who demonstrate 
                  unique insights into Southeast Asia.
                </p>
              </div>

              {/* Team Column */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Team</h2>
                <div className="space-y-4">
                  {[
                    "Lim Kian Chun",
                    "Justin Anderson Tan",
                    "Philipp Hölke",
                    "Feline Gondokusumo"
                  ].map((name, i) => (
                    <p key={i} className="text-neutral-600">{name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 border-t border-neutral-100">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Link href="mailto:contact@cerana.com" className="text-sm hover:underline">
                  contact@cerana.com
                </Link>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Connect <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
