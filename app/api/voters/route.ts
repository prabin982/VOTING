import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this would fetch from a database
  const voters = [
    { id: "V001", name: "John Doe", email: "john@example.com", status: "Voted" },
    { id: "V002", name: "Jane Smith", email: "jane@example.com", status: "Not Voted" },
    { id: "V003", name: "Robert Johnson", email: "robert@example.com", status: "Voted" },
    { id: "V004", name: "Emily Davis", email: "emily@example.com", status: "Not Voted" },
    { id: "V005", name: "Michael Wilson", email: "michael@example.com", status: "Voted" },
  ]

  return NextResponse.json(voters)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // In a real app, this would save to a database and generate credentials
    // For demo, we'll just return success with the data
    return NextResponse.json(
      {
        success: true,
        voter: {
          id: `V${Math.floor(1000 + Math.random() * 9000)}`,
          ...data,
          status: "Not Voted",
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create voter" }, { status: 500 })
  }
}
