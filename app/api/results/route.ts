import { NextResponse } from "next/server"
import { mockElectionData } from "@/lib/mock-data"

export async function GET() {
  // In a real app, this would calculate results from the database
  return NextResponse.json(mockElectionData)
}
