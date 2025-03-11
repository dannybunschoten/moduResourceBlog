import type { ReportSection, Photo } from "../lib/blog-data";
import { Carousel } from "../components/ui/carousel";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

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

                        {/* Table container - full width up to 1400px */}
                        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm px-2">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Priority</TableHead>
                                <TableHead>Assignee</TableHead>
                                <TableHead>Due Date</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {subsection.actionItems.map((item, itemIndex) => (
                                <TableRow key={itemIndex}>
                                  <TableCell className="font-medium">
                                    {item.id}
                                  </TableCell>
                                  <TableCell>{item.description}</TableCell>
                                  <TableCell>
                                    <Badge
                                      variant={
                                        item.priority === "High"
                                          ? "destructive"
                                          : item.priority === "Medium"
                                            ? "secondary"
                                            : "outline"
                                      }
                                    >
                                      {item.priority}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>{item.assignee}</TableCell>
                                  <TableCell>{item.dueDate}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
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
