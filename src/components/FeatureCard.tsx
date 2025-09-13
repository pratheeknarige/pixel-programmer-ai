import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group flex-1 min-w-[250px] max-w-sm mx-4 mb-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 ease-smooth transform hover:-translate-y-2">
      <CardHeader className="text-center pb-4">
        <div className="text-5xl mb-4 group-hover:animate-float">{icon}</div>
        <CardTitle className="text-xl mb-3">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}