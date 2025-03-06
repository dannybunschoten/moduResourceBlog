// Define report content structure types
export interface ReportSection {
  title: string;
  content: string;
  subsections?: ReportSubsection[];
  images?: Photo[]; // Added images array to sections
}

export interface ReportSubsection {
  id?: string;
  title: string;
  content: string;
  actionItems?: ActionItem[];
  images?: Photo[]; // Added images array to subsections
}

export interface ActionItem {
  id: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  dueDate: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  sections: ReportSection[];
}

export interface Photo {
  url: string;
  caption: string;
  alt: string;
}

// Sample blog post data with structured content
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "corrosion-inspection",
    title: "Corrosion Assessment Report: Critical Areas Identified",
    excerpt: "Detailed inspection of structural components revealed significant corrosion patterns requiring immediate attention.",
    author: "Bart Musters",
    date: "June 10, 2024",
    image: "/download (1).jpeg",
    category: "Structural Inspection",
    sections: [
      {
        title: "Workscope Accomplished",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. \n\nSuspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. \n\nNunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.",
        images: [
          {
            url: "/download (1).jpeg",
            caption: "Comprehensive inspection overview of key structural components",
            alt: "Detailed inspection overview"
          },
          {
            url: "/download (2).jpeg",
            caption: "Extensive close-up analysis of observed corrosion patterns",
            alt: "In-depth corrosion close-up"
          }
        ],
        subsections: [
          {
            title: "Mechanical",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \n\nDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. \n\nVestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis."
          },
          {
            title: "Electrical",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          },
          {
            title: "Structural",
            content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. \n\nTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
            images: [
              {
                url: "/download (3).jpeg",
                caption: "Comprehensive structural analysis and critical points of concern",
                alt: "Detailed structural assessment"
              }
            ]
          }
        ]
      },
      {
        title: "Recommendations",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. \n\nVestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. \n\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.",
        subsections: [
          {
            id: "A.1.1",
            title: "Primary Support Structure",
            content: "Ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. \n\nCurabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. \n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
            actionItems: [
              {
                id: "COR-001",
                description: "Replace corroded support beams in section A",
                priority: "High",
                assignee: "Maintenance Team",
                dueDate: "July 5, 2024"
              },
              {
                id: "COR-002",
                description: "Apply anti-corrosive coating to exposed metal surfaces",
                priority: "Medium",
                assignee: "Technical Team",
                dueDate: "July 15, 2024"
              }
            ],
            images: [
              {
                url: "/download (4).jpeg",
                caption: "Detailed assessment of support structure requiring immediate intervention",
                alt: "Critical support structure evaluation"
              }
            ]
          },
          {
            id: "A.1.2",
            title: "Secondary Support Elements",
            content: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. \n\nPellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. \n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            actionItems: [
              {
                id: "COR-003",
                description: "Inspect secondary support elements for signs of deterioration",
                priority: "Medium",
                assignee: "Inspection Team",
                dueDate: "June 25, 2024"
              }
            ]
          },
          {
            id: "A.8.2",
            title: "Protective Systems",
            content: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. \n\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. \n\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur.",
            actionItems: [
              {
                id: "COR-004",
                description: "Replace damaged protective barriers in high-traffic areas",
                priority: "High",
                assignee: "Safety Team",
                dueDate: "June 20, 2024"
              },
              {
                id: "COR-005",
                description: "Update corrosion monitoring system",
                priority: "Low",
                assignee: "Technical Team",
                dueDate: "August 1, 2024"
              }
            ]
          }
        ]
      },
      {
        title: "Discussion",
        content: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n\nThe inspection revealed several critical areas of concern that require immediate and comprehensive attention to prevent further deterioration of essential structural components. Detailed analysis of the mechanical, electrical, and structural systems uncovered significant corrosion patterns that pose potential risks to the overall integrity of the infrastructure. \n\nKey observations include progressive metal degradation in primary support structures, electrical system vulnerabilities, and potential systemic weaknesses that demand urgent remediation strategies. The recommended action items provide a structured approach to addressing these challenges and mitigating potential long-term structural compromise."
      },
      {
        title: "Next Steps",
        content: "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. \n\nBased on the comprehensive assessment and detailed recommendations, the following next steps are critical to ensuring structural safety and preventing further degradation. Immediate implementation of the proposed action items will be crucial in maintaining the structural integrity and operational efficiency of the affected systems. \n\nClose collaboration between the Maintenance, Technical, and Safety teams will be essential in executing the proposed interventions with precision and thoroughness."
      }
    ]
  }, 
  {
    id: 2,
    slug: "electrical-systems",
    title: "Electrical Systems Compliance Check",
    excerpt: "Comprehensive review of electrical connections and safety systems across the platform.",
    author: "Bart Musters",
    date: "June 11, 2024",
    image: "/download (3).jpeg",
    category: "Electrical Safety",
    sections: [
      {
        title: "Workscope Accomplished",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. \n\nUt in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. \n\nProin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
        subsections: [
          {
            title: "Circuit Testing",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \n\nDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. \n\nAenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
            images: [
              {
                url: "/download (2).jpeg",
                caption: "Comprehensive circuit testing equipment setup and diagnostic procedure",
                alt: "Advanced circuit testing"
              }
            ]
          },
          {
            title: "Safety Systems",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \n\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
          },
          {
            title: "Wiring Inspection",
            content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi. \n\nId est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. \n\nOmnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
          }
        ]
      },
      {
        title: "Recommendations",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. \n\nVestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. \n\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.",
        subsections: [
          {
            id: "E.1.1",
            title: "Circuit Breakers",
            content: "Ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. \n\nCurabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. \n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
            actionItems: [
              {
                id: "ELEC-001",
                description: "Replace outdated circuit breakers in control room",
                priority: "High",
                assignee: "Electrical Team",
                dueDate: "June 30, 2024"
              },
              {
                id: "ELEC-002",
                description: "Test emergency shutdown system",
                priority: "High",
                assignee: "Safety Team",
                dueDate: "June 18, 2024"
              }
            ],
            images: [
              {
                url: "/download (3).jpeg",
                caption: "Detailed inspection of control room circuit breaker panel",
                alt: "Comprehensive circuit breaker assessment"
              }
            ]
          },
          {
            id: "E.1.2",
            title: "Wiring Updates",
            content: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. \n\nPellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. \n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            actionItems: [
              {
                id: "ELEC-003",
                description: "Replace degraded wiring in section B",
                priority: "Medium",
                assignee: "Electrical Team",
                dueDate: "July 10, 2024"
              }
            ]
          }
        ]
      },
      {
        title: "Discussion",
        content: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n\nThe comprehensive electrical systems inspection revealed critical insights into the current state of the platform's electrical infrastructure. Detailed analysis of circuit testing, safety systems, and wiring configurations highlighted several key areas requiring immediate attention and potential upgrades. \n\nKey observations include potential vulnerabilities in the circuit breaker systems, degradation of wiring in specific sections, and the need for enhanced safety protocol implementation. The recommended action items provide a strategic approach to addressing these critical electrical system challenges.",
        images: [
          {
            url: "/download (4).jpeg",
            caption: "Detailed discussion of electrical systems inspection findings",
            alt: "Comprehensive team analysis"
          }
        ]
      }
    ]
  },
  // Additional posts with updated structure
  {
    id: 3,
    slug: "equipment-monitoring",
    title: "CAT Equipment Performance Analysis",
    excerpt: "Monitoring and analysis of critical equipment parameters and performance metrics.",
    author: "Bart Musters",
    date: "June 12, 2024",
    image: "/download (8).jpeg",
    category: "Equipment Monitoring",
    sections: [
      {
        title: "Workscope Accomplished",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. \n\nUt in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. \n\nProin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
        images: [
          {
            url: "/download (8).jpeg",
            caption: "Comprehensive equipment monitoring station with advanced diagnostic interfaces",
            alt: "Advanced monitoring station"
          }
        ],
        subsections: [
          {
            title: "Mechanical",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \n\nDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. \n\nVestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis."
          },
          {
            title: "Performance Testing",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \n\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            images: [
              {
                url: "/download (9).jpeg",
                caption: "Detailed performance testing procedure with comprehensive data collection",
                alt: "In-depth performance analysis"
              }
            ]
          }
        ]
      },
      {
        title: "Recommendations",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. \n\nVestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. \n\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.",
        subsections: [
          {
            id: "M.1.1",
            title: "Equipment Calibration",
            content: "Ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. \n\nCurabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. \n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
            actionItems: [
              {
                id: "EQP-001",
                description: "Recalibrate pressure sensors on all CAT equipment",
                priority: "Medium",
                assignee: "Technical Team",
                dueDate: "July 5, 2024"
              },
              {
                id: "EQP-002",
                description: "Conduct comprehensive diagnostic assessment of equipment performance metrics",
                priority: "High",
                assignee: "Engineering Team",
                dueDate: "July 15, 2024"
              }
            ]
          },
          {
            id: "M.1.2",
            title: "Preventive Maintenance",
            content: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. \n\nPellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. \n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            actionItems: [
              {
                id: "EQP-003",
                description: "Implement predictive maintenance schedule for critical equipment",
                priority: "High",
                assignee: "Maintenance Team",
                dueDate: "July 20, 2024"
              }
            ]
          }
        ]
      },
      {
        title: "Discussion",
        content: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n\nThe comprehensive equipment monitoring analysis revealed critical insights into the performance and operational status of CAT equipment. Detailed mechanical assessments and performance testing uncovered several key areas requiring attention and potential optimization. \n\nKey observations include the need for precise sensor calibration, implementation of predictive maintenance strategies, and comprehensive diagnostic evaluations to ensure optimal equipment performance and longevity. The recommended action items provide a strategic approach to addressing these critical equipment monitoring challenges."
      }
    ]
  },
  {
    id: 4,
    slug: "safety-systems",
    title: "Safety Systems Integrity Check",
    excerpt: "Evaluation of platform safety systems and emergency response equipment.",
    author: "Bart Musters",
    date: "June 13, 2024",
    image: "/download (4).jpeg",
    category: "Safety Assessment",
    sections: [
      {
        title: "Workscope Accomplished",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. \n\nUt in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. \n\nProin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
        subsections: [
          {
            title: "Emergency Systems",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \n\nDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. \n\nAenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
            images: [
              {
                url: "/download (3).jpeg",
                caption: "Comprehensive emergency response system diagnostic assessment",
                alt: "Advanced emergency system evaluation"
              }
            ]
          },
          {
            title: "Evacuation Routes",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \n\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
          }
        ]
      },
      {
        title: "Recommendations",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. \n\nVestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. \n\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.",
        subsections: [
          {
            id: "S.1.1",
            title: "Safety Equipment",
            content: "Ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. \n\nCurabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. \n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
            actionItems: [
              {
                id: "SFT-001",
                description: "Replace expired fire extinguishers in sections C and D",
                priority: "High",
                assignee: "Safety Team",
                dueDate: "June 20, 2024"
              },
              {
                id: "SFT-002",
                description: "Conduct comprehensive safety equipment functionality test",
                priority: "High",
                assignee: "Safety Team",
                dueDate: "June 25, 2024"
              }
            ],
            images: [
              {
                url: "/download (4).jpeg",
                caption: "Detailed safety equipment inspection and verification process",
                alt: "Comprehensive safety equipment assessment"
              }
            ]
          },
          {
            id: "S.1.2",
            title: "Emergency Preparedness",
            content: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. \n\nPellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. \n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            actionItems: [
              {
                id: "SFT-003",
                description: "Update and conduct emergency response team training",
                priority: "High",
                assignee: "Training Department",
                dueDate: "July 15, 2024"
              }
            ]
          }
        ]
      },
      {
        title: "Discussion",
        content: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n\nThe comprehensive safety systems integrity check revealed critical insights into the current state of emergency preparedness and safety equipment on the platform. Detailed assessments of emergency systems and evacuation routes highlighted several key areas requiring immediate attention and potential improvements. \n\nKey observations include the need for timely replacement of safety equipment, comprehensive functionality testing, and enhanced emergency response team training. The recommended action items provide a strategic approach to addressing these critical safety system challenges and ensuring optimal preparedness for potential emergency scenarios."
      }
    ]
  },
  {
    id: 5,
    slug: "featured-report",
    title: "Daily Report: Offshore Platform Inspection",
    excerpt: "Comprehensive inspection of offshore platform structural integrity and safety systems.",
    author: "Bart Musters",
    date: "June 14, 2024",
    image: "/download (5).jpeg",
    category: "Platform Inspection",
    sections: [
      {
        title: "Workscope Accomplished",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. \n\nUt in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. \n\nProin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
        images: [
          {
            url: "/download (5).jpeg",
            caption: "Comprehensive offshore platform structural overview and inspection point mapping",
            alt: "Detailed platform assessment"
          }
        ],
        subsections: [
          {
            title: "Mechanical",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \n\nDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. \n\nVestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis."
          },
          {
            title: "Electrical",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \n\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            images: [
              {
                url: "/download (9).jpeg",
                caption: "Comprehensive electrical systems diagnostic assessment",
                alt: "Advanced electrical systems evaluation"
              }
            ]
          },
          {
            title: "Structural",
            content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. \n\nTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
          }
        ]
      },
      {
        title: "Recommendations",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. \n\nVestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. \n\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.",
        subsections: [
          {
            id: "P.1.1",
            title: "Platform Integrity",
            content: "Ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. \n\nCurabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. \n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
            actionItems: [
              {
                id: "PLT-001",
                description: "Conduct detailed structural integrity assessment",
                priority: "High",
                assignee: "Engineering Team",
                dueDate: "June 25, 2024"
              },
              {
                id: "PLT-002",
                description: "Repair damaged guardrails on deck level 3",
                priority: "Medium",
                assignee: "Maintenance Team",
                dueDate: "July 5, 2024"
              }
            ],
            images: [
              {
                url: "/download (8).jpeg",
                caption: "Comprehensive assessment of damaged guardrails and structural vulnerabilities",
                alt: "Detailed guardrail inspection"
              }
            ]
          },
          {
            id: "P.1.2",
            title: "Safety Improvements",
            content: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. \n\nPellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. \n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            actionItems: [
              {
                id: "PLT-003",
                description: "Update emergency evacuation plan",
                priority: "Medium",
                assignee: "Safety Team",
                dueDate: "July 15, 2024"
              },
              {
                id: "PLT-004",
                description: "Conduct comprehensive safety systems review",
                priority: "High",
                assignee: "Safety Team",
                dueDate: "July 10, 2024"
              }
            ]
          }
        ]
      },
      {
        title: "Discussion",
        content: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \n\nThe comprehensive offshore platform inspection revealed critical insights into the current state of structural integrity, mechanical systems, and electrical infrastructure. Detailed assessments across multiple domains highlighted several key areas requiring immediate attention and potential improvements. \n\nKey observations include structural vulnerabilities, potential safety system enhancements, and the need for targeted maintenance interventions. The recommended action items provide a strategic approach to addressing these critical platform challenges and ensuring optimal operational safety and performance."
      },
      {
        title: "Projected Workscope",
        content: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. \n\nBased on the comprehensive inspection findings, the projected workscope encompasses a multi-faceted approach to platform maintenance and improvement. Key focus areas include structural reinforcement, electrical system optimization, and comprehensive safety system upgrades. \n\nThe anticipated timeline for implementation spans the next two months, with priority given to high-risk areas identified during the inspection. Continued monitoring and iterative improvements will be crucial to maintaining platform reliability and operational efficiency."
      },
      {
        title: "Comments and Safety Observations",
        content: "Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. \n\nKey safety observations from the inspection highlight the critical importance of proactive maintenance and continuous system monitoring. Notable concerns include potential structural stress points, electrical system vulnerabilities, and the need for enhanced safety protocols. \n\nRecommendations emphasize the importance of regular inspections, immediate addressing of identified issues, and ongoing training for personnel to ensure maximum safety and operational readiness."
      }
    ]
  }
]

// Helper function to get a blog post by slug
export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Helper function to get the previous blog post
export function getPreviousBlogPost(currentSlug: string) {
  const currentIndex = blogPosts.findIndex((post) => post.slug === currentSlug)
  if (currentIndex > 0) {
    return blogPosts[currentIndex - 1]
  }
  return null
}

// Helper function to get the next blog post
export function getNextBlogPost(currentSlug: string) {
  const currentIndex = blogPosts.findIndex((post) => post.slug === currentSlug)
  if (currentIndex !== -1 && currentIndex < blogPosts.length - 1) {
    return blogPosts[currentIndex + 1]
  }
  return null
}