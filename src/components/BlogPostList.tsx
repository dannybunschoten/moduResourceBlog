import { BlogPost } from "./BlogPost"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import { blogPosts } from "../lib/blog-data"

export function BlogPostList() {
  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}

      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          <Button variant="outline" className="w-10 h-10 p-0 rounded-full bg-white">
            <span className="sr-only">Page 1</span>1
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
            <span className="sr-only">Page 2</span>2
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
            <span className="sr-only">Page 3</span>3
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
            <span className="sr-only">Page 4</span>4
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
            <span className="sr-only">Next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

