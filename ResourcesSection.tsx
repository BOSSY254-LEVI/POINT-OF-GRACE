import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { ResourceItem } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function ResourcesSection() {
  const resources: ResourceItem[] = [
    {
      title: "Blog Articles",
      description: "Inspiring articles, recovery stories, and faith-based motivation to encourage you on your journey.",
      icon: "pen-fancy",
      link: "#"
    },
    {
      title: "Videos & Podcasts",
      description: "Watch and listen to testimonies, sermons, and talks from former addicts, pastors, and counselors.",
      icon: "video",
      link: "#"
    },
    {
      title: "Recovery Resources",
      description: "Information about different substances, their effects, and evidence-based recovery approaches.",
      icon: "book-medical",
      link: "#"
    },
    {
      title: "Downloadable Guides",
      description: "Practical guides on overcoming addiction, rebuilding faith, and setting meaningful life goals.",
      icon: "file-download",
      link: "#"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Resources & Educational Content</h2>
          <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700">Access a wealth of information, inspiration, and practical tools to support your journey toward healing and growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-neutral-50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-[#4a6da7] text-4xl mb-4">
                  <i className={`fas fa-${resource.icon}`}></i>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-neutral-700 mb-4">{resource.description}</p>
                <a href={resource.link} className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center">
                  {resource.title === "Blog Articles" ? "Read Articles" : 
                   resource.title === "Videos & Podcasts" ? "Browse Media" : 
                   resource.title === "Downloadable Guides" ? "Download Resources" : "Learn More"}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Resource */}
        <div className="mt-12 bg-[#4a6da7] text-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="inline-block bg-[#f8b156] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">FEATURED RESOURCE</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Finding Hope: A Guide to Faith-Based Recovery</h3>
              <p className="mb-6">This comprehensive guide combines spiritual principles with practical recovery strategies to help you or your loved one find healing and hope.</p>
              <Button asChild className="bg-white text-[#4a6da7] hover:bg-neutral-100">
                <a href="#">Download Free Guide</a>
              </Button>
            </div>
            <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
