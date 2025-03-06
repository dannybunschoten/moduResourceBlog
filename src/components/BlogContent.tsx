import { ReportSection, Photo } from '../lib/blog-data';
import { Carousel } from '../components/ui/carousel';

interface BlogContentProps {
  sections: ReportSection[];
}

// Helper component to render a carousel of images
const ImageCarousel = ({ images }: { images: Photo[] }) => {
  if (!images || images.length === 0) return null;
  
  return (
    <div className="my-6">
      <Carousel 
        images={images.map(img => img.url)} 
        captions={images.map(img => img.caption)}
      />
    </div>
  );
};

export function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="prose max-w-none">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mt-8 mb-4">{section.title}</h2>
          <p className="mb-4">{section.content}</p>
          
          {/* Render carousel if section has images */}
          {section.images && section.images.length > 0 && (
            <ImageCarousel images={section.images} />
          )}
          
          {section.subsections && section.subsections.length > 0 && (
            <div className="ml-4 mt-4">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {subsection.id && <span className="font-mono mr-2">{subsection.id}</span>}
                    {subsection.title}
                  </h3>
                  <p className="mb-3">{subsection.content}</p>
                  
                  {/* Render carousel if subsection has images */}
                  {subsection.images && subsection.images.length > 0 && (
                    <ImageCarousel images={subsection.images} />
                  )}
                  
                  {subsection.actionItems && subsection.actionItems.length > 0 && (
                    <div className="mt-4 mb-6">
                      <table className="min-w-full border border-gray-200 mb-4">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Description</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Priority</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Assignee</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Due Date</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {subsection.actionItems.map((item, itemIndex) => (
                            <tr key={itemIndex}>
                              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{item.id}</td>
                              <td className="px-4 py-2 text-sm text-gray-500 border-r">{item.description}</td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border-r">
                                <span 
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    item.priority === 'High' 
                                      ? 'bg-red-100 text-red-800' 
                                      : item.priority === 'Medium'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-green-100 text-green-800'
                                  }`}
                                >
                                  {item.priority}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border-r">{item.assignee}</td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.dueDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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