"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function VoterNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, this would clear session/auth state
    router.push("/")
  }

  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/voter/dashboard" className="font-bold text-xl">
              E-Voting Portal
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/voter/dashboard" className="px-3 py-2 rounded-md hover:bg-emerald-600">
              Active Elections
            </Link>
            <Link href="/voter/profile" className="px-3 py-2 rounded-md hover:bg-emerald-600">
              My Profile
            </Link>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white hover:bg-emerald-600"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-emerald-700 pb-4 px-4">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/voter/dashboard"
              className="px-3 py-2 rounded-md hover:bg-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Active Elections
            </Link>
            <Link
              href="/voter/profile"
              className="px-3 py-2 rounded-md hover:bg-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </Link>
            <Button
              variant="ghost"
              className="flex items-center gap-2 justify-start text-white hover:bg-emerald-600"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
