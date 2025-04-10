'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container space-y-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-4xl">
              Since inception:
            </h1>
            <div className="flex gap-16">
              <div className="flex flex-col gap-4 w-[400px]">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-500 min-w-[120px]">Ebb & Flow Group</div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-xl font-light w-24 text-right">$32M</div>
                    <div className="text-emerald-600 w-16 text-right">+433%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-500 min-w-[120px]">Alta Group</div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-xl font-light w-24 text-right">undisclosed</div>
                    <div className="text-emerald-600 w-16 text-right">+685%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-500 min-w-[120px]">MoneyMatch</div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-xl font-light w-24 text-right">undisclosed</div>
                    <div className="text-emerald-600 w-16 text-right">+312%</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[400px]">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-500 min-w-[120px]">Melati Drinks</div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-xl font-light w-24 text-right">undisclosed</div>
                    <div className="text-emerald-600 w-16 text-right">+211%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-500 min-w-[120px]">BioFieldSolutions</div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-xl font-light w-24 text-right">undisclosed</div>
                    <div className="text-emerald-600 w-16 text-right">+78%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-500 min-w-[120px]">AskDr</div>
                  <div className="flex items-baseline gap-6">
                    <div className="text-xl font-light w-24 text-right">Acquired</div>
                    <div className="text-emerald-600 w-16 text-right">+12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Column Section */}
        <section className="py-20 border-t border-neutral-100">
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
