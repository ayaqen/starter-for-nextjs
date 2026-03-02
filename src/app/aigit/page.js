// app/aigit/page.js - Enhanced Dashboard
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  const [diff, setDiff] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [usageCount, setUsageCount] = useState(3) // Mock usage counter
  const maxFreeOps = 10

  const handleReview = async () => {
    if (!diff.trim()) return
    
    setLoading(true)
    try {
      const res = await fetch('/api/aigit/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diff, vibeMode: true })
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🐾</div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                ClawGit
              </span>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                Free Plan
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-400">
                {usageCount} / {maxFreeOps} operations used
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Usage Warning */}
        {isNearLimit && (
          <Card className="mb-6 bg-yellow-900/20 border-yellow-500/50">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-2">
                <span>⚠️</span>
                You're running low on free operations
              </CardTitle>
              <CardDescription className="text-yellow-200/80">
                Upgrade to Pro for unlimited AI operations and unlock all features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                Upgrade Now - $15/month
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Usage Progress */}
        <Card className="mb-6 bg-slate-900/50 border-slate-800">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Free Tier Usage</span>
              <span className="text-sm font-medium text-white">
                {usageCount} / {maxFreeOps}
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all ${
                  isNearLimit 
                    ? 'bg-gradient-to-r from-yellow-500 to-red-500' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}
                style={{ width: `${Math.min(usagePercentage, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="review" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="review" className="data-[state=active]:bg-purple-600">
              🔍 Code Review
            </TabsTrigger>
            <TabsTrigger value="commit" className="data-[state=active]:bg-purple-600">
              🤖 Commit Message
            </TabsTrigger>
            <TabsTrigger value="pr" className="data-[state=active]:bg-purple-600">
              📝 PR Description
            </TabsTrigger>
            <TabsTrigger value="vibe" className="data-[state=active]:bg-purple-600">
              ✨ Vibe Session
            </TabsTrigger>
          </TabsList>

          {/* Code Review Tab */}
          <TabsContent value="review" className="space-y-4">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">AI Code Review</CardTitle>
                <CardDescription className="text-slate-400">
                  Paste your git diff and get instant AI-powered code review with severity scoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your git diff here...

Example:
diff --git a/src/app.js b/src/app.js
index 1234567..abcdefg 100644
--- a/src/app.js
+++ b/src/app.js
@@ -10,7 +10,7 @@ function handleClick() {
-  console.log('clicked')
+  // TODO: implement proper logging
"
                  className="min-h-[300px] bg-slate-950 border-slate-700 text-slate-300 font-mono text-sm"
                  value={diff}
                  onChange={(e) => setDiff(e.target.value)}
                />
                <Button 
                  onClick={handleReview}
                  disabled={loading || !diff.trim() || usageCount >= maxFreeOps}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {loading ? 'Analyzing...' : usageCount >= maxFreeOps ? 'Upgrade to Continue' : 'Get AI Review'}
                </Button>

                {result && result.score && (
                  <Card className="bg-slate-950 border-slate-700 mt-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">Review Results</CardTitle>
                        <Badge className={`${
                          result.score >= 8 ? 'bg-green-500' :
                          result.score >= 6 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}>
                          Score: {result.score}/10
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {result.issues && result.issues.length > 0 ? (
                        <div className="space-y-2">
                          <h4 className="font-medium text-white">Issues Found:</h4>
                          {result.issues.map((issue, i) => (
                            <div key={i} className="bg-slate-900 p-3 rounded border-l-4 border-yellow-500">
                              <div className="text-sm text-slate-300">{issue}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-green-400">✓ No issues found!</div>
                      )}
                      
                      {result.vibe && (
                        <div className="bg-purple-900/20 p-4 rounded border border-purple-500/30">
                          <div className="text-purple-300 font-medium mb-2">✨ Vibe Check</div>
                          <div className="text-slate-300 text-sm">{result.vibe}</div>
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
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Generate Commit Message</CardTitle>
                <CardDescription className="text-slate-400">
                  Get AI-generated conventional commit messages with alternatives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your git diff here..."
                  className="min-h-[300px] bg-slate-950 border-slate-700 text-slate-300 font-mono text-sm"
                  value={diff}
                  onChange={(e) => setDiff(e.target.value)}
                />
                <Button 
                  onClick={handleCommitMessage}
                  disabled={loading || !diff.trim() || usageCount >= maxFreeOps}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {loading ? 'Generating...' : usageCount >= maxFreeOps ? 'Upgrade to Continue' : 'Generate Message'}
                </Button>

                {result && result.message && (
                  <Card className="bg-slate-950 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-base">Suggested Commits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[result.message, ...(result.alternatives || [])].map((msg, i) => (
                        <div key={i} className="bg-slate-900 p-4 rounded border border-slate-700 hover:border-purple-500 transition cursor-pointer">
                          <div className="font-mono text-sm text-purple-400">{msg}</div>
                          {i === 0 && (
                            <Badge className="mt-2 bg-purple-500/20 text-purple-300">Primary</Badge>
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
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Generate PR Description</CardTitle>
                <CardDescription className="text-slate-400">
                  Auto-generate comprehensive PR titles, descriptions, and labels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-slate-400 text-sm">
                  This feature requires a Pro account. Upgrade to unlock unlimited PR generation.
                </div>
                <Button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vibe Session Tab */}
          <TabsContent value="vibe" className="space-y-4">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Vibe Session Analysis</CardTitle>
                <CardDescription className="text-slate-400">
                  Track your coding flow state and momentum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-950 p-6 rounded">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-400">Current Flow State</span>
                      <Badge className="bg-purple-500">Peak 🔥</Badge>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3 mb-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '75%'}} />
                    </div>
                    <div className="text-slate-500 text-sm">Based on your recent commit patterns</div>
                  </div>
                  
                  <div className="text-slate-400 text-sm">
                    Upgrade to Pro for detailed vibe analytics and flow state tracking.
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                    Upgrade to Pro
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CLI Instructions */}
        <Card className="mt-8 bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <span>⚡</span>
              Use from Terminal
            </CardTitle>
            <CardDescription className="text-slate-400">
              Pro users get CLI access for seamless workflow integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-950 rounded p-4 font-mono text-sm space-y-2">
              <div className="text-purple-400">$ npm run vibe -- review</div>
              <div className="text-purple-400">$ npm run vibe -- pr</div>
              <div className="text-purple-400">$ npm run vibe -- session</div>
              <div className="text-slate-500 mt-4">
                Install git hooks: npm run vibe:setup
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
