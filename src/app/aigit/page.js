"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
  const [diff, setDiff] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [usageCount, setUsageCount] = useState(3)
  const maxFreeOps = 10

  const handleReview = async () => {
    if (!diff.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/aigit/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diff, vibeMode: 'balanced' })
      })
      const data = await res.json()
      setResult(data)
      setUsageCount(prev => prev + 1)
    } catch (error) {
      console.error('Review failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCommitMessage = async () => {
    if (!diff.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/aigit/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diff })
      })
      const data = await res.json()
      setResult(data)
      setUsageCount(prev => prev + 1)
    } catch (error) {
      console.error('Commit message generation failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const usagePercentage = (usageCount / maxFreeOps) * 100
  const isNearLimit = usageCount >= maxFreeOps * 0.8

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">

      {/* Header */}
      <header className="border-b border-gray-200/80 backdrop-blur-sm sticky top-0 z-50 bg-white/80 dark:border-slate-800/50 dark:bg-slate-950/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🐾</div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 text-transparent bg-clip-text">
                ClawGit
              </span>
              <Badge variant="outline" className="border-purple-400 text-purple-600 dark:border-purple-500 dark:text-purple-400">
                Free Plan
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500 dark:text-slate-400">
                {usageCount} / {maxFreeOps} operations used
              </div>
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">

        {/* Usage Warning */}
        {isNearLimit && (
          <Card className="mb-6 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-500/50">
            <CardHeader>
              <CardTitle className="text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <span>⚠️</span> You're running low on free operations
              </CardTitle>
              <CardDescription className="text-yellow-600 dark:text-yellow-200/80">
                Upgrade to Pro for unlimited AI operations and unlock all features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white dark:text-slate-900">
                Upgrade Now — $15/month
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Usage Progress */}
        <Card className="mb-6 bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 shadow-sm dark:shadow-none">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-slate-400">Free Tier Usage</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {usageCount} / {maxFreeOps}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  isNearLimit
                    ? 'bg-gradient-to-r from-yellow-400 to-red-500'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}
                style={{ width: `${Math.min(usagePercentage, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="review" className="space-y-6">
          <TabsList className="bg-gray-100 border border-gray-200 dark:bg-slate-900 dark:border-slate-800">
            <TabsTrigger value="review" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-600">
              🔍 Code Review
            </TabsTrigger>
            <TabsTrigger value="commit" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-600">
              🤖 Commit Message
            </TabsTrigger>
            <TabsTrigger value="pr" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-600">
              📝 PR Description
            </TabsTrigger>
            <TabsTrigger value="vibe" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-600">
              ✨ Vibe Session
            </TabsTrigger>
          </TabsList>

          {/* Code Review Tab */}
          <TabsContent value="review" className="space-y-4">
            <Card className="bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 shadow-sm dark:shadow-none">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">AI Code Review</CardTitle>
                <CardDescription className="text-gray-500 dark:text-slate-400">
                  Paste your git diff and get instant AI-powered code review with severity scoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder={`Paste your git diff here...\n\nExample:\ndiff --git a/src/app.js b/src/app.js\n--- a/src/app.js\n+++ b/src/app.js\n@@ -10,7 +10,7 @@ function handleClick() {\n-  console.log('clicked')\n+  // TODO: implement proper logging`}
                  className="min-h-[300px] bg-gray-50 border-gray-300 text-gray-800 placeholder:text-gray-400 font-mono text-sm dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300 dark:placeholder:text-slate-600"
                  value={diff}
                  onChange={(e) => setDiff(e.target.value)}
                />
                <Button
                  onClick={handleReview}
                  disabled={loading || !diff.trim() || usageCount >= maxFreeOps}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {loading ? 'Analyzing...' : usageCount >= maxFreeOps ? 'Upgrade to Continue' : 'Get AI Review'}
                </Button>

                {result && result.score !== undefined && (
                  <Card className="bg-gray-50 border-gray-200 dark:bg-slate-950 dark:border-slate-700 mt-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-gray-900 dark:text-white">Review Results</CardTitle>
                        <Badge className={`text-white ${
                          result.score >= 8 ? 'bg-green-500' :
                          result.score >= 6 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                          Score: {result.score}/10
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {result.summary && (
                        <p className="text-gray-600 dark:text-slate-300 text-sm">{result.summary}</p>
                      )}
                      {result.issues && result.issues.length > 0 ? (
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">Issues Found:</h4>
                          {result.issues.map((issue, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-3 rounded border-l-4 border-yellow-400 dark:border-yellow-500 shadow-sm dark:shadow-none">
                              <div className="text-sm text-gray-700 dark:text-slate-300">
                                {typeof issue === 'object' ? issue.description : issue}
                              </div>
                              {issue.suggestion && (
                                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">→ {issue.suggestion}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-green-600 dark:text-green-400">✓ No issues found!</div>
                      )}
                      {result.vibeCheck && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-500/30">
                          <div className="text-purple-600 dark:text-purple-300 font-medium mb-1">✨ Vibe Check</div>
                          <div className="text-gray-600 dark:text-slate-300 text-sm">{result.vibeCheck}</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Commit Message Tab */}
          <TabsContent value="commit" className="space-y-4">
            <Card className="bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 shadow-sm dark:shadow-none">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Generate Commit Message</CardTitle>
                <CardDescription className="text-gray-500 dark:text-slate-400">
                  Get AI-generated conventional commit messages with alternatives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your git diff here..."
                  className="min-h-[300px] bg-gray-50 border-gray-300 text-gray-800 placeholder:text-gray-400 font-mono text-sm dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300 dark:placeholder:text-slate-600"
                  value={diff}
                  onChange={(e) => setDiff(e.target.value)}
                />
                <Button
                  onClick={handleCommitMessage}
                  disabled={loading || !diff.trim() || usageCount >= maxFreeOps}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {loading ? 'Generating...' : usageCount >= maxFreeOps ? 'Upgrade to Continue' : 'Generate Message'}
                </Button>

                {result && result.message && (
                  <Card className="bg-gray-50 border-gray-200 dark:bg-slate-950 dark:border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white text-base">Suggested Commits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[result.message, ...(result.alternatives || [])].map((msg, i) => (
                        <div
                          key={i}
                          className="bg-white dark:bg-slate-900 p-4 rounded border border-gray-200 hover:border-purple-400 dark:border-slate-700 dark:hover:border-purple-500 transition cursor-pointer shadow-sm dark:shadow-none"
                          onClick={() => navigator.clipboard?.writeText(msg)}
                        >
                          <div className="font-mono text-sm text-purple-600 dark:text-purple-400">{msg}</div>
                          {i === 0 && (
                            <Badge className="mt-2 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">Primary</Badge>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* PR Description Tab */}
          <TabsContent value="pr" className="space-y-4">
            <Card className="bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 shadow-sm dark:shadow-none">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Generate PR Description</CardTitle>
                <CardDescription className="text-gray-500 dark:text-slate-400">
                  Auto-generate comprehensive PR titles, descriptions, and labels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-slate-400 text-sm">
                  This feature requires a Pro account. Upgrade to unlock unlimited PR generation.
                </p>
                <Button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vibe Session Tab */}
          <TabsContent value="vibe" className="space-y-4">
            <Card className="bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 shadow-sm dark:shadow-none">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Vibe Session Analysis</CardTitle>
                <CardDescription className="text-gray-500 dark:text-slate-400">
                  Track your coding flow state and momentum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-slate-950 p-6 rounded border border-gray-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 dark:text-slate-400">Current Flow State</span>
                      <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-500 dark:text-white">Peak 🔥</Badge>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-3 mb-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '75%' }} />
                    </div>
                    <div className="text-gray-400 dark:text-slate-500 text-sm">Based on your recent commit patterns</div>
                  </div>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">
                    Upgrade to Pro for detailed vibe analytics and flow state tracking.
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Upgrade to Pro
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CLI Instructions */}
        <Card className="mt-8 bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 shadow-sm dark:shadow-none">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
              <span>⚡</span> Use from Terminal
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-slate-400">
              Pro users get CLI access for seamless workflow integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 dark:bg-slate-950 rounded p-4 font-mono text-sm space-y-2 border border-gray-200 dark:border-transparent">
              <div className="text-purple-600 dark:text-purple-400">$ npm run vibe -- review</div>
              <div className="text-purple-600 dark:text-purple-400">$ npm run vibe -- pr</div>
              <div className="text-purple-600 dark:text-purple-400">$ npm run vibe -- session</div>
              <div className="text-gray-400 dark:text-slate-500 mt-4">Install git hooks: npm run vibe:setup</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
