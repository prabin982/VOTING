import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <header className="container mx-auto py-6">
        <h1 className="text-3xl font-bold text-slate-800">E-Voting System</h1>
      </header>

      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Secure Online Voting Platform</h2>
          <p className="text-xl text-slate-600 mb-8">A modern solution for transparent and secure elections</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center bg-slate-800 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Admin Portal</CardTitle>
              <CardDescription className="text-slate-300">Manage elections and view results</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-8 text-center">
              <p className="mb-6 text-slate-600">Add candidates, manage voters, and view real-time election results</p>
              <Link href="/admin/login">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
                  Access Admin Portal
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center bg-emerald-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Voter Portal</CardTitle>
              <CardDescription className="text-emerald-100">Cast your vote securely</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-8 text-center">
              <p className="mb-6 text-slate-600">Login with your credentials and cast your vote in active elections</p>
              <Link href="/voter/login">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-600">
                  Access Voter Portal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-slate-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} E-Voting System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
