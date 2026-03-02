import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">

      {/* Navigation */}
      <nav className="border-b border-gray-200/80 backdrop-blur-sm sticky top-0 z-50 bg-white/80 dark:border-slate-800/50 dark:bg-slate-950/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl">🐾</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 text-transparent bg-clip-text">
                ClawGit
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition">
                Pricing
              </Link>
              <ThemeToggle />
              <Link href="/aigit">
                <Button variant="outline" className="border-purple-400 text-purple-600 hover:bg-purple-50 dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500/10">
                  Dashboard
                </Button>
              </Link>
              <Link href="/aigit">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30 px-4 py-2 text-sm">
            ✨ AI-Powered Git Workflow
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Code Review That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 dark:from-purple-400 dark:via-pink-500 dark:to-purple-600">
              Understands Your Vibe
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            Claude AI analyzes your commits, reviews code in real-time, and tracks your flow state. Ship better code, faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/aigit">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6">
                Start Free Trial →
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 dark:text-white dark:border-slate-600 dark:hover:bg-slate-800 text-lg px-8 py-6">
              ▶ Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-gray-500 dark:text-slate-400 text-sm">
            <div className="flex items-center gap-2"><span className="text-green-500">✓</span> No credit card required</div>
            <div className="flex items-center gap-2"><span className="text-green-500">✓</span> 10 free AI operations</div>
            <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Cancel anytime</div>
          </div>
        </div>

        {/* Terminal Demo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-gray-200 dark:border-slate-700 overflow-hidden shadow-xl dark:shadow-2xl bg-white dark:bg-slate-900/50">
            <div className="bg-gray-50 dark:bg-slate-900 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400 dark:text-slate-500 font-mono">terminal</span>
              </div>
              <div className="bg-gray-100 dark:bg-slate-950 rounded p-4 font-mono text-sm space-y-2">
                <div className="text-purple-600 dark:text-purple-400">$ npm run vibe -- review</div>
                <div className="text-gray-400 dark:text-slate-500">Analyzing your code with Claude AI...</div>
                <div className="text-green-600 dark:text-green-400 mt-3">✓ Code quality: 8.5/10</div>
                <div className="text-yellow-600 dark:text-yellow-400">⚠ 2 potential issues found</div>
                <div className="text-blue-600 dark:text-blue-400">ℹ Flow state: Peak momentum detected</div>
                <div className="text-purple-600 dark:text-purple-400">✨ Vibe check: You're in the zone! 🔥</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="bg-gray-100 text-gray-600 border-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            AI-powered tools that integrate seamlessly into your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🤖", title: "AI Commit Messages", desc: "Claude writes perfect conventional commits with 3 alternatives to choose from.", code: "feat(auth): implement OAuth 2.0" },
            { icon: "🔍", title: "Live Code Review", desc: "Real-time streaming review with severity scoring and actionable suggestions." },
            { icon: "✨", title: "Vibe Analysis", desc: "Flow state tracking from your commit patterns. Know when you're in the zone." },
            { icon: "📝", title: "PR Descriptions", desc: "Auto-generate comprehensive titles, descriptions, and suggested labels." },
            { icon: "⚡", title: "Git Hooks", desc: "Pre-commit reviews, auto-filled messages, and post-commit insights." },
            { icon: "🛠️", title: "CLI + Web UI", desc: "Terminal commands or browser dashboard. Your choice." },
          ].map((f) => (
            <Card key={f.title} className="bg-white border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-md dark:bg-slate-900/50 dark:border-slate-800 dark:hover:border-purple-500/50 dark:shadow-none transition-all">
              <CardHeader>
                <div className="text-4xl mb-3">{f.icon}</div>
                <CardTitle className="text-gray-900 dark:text-white">{f.title}</CardTitle>
                <CardDescription className="text-gray-500 dark:text-slate-400">{f.desc}</CardDescription>
              </CardHeader>
              {f.code && (
                <CardContent>
                  <div className="bg-gray-100 dark:bg-slate-950 rounded p-3 font-mono text-xs text-purple-600 dark:text-purple-400">
                    {f.code}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="bg-gray-100 text-gray-600 border-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 mb-4">Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-500 dark:text-slate-400">Start free, upgrade when ready</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free */}
          <Card className="bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 p-6 shadow-sm">
            <CardHeader className="p-0 pb-6">
              <div className="text-gray-500 dark:text-slate-400 text-sm mb-2">For Trying Out</div>
              <CardTitle className="text-3xl text-gray-900 dark:text-white">Free</CardTitle>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mt-2">
                $0<span className="text-base text-gray-400 dark:text-slate-500 font-normal">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 mb-6 text-gray-600 dark:text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-green-500">✓</span> 10 AI operations/month</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Commit messages</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Basic vibe tracking</li>
                <li className="flex gap-2 text-gray-300 dark:text-slate-600"><span>✗</span> Code review</li>
              </ul>
              <Link href="/aigit" className="block">
                <Button variant="outline" className="w-full border-gray-300 dark:border-slate-600">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="bg-gradient-to-b from-purple-50 to-white border-purple-300 dark:from-purple-900/50 dark:to-slate-900/50 dark:border-purple-500 p-6 relative scale-105 shadow-xl">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white">Most Popular</Badge>
            <CardHeader className="p-0 pb-6">
              <div className="text-purple-600 dark:text-purple-300 text-sm mb-2">For Developers</div>
              <CardTitle className="text-3xl text-gray-900 dark:text-white">Pro</CardTitle>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mt-2">
                $15<span className="text-base text-gray-400 dark:text-slate-400 font-normal">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 mb-6 text-gray-700 dark:text-white text-sm">
                <li className="flex gap-2"><span className="text-green-500">✓</span> Unlimited operations</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Code review + scoring</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> PR descriptions</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Full vibe analysis</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Git hooks</li>
              </ul>
              <Link href="/aigit" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Start Free Trial</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="bg-white border-gray-200 dark:bg-slate-900/50 dark:border-slate-800 p-6 shadow-sm">
            <CardHeader className="p-0 pb-6">
              <div className="text-gray-500 dark:text-slate-400 text-sm mb-2">For Teams</div>
              <CardTitle className="text-3xl text-gray-900 dark:text-white">Team</CardTitle>
              <div className="text-5xl font-bold text-gray-900 dark:text-white mt-2">
                $50<span className="text-base text-gray-400 dark:text-slate-500 font-normal">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 mb-6 text-gray-600 dark:text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-green-500">✓</span> Everything in Pro</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Up to 5 developers</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Team analytics</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Priority support</li>
              </ul>
              <Button variant="outline" className="w-full border-gray-300 dark:border-slate-600">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 dark:from-purple-900/30 dark:to-pink-900/30 dark:border-purple-500/50 p-12 text-center shadow-lg dark:shadow-none">
          <CardHeader className="p-0 pb-6">
            <CardTitle className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Ready to Ship Better Code?
            </CardTitle>
            <CardDescription className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Join developers already using AI to write cleaner commits and catch bugs earlier.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Link href="/aigit">
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-6 text-lg">
                Start Your Free Trial →
              </Button>
            </Link>
            <p className="text-gray-400 dark:text-slate-400 text-sm mt-4">No credit card required</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-800 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-xl">🐾</div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">ClawGit</span>
            </div>
            <p className="text-gray-400 dark:text-slate-500 text-sm">© 2026 ClawGit. Built with Claude AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
