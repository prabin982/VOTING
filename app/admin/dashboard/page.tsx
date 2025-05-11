"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChevronLeft, Users, Award, BarChart3, UserPlus } from "lucide-react"
import AdminNavbar from "@/components/admin-navbar"
import { mockElectionData, mockCandidates } from "@/lib/mock-data"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AdminNavbar />

      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-3xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="voters">Voters</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
                  <Award className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockCandidates.length}</div>
                  <p className="text-xs text-slate-500">Across all positions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Registered Voters</CardTitle>
                  <Users className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-slate-500">Total eligible voters</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Votes Cast</CardTitle>
                  <BarChart3 className="h-4 w-4 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98</div>
                  <p className="text-xs text-slate-500">62.8% turnout</p>
                </CardContent>
              </Card>
            </div>

            <Card className="col-span-full">
              <CardHeader>
                <CardTitle>Voting Progress</CardTitle>
                <CardDescription>Real-time voting statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockElectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="votes" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Manage Candidates</h2>
              <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Add Candidate
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCandidates.map((candidate) => (
                <Card key={candidate.id} className="overflow-hidden">
                  <div className="aspect-square relative bg-slate-100">
                    <img
                      src={candidate.photo || "/placeholder.svg"}
                      alt={candidate.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{candidate.name}</h3>
                    <p className="text-sm text-slate-500">{candidate.position}</p>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" className="flex-1">
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="voters" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Manage Voters</h2>
              <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Add Voter
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Registered Voters</CardTitle>
                <CardDescription>Manage voter accounts and access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="p-3 text-left font-medium">Voter ID</th>
                        <th className="p-3 text-left font-medium">Name</th>
                        <th className="p-3 text-left font-medium">Email</th>
                        <th className="p-3 text-left font-medium">Status</th>
                        <th className="p-3 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: "V001", name: "John Doe", email: "john@example.com", status: "Voted" },
                        { id: "V002", name: "Jane Smith", email: "jane@example.com", status: "Not Voted" },
                        { id: "V003", name: "Robert Johnson", email: "robert@example.com", status: "Voted" },
                        { id: "V004", name: "Emily Davis", email: "emily@example.com", status: "Not Voted" },
                        { id: "V005", name: "Michael Wilson", email: "michael@example.com", status: "Voted" },
                      ].map((voter) => (
                        <tr key={voter.id} className="border-b">
                          <td className="p-3">{voter.id}</td>
                          <td className="p-3">{voter.name}</td>
                          <td className="p-3">{voter.email}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                voter.status === "Voted" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {voter.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="destructive" size="sm">
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Election Results</CardTitle>
                <CardDescription>Current voting statistics and results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="h-80">
                    <h3 className="text-lg font-medium mb-4 text-center">Vote Distribution</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockElectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="votes" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="h-80">
                    <h3 className="text-lg font-medium mb-4 text-center">Percentage Breakdown</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={mockElectionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="votes"
                        >
                          {mockElectionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Results</CardTitle>
                <CardDescription>Complete breakdown of all votes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="p-3 text-left font-medium">Candidate</th>
                        <th className="p-3 text-left font-medium">Position</th>
                        <th className="p-3 text-left font-medium">Votes</th>
                        <th className="p-3 text-left font-medium">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockElectionData.map((candidate) => (
                        <tr key={candidate.id} className="border-b">
                          <td className="p-3">{candidate.name}</td>
                          <td className="p-3">President</td>
                          <td className="p-3">{candidate.votes}</td>
                          <td className="p-3">
                            {((candidate.votes / mockElectionData.reduce((sum, c) => sum + c.votes, 0)) * 100).toFixed(
                              1,
                            )}
                            %
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
