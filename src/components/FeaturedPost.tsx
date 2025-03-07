import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { blogPosts } from "../lib/blog-data";

export function FeaturedPost() {
  // Use the featured report from our blog data
  const featuredPost =
    blogPosts.find((post) => post.slug === "featured-report") || blogPosts[0];

  return (
    <Card className="overflow-hidden bg-white shadow-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
          <div className="mb-6 flex items-center space-x-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden shadow-md">
              <img
                src="/inspector.jpg"
                alt={featuredPost.author}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Report by</p>
              <p className="font-display text-lg font-semibold text-moduspec-blue">
                {featuredPost.author}
              </p>
            </div>
          </div>

          <Badge variant="secondary" className="w-fit mb-4">
            Featured Report
          </Badge>

          <Link to={`/blog/${featuredPost.slug}`} className="group">
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-moduspec-blue mb-5 group-hover:text-moduspec-red transition-colors leading-tight">
              {featuredPost.title}
            </h1>
          </Link>

          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed max-w-xl">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{featuredPost.date}</span>
            <span>•</span>
            <span>{featuredPost.category}</span>
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
          <Link to={`/blog/${featuredPost.slug}`}>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
            <img
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
}
