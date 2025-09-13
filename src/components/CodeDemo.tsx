"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const defaultCode = `# Paste your Python code here
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)`

export function CodeDemo() {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState("")

  const analyzeCode = () => {
    if (!code.trim()) {
      setOutput("Please enter some code to analyze.")
      return
    }

    // Simple simulated analysis
    if (code.includes('factorial')) {
      setOutput(`This function calculates the factorial of a number recursively.
- Base case: when n == 0, returns 1.
- Recursive case: multiplies n by factorial(n-1).
- Note: Ensure input is a non-negative integer to avoid infinite recursion.`)
    } else if (code.includes('for') || code.includes('while')) {
      setOutput(`Your code contains loops.
- Make sure loop conditions are correct to avoid infinite loops.
- Consider edge cases where loops might not execute.`)
    } else if (code.includes('def ')) {
      setOutput(`Function detected in your code.
- Ensure proper parameter handling and return values.
- Consider edge cases and input validation.
- Add docstrings for better documentation.`)
    } else {
      setOutput("Code analysis completed. Try adding functions, loops, or other constructs for more detailed feedback.")
    }
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-card bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold mb-2">Try Code Analysis</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="min-h-[180px] mb-6 text-sm"
          placeholder="Enter your code here..."
          spellCheck={false}
        />
        <div className="text-center mb-6">
          <Button 
            variant="analyze" 
            size="lg" 
            onClick={analyzeCode}
            className="px-10 py-3 text-lg rounded-full"
          >
            Analyze Code
          </Button>
        </div>
        <div className="bg-slate-900 text-green-400 p-6 rounded-lg min-h-[120px] max-h-[300px] overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm font-mono">
            {output || "Analysis results will appear here..."}
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}