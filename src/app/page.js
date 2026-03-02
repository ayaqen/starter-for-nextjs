// app/page.js - Production Landing Page
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl">🐾</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                ClawGit
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-slate-300 hover:text-white transition">
                Features
              </Link>
              <Link href="#pricing" className="text-slate-300 hover:text-white transition">
                Pricing
              </Link>
              <Link href="/aigit">
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  Dashboard
                </Button>
              </Link>
              <Link href="/aigit">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm">
            ✨ AI-Powered Git Workflow
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Code Review That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Understands Your Vibe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Claude AI analyzes your commits, reviews code in real-time, and tracks your flow state. Ship better code, faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/aigit">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
                Start Free Trial →
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 text-lg px-8 py-6">
              ▶ Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              10 free AI operations
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Terminal Demo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-slate-900/50 border-slate-700 overflow-hidden shadow-2xl">
            <div className="bg-slate-900 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm space-y-2">
                <div className="text-purple-400">$ npm run vibe -- review</div>
                <div className="text-slate-500">Analyzing your code with Claude AI...</div>
                <div className="text-green-400 mt-3">✓ Code quality: 8.5/10</div>
                <div className="text-yellow-400">⚠ 2 potential issues found</div>
                <div className="text-blue-400">ℹ Flow state: Peak momentum detected</div>
                <div className="text-purple-400">✨ Vibe check: You're in the zone! 🔥</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="bg-slate-800 text-slate-300 border-slate-700 mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            AI-powered tools that integrate seamlessly into your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-4xl mb-3">🤖</div>
              <CardTitle className="text-white">AI Commit Messages</CardTitle>
              <CardDescription className="text-slate-400">
                Claude writes perfect conventional commits with 3 alternatives to choose from.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 rounded p-3 font-mono text-xs text-purple-400">
                feat(auth): implement OAuth 2.0
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-4xl mb-3">🔍</div>
              <CardTitle className="text-white">Live Code Review</CardTitle>
              <CardDescription className="text-slate-400">
                Real-time streaming review with severity scoring and actionable suggestions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-4xl mb-3">✨</div>
              <CardTitle className="text-white">Vibe Analysis</CardTitle>
              <CardDescription className="text-slate-400">
                Flow state tracking from your commit patterns. Know when you're in the zone.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-4xl mb-3">📝</div>
              <CardTitle className="text-white">PR Descriptions</CardTitle>
              <CardDescription className="text-slate-400">
                Auto-generate comprehensive titles, descriptions, and suggested labels.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-4xl mb-3">⚡</div>
              <CardTitle className="text-white">Git Hooks</CardTitle>
              <CardDescription className="text-slate-400">
                Pre-commit reviews, auto-filled messages, and post-commit insights.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-4xl mb-3">🛠️</div>
              <CardTitle className="text-white">CLI + Web UI</CardTitle>
              <CardDescription className="text-slate-400">
                Terminal commands or browser dashboard. Your choice.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="bg-slate-800 text-slate-300 border-slate-700 mb-4">Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-400">Start free, upgrade when ready</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free */}
          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <CardHeader className="p-0 pb-6">
              <div className="text-slate-400 text-sm mb-2">For Trying Out</div>
              <CardTitle className="text-3xl text-white">Free</CardTitle>
              <div className="text-5xl font-bold text-white mt-2">
                $0<span className="text-base text-slate-500 font-normal">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 mb-6 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> 10 AI operations/month</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Commit messages</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Basic vibe tracking</li>
                <li className="flex gap-2 text-slate-600"><span>✗</span> Code review</li>
              </ul>
              <Link href="/aigit" className="block">
                <Button variant="outline" className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="bg-gradient-to-b from-purple-900/50 to-slate-900/50 border-purple-500 p-6 relative scale-105 shadow-xl">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500">
              Most Popular
            </Badge>
            <CardHeader className="p-0 pb-6">
              <div className="text-purple-300 text-sm mb-2">For Developers</div>
              <CardTitle className="text-3xl text-white">Pro</CardTitle>
              <div className="text-5xl font-bold text-white mt-2">
                $15<span className="text-base text-slate-400 font-normal">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 mb-6 text-white text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> Unlimited operations</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Code review + scoring</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> PR descriptions</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Full vibe analysis</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Git hooks</li>
              </ul>
              <Link href="/aigit" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Free Trial
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <CardHeader className="p-0 pb-6">
              <div className="text-slate-400 text-sm mb-2">For Teams</div>
              <CardTitle className="text-3xl text-white">Team</CardTitle>
              <div className="text-5xl font-bold text-white mt-2">
                $50<span className="text-base text-slate-500 font-normal">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 mb-6 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> Everything in Pro</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Up to 5 developers</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Team analytics</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Priority support</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/50 p-12 text-center">
          <CardHeader className="p-0 pb-6">
            <CardTitle className="text-4xl md:text-5xl text-white mb-4">
              Ready to Ship Better Code?
            </CardTitle>
            <CardDescription className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join developers already using AI to write cleaner commits and catch bugs earlier.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Link href="/aigit">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg">
                Start Your Free Trial →
              </Button>
            </Link>
            <p className="text-slate-400 text-sm mt-4">No credit card required</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-xl">🐾</div>
              <span className="text-lg font-bold text-white">ClawGit</span>
            </div>
            <p className="text-slate-500 text-sm">© 2026 ClawGit. Built with Claude AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
