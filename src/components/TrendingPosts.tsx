import { Link } from "react-router-dom"
import { Card } from "./ui/card"
import { blogPosts } from "../lib/blog-data"

export function TrendingPosts() {
  // Sort posts by date (newest first) and take the first 4
  const trendingPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-moduspec-blue mb-6">Trending Reports</h2>

      <div className="space-y-6">
        {trendingPosts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <div className="relative w-1/3 aspect-[4/3]">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-md">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            <div className="w-2/3">
              <h3 className="font-bold text-base mb-1">
                <Link to={`/blog/${post.slug}`} className="hover:text-moduspec-red transition-colors line-clamp-2">
                  {post.title}
                </Link>
              </h3>

              <div className="text-sm text-gray-600">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

