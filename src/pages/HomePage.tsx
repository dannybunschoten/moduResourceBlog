import { FeaturedPost } from "../components/FeaturedPost";
import { BlogPost } from "../components/BlogPost";
import { blogPosts } from "../lib/blog-data";
import CustomerInformation from "../components/CustomerInformation";

export default function HomePage() {
  // Only show the first 4 posts on the homepage
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <FeaturedPost />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-moduspec-blue">
                  Latest Reports
                </h2>
                <p className="text-gray-600 mt-2">
                  View our most recent technical inspections and assessments
                </p>
              </div>

              <div className="space-y-6">
                {latestPosts.map((post) => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <CustomerInformation />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
