import { NextResponse } from "next/server"
import { mockCandidates } from "@/lib/mock-data"

export async function GET() {
  // In a real app, this would fetch from a database
  return NextResponse.json(mockCandidates)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.position) {
      return NextResponse.json({ error: "Name and position are required" }, { status: 400 })
    }

    // In a real app, this would save to a database
    // For demo, we'll just return success with the data
    return NextResponse.json(
      {
        success: true,
        candidate: {
          id: `new-${Date.now()}`,
          ...data,
          photo: data.photo || "/placeholder.svg?height=300&width=300",
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create candidate" }, { status: 500 })
  }
}
