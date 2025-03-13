import type { ReportSection, Photo } from "../lib/blog-data";
import { Carousel } from "../components/ui/carousel";
import { ActionTable } from "./ActionTable";

interface BlogContentProps {
  sections: ReportSection[];
}

// Helper component to render a carousel of images
const ImageCarousel = ({ images }: { images: Photo[] }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="my-6">
      <Carousel
        images={images.map((img) => img.url)}
        captions={images.map((img) => img.caption)}
      />
    </div>
  );
};

export function BlogContent({ sections }: BlogContentProps) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.title} className="mb-10 w-full">
          {/* Text content in a narrower container */}
          <div className="mx-auto max-w-3xl">
            <h2 className="mt-10 mb-5">{section.title}</h2>
            <p className="mb-6 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>

            {/* Render carousel if section has images */}
            {section.images && section.images.length > 0 && (
              <div className="my-8">
                <ImageCarousel images={section.images} />
              </div>
            )}
            {section.video && (
              <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-md not-prose">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {section.subsections && section.subsections.length > 0 && (
            <div className="mt-8 space-y-8 w-full">
              {section.subsections.map((subsection) => (
                <div key={subsection.title} className="w-full">
                  <div className="mx-auto max-w-3xl border-l-2 border-gray-100 pl-6 mb-8">
                    <h3 className="mb-4">
                      {subsection.id && (
                        <span className="font-mono mr-2 text-secondary">
                          {subsection.id}
                        </span>
                      )}
                      {subsection.title}
                    </h3>
                    <p className="mb-5 leading-relaxed whitespace-pre-line">
                      {subsection.content}
                    </p>

                    {/* Render carousel if subsection has images */}
                    {subsection.images && subsection.images.length > 0 && (
                      <div className="my-6">
                        <ImageCarousel images={subsection.images} />
                      </div>
                    )}
                  </div>

                  {/* Action items table - full width but with max-width constraint */}
                  {subsection.actionItems &&
                    subsection.actionItems.length > 0 && (
                      <div className="w-full mb-10">
                        {/* Action Items heading in the same width as content */}
                        <div className="mx-auto max-w-3xl border-l-2 border-gray-100 pl-6 mb-8">
                          <h3>Action Items</h3>
                        </div>
                        <ActionTable
                          actionItems={subsection.actionItems}
                          className="not-prose"
                        />
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
