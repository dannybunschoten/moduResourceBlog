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
    <div>
      {sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mt-10 mb-5">{section.title}</h2>
          <p className="mb-6 leading-relaxed whitespace-pre-line">
            {section.content}
          </p>

          {/* Render carousel if section has images */}
          {section.images && section.images.length > 0 && (
            <div className="my-8">
              <ImageCarousel images={section.images} />
            </div>
          )}

          {section.subsections && section.subsections.length > 0 && (
            <div className="mt-8 space-y-8">
              {section.subsections.map((subsection, subIndex) => (
                <div
                  key={subIndex}
                  className="mb-8 border-l-2 border-gray-100 pl-6"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
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

                  {subsection.actionItems &&
                    subsection.actionItems.length > 0 && (
                      <div className="mt-6 mb-8 overflow-x-auto">
                        <h4 className="text-lg font-medium mb-3">
                          Action Items
                        </h4>
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
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
