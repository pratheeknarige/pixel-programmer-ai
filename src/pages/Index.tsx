import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/FeatureCard"
import { CodeDemo } from "@/components/CodeDemo"

const scrollToDemo = () => {
  const demoElement = document.getElementById('demo')
  if (demoElement) {
    demoElement.scrollIntoView({ behavior: 'smooth' })
  }
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-hero text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center rounded-b-[30px] sm:rounded-b-[50px] mb-12 sm:mb-16">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            AI-Powered Code Learning & Debugging Assistant
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed opacity-95 px-2">
            Learn programming faster with intelligent code analysis, automated debugging suggestions, and interactive tutorials.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToDemo}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full font-semibold"
          >
            Try It Now
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6">
        {/* Features Section */}
        <section className="mb-16 sm:mb-20">
          <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6">
            <FeatureCard
              icon="💻"
              title="Code Analysis & Explanation"
              description="Understand your code with detailed explanations and concept highlights."
            />
            <FeatureCard
              icon="🐞"
              title="Automated Error Detection"
              description="Get instant feedback on errors and suggestions to fix bugs efficiently."
            />
            <FeatureCard
              icon="🧠"
              title="Exercise Generation"
              description="Practice with programming exercises tailored to your skill level."
            />
            <FeatureCard
              icon="📚"
              title="Interactive Tutorials"
              description="Follow step-by-step guided lessons with real-time feedback."
            />
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="mb-16 sm:mb-20">
          <CodeDemo />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-border text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} AI-Powered Code Learning Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
