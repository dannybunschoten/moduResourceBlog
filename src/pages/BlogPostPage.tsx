"use client";

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Carousel } from "../components/ui/carousel";
import {
  getBlogPostBySlug,
  getPreviousBlogPost,
  getNextBlogPost,
  type Photo,
  type ReportSection,
} from "../lib/blog-data";
import { BlogContent } from "../components/BlogContent";

// Helper function to collect all images from sections and subsections
const collectAllImages = (sections: ReportSection[]): Photo[] => {
  const allImages: Photo[] = [];

  sections.forEach((section) => {
    // Add images from current section
    if (section.images && section.images.length > 0) {
      allImages.push(...section.images);
    }

    // Add images from subsections
    if (section.subsections) {
      section.subsections.forEach((subsection) => {
        if (subsection.images && subsection.images.length > 0) {
          allImages.push(...subsection.images);
        }
      });
    }
  });

  return allImages;
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState(
    slug ? getBlogPostBySlug(slug) : null
  );
  const [prevPost, setPrevPost] = useState(
    slug ? getPreviousBlogPost(slug) : null
  );
  const [nextPost, setNextPost] = useState(slug ? getNextBlogPost(slug) : null);
  const [allImages, setAllImages] = useState<Photo[]>([]);

  useEffect(() => {
    if (slug) {
      const post = getBlogPostBySlug(slug);
      if (!post) {
        return;
      }
      setCurrentPost(post);
      setPrevPost(getPreviousBlogPost(slug));
      setNextPost(getNextBlogPost(slug));

      // Collect all images from sections and subsections
      if (post.sections) {
        setAllImages(collectAllImages(post.sections));
      }
    }
  }, [slug, navigate]);

  if (!currentPost) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-10">
          <h1 className="text-2xl font-bold mb-4">Report not found</h1>
          <p className="mb-6">
            The report you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/" className="text-moduspec-blue hover:text-moduspec-red">
            Return to homepage
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden">
        <div className="relative h-h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-6 md:p-10">
          <Badge variant="secondary" className="mb-4">
            {currentPost.category}
          </Badge>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            {currentPost.title}
          </h1>

          <ul className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
            <li>
              <strong>Surveyor:</strong> {currentPost.author}
            </li>
            <li>
              <strong>Contributor:</strong> Peter Wilke
            </li>
            <li>
              <strong>Date:</strong> {currentPost.date}
            </li>
          </ul>

          <div className="prose prose-lg prose-headings:text-moduspec-blue max-w-[100%] prose-img:m-0">
            {/* Use our structured BlogContent component */}
            {currentPost.sections && (
              <BlogContent sections={currentPost.sections} />
            )}
          </div>

          {allImages.length > 0 && (
            <div className="mt-10 max-w-3xl mx-auto prose prose-lg prose-img:m-0">
              <h2 className="text-moduspec-blue">Attachments</h2>
              <Carousel
                images={allImages.map((img) => img.url)}
                captions={allImages.map((img) => img.caption)}
              />
            </div>
          )}
        </div>
      </Card>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {prevPost && (
          <Card className="p-6">
            <Badge variant="outline" className="mb-2 uppercase">
              PREVIOUS
            </Badge>
            <Link
              to={`/blog/${prevPost.slug}`}
              className="block text-lg font-bold mb-1 hover:text-secondary transition-colors"
            >
              {prevPost.title}
            </Link>
            <span className="text-sm text-muted-foreground">
              {prevPost.date}
            </span>
          </Card>
        )}

        {nextPost && (
          <Card className="p-6 md:justify-self-end md:col-start-2 md:w-full">
            <Badge variant="outline" className="mb-2 uppercase">
              NEXT
            </Badge>
            <Link
              to={`/blog/${nextPost.slug}`}
              className="block text-lg font-bold mb-1 hover:text-secondary transition-colors"
            >
              {nextPost.title}
            </Link>
            <span className="text-sm text-muted-foreground">
              {nextPost.date}
            </span>
          </Card>
        )}
      </div>
    </div>
  );
}
