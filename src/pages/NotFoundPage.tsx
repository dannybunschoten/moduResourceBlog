import { Link } from "react-router-dom"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto p-10 text-center">
          <h1 className="text-4xl font-bold text-moduspec-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
          <Button>
            <Link to="/">Return to Home</Link>
          </Button>
        </Card>
      </div>
    </div>
  )
}

