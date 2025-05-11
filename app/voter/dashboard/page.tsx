"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, CheckCircle2 } from "lucide-react"
import { mockCandidates } from "@/lib/mock-data"
import VoterNavbar from "@/components/voter-navbar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function VoterDashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVote = async () => {
    if (!selectedCandidate) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setHasVoted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <VoterNavbar />

      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Voter Dashboard</h1>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {hasVoted ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" />
              </div>
              <CardTitle className="text-2xl">Thank You for Voting!</CardTitle>
              <CardDescription>
                Your vote has been successfully recorded. The results will be announced after the election closes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="bg-emerald-50 border-emerald-200">
                <AlertTitle>Vote Confirmation</AlertTitle>
                <AlertDescription>
                  Your vote has been securely recorded. Each voter can only vote once.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/">
                <Button variant="outline">Return to Home</Button>
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Cast Your Vote</CardTitle>
              <CardDescription>Select your preferred candidate for the position of President</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedCandidate || ""} onValueChange={setSelectedCandidate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockCandidates.map((candidate) => (
                    <div key={candidate.id} className="relative">
                      <RadioGroupItem value={candidate.id} id={candidate.id} className="peer sr-only" />
                      <Label
                        htmlFor={candidate.id}
                        className="flex flex-col border rounded-lg p-4 cursor-pointer hover:bg-slate-50 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-emerald-500"
                      >
                        <div className="aspect-square w-full mb-4 bg-slate-100 rounded-md overflow-hidden">
                          <img
                            src={candidate.photo || "/placeholder.svg"}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="font-medium text-lg">{candidate.name}</div>
                        <div className="text-sm text-slate-500">{candidate.position}</div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleVote}
                disabled={!selectedCandidate || isSubmitting}
                className="bg-emerald-700 hover:bg-emerald-600"
              >
                {isSubmitting ? "Submitting..." : "Submit Vote"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
