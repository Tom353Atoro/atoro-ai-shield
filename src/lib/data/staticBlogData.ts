
export interface StaticBlogPost {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  categories: string[];
  author: {
    name: string;
    imageUrl?: string;
  };
}

export const blogPosts: StaticBlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to Enterprise Cybersecurity Standards and Compliance",
    slug: "enterprise-cybersecurity-standards-compliance-guide",
    publishedAt: "2025-05-05T13:00:00Z",
    excerpt: "An authoritative guide to enterprise cybersecurity standards and compliance frameworks, including ISO 27001, SOC 2, and penetration testing methodologies.",
    categories: ["Security"],
    author: {
      name: "Tom McNamara",
      imageUrl: "/lovable-uploads/d4900a62-2285-4670-9d81-bf1935f853fe.png"
    },
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h2>Introduction to Enterprise Cybersecurity Compliance</h2>
      <p>In today's digital landscape, cybersecurity compliance is paramount for enterprises aiming to protect their data and maintain trust with stakeholders. This guide explores the essential standards and frameworks that form the backbone of a robust cybersecurity program.</p>
      
      <h2>Understanding Key Cybersecurity Frameworks</h2>
      <h3>ISO 27001 Overview</h3>
      <p>ISO 27001 is a globally recognized standard for information security management systems (ISMS). It provides a systematic approach to managing sensitive company information, ensuring it remains secure.</p>
      
      <h3>SOC 2 Explained</h3>
      <p>SOC 2 is a compliance standard for service organizations, focusing on five "trust service principles": security, availability, processing integrity, confidentiality, and privacy.</p>
      
      <h3>Other Important Standards (NIST, CIS, etc.)</h3>
      <p>Other frameworks like NIST and CIS provide additional guidelines and best practices for securing enterprise environments.</p>
      
      <h2>Building a Comprehensive Security Program</h2>
      <p>A comprehensive security program integrates various frameworks and standards to address all aspects of cybersecurity, from risk management to incident response.</p>
      
      <h2>Penetration Testing and Vulnerability Management</h2>
      <p>Regular penetration testing and vulnerability assessments are critical components of a proactive cybersecurity strategy, helping to identify and mitigate potential threats. These assessments should be conducted as part of your overall security compliance program.</p>
      
      <h2>Documentation and Evidence Requirements</h2>
      <p>Maintaining detailed documentation and evidence of compliance activities is crucial for audits and demonstrating adherence to standards.</p>
      
      <h2>Maintaining Continuous Compliance</h2>
      <p>Continuous monitoring and updating of security measures ensure ongoing compliance and protection against evolving threats.</p>
      
      <h2>Future Trends in Cybersecurity Compliance</h2>
      <p>Emerging technologies and regulatory changes will shape the future of cybersecurity compliance, requiring organizations to stay informed and adaptable.</p>
    `
  },
  {
    id: "2",
    title: "Privacy Regulations in 2025: What SaaS Companies Need to Know",
    slug: "privacy-regulations-saas-companies-2025",
    publishedAt: "2025-04-18T10:30:00Z",
    excerpt: "A comprehensive overview of privacy regulations affecting SaaS companies in 2025, including GDPR, CCPA, and emerging global standards.",
    categories: ["Privacy"],
    author: {
      name: "Tom McNamara",
      imageUrl: "/lovable-uploads/d4900a62-2285-4670-9d81-bf1935f853fe.png"
    },
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h2>The Evolving Privacy Landscape</h2>
      <p>Privacy regulations continue to evolve globally, with significant implications for SaaS companies operating across multiple jurisdictions.</p>
      
      <h2>Key Regulations Overview</h2>
      <h3>GDPR Updates</h3>
      <p>Recent updates to the General Data Protection Regulation have introduced stricter requirements for data processors and controllers.</p>
      
      <h3>CCPA and CPRA</h3>
      <p>California's privacy laws have set a new standard for data protection in the United States, with other states following suit.</p>
      
      <h3>International Frameworks</h3>
      <p>New international privacy frameworks are emerging, creating a complex compliance landscape for global operations.</p>
      
      <h2>Practical Compliance Strategies</h2>
      <p>Implementing practical compliance strategies can help SaaS companies navigate the complex regulatory environment while maintaining business agility.</p>
      
      <h2>Privacy by Design Principles</h2>
      <p>Integrating privacy considerations into product development from the outset is now essential for sustainable compliance.</p>
    `
  },
  {
    id: "3",
    title: "AI Governance Framework: Ethical Implementation for Enterprise",
    slug: "ai-governance-framework-ethical-implementation-enterprise",
    publishedAt: "2025-03-22T15:45:00Z",
    excerpt: "How to develop and implement an effective AI governance framework that ensures ethical use of artificial intelligence while driving innovation.",
    categories: ["AI Governance"],
    author: {
      name: "Tom McNamara",
      imageUrl: "/lovable-uploads/d4900a62-2285-4670-9d81-bf1935f853fe.png"
    },
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <h2>The Need for AI Governance</h2>
      <p>As AI adoption accelerates across industries, establishing clear governance frameworks has become essential for responsible innovation.</p>
      
      <h2>Key Components of AI Governance</h2>
      <h3>Ethical Guidelines</h3>
      <p>Developing clear ethical guidelines for AI development and deployment is the foundation of effective governance.</p>
      
      <h3>Risk Assessment Frameworks</h3>
      <p>Comprehensive risk assessment frameworks help organizations identify and mitigate potential harms from AI systems.</p>
      
      <h3>Transparency Mechanisms</h3>
      <p>Implementing transparency mechanisms ensures stakeholders understand how AI systems make decisions.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Practical implementation strategies can help organizations operationalize AI governance principles across their enterprise.</p>
      
      <h2>Measuring Governance Effectiveness</h2>
      <p>Regular assessment of governance effectiveness is crucial for continuous improvement and adaptation to emerging challenges.</p>
    `
  }
];

export const blogCategories = [
  { id: "all", title: "All Topics" },
  { id: "Security", title: "Security" },
  { id: "Privacy", title: "Privacy" },
  { id: "AI Governance", title: "AI Governance" }
];

export function getPostBySlug(slug: string): StaticBlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): StaticBlogPost[] {
  if (category === "all") {
    return blogPosts;
  }
  return blogPosts.filter(post => post.categories.includes(category));
}
