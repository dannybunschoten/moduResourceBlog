import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface BlogPostProps {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
    category: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative h-[200px] md:h-auto">
          <Link to={`/blog/${post.slug}`} className="block relative h-full">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="md:w-3/5 p-6">
          <Badge variant="outline" className="mb-3">
            {post.category}
          </Badge>

          <Link to={`/blog/${post.slug}`} className="group">
            <h3 className="font-display text-xl font-bold text-moduspec-blue mb-2 group-hover:text-moduspec-red transition-colors">
              {post.title}
            </h3>
          </Link>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-moduspec-blue hover:text-moduspec-red transition-colors group"
          >
            Read Report{" "}
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
