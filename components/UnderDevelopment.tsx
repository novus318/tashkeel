import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { Progress } from "./ui/progress"


const UnderDevelopment = ({percentage=20}:any) => {
  return (
    <div className="max-w-md mx-auto px-4 py-8 mt-28">
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Under Development</h3>
            <p className="text-muted-foreground mb-4">
              We&apos;re working hard to bring you advanced verification options. This feature will be available soon!
            </p>
            <div className="w-full max-w-xs bg-secondary h-2 rounded-full overflow-hidden">
            <Progress value={percentage}/>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{percentage}% Complete</p>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <Button className="w-full" asChild>
          <Link href="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default UnderDevelopment
