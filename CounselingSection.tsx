import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { ServiceItem } from "@/lib/types";

export default function CounselingSection() {
  const services: ServiceItem[] = [
    {
      title: "Peer Counseling Sessions",
      description: "Connect with trained peer counselors who understand your struggles through online chat, video calls, or in-person sessions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Online Chat", "Video Calls", "In-Person"],
      link: "#"
    },
    {
      title: "Faith-Based Guidance",
      description: "Access articles, sermons, and personal testimonies about faith and overcoming struggles with addiction and mental health challenges.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Articles", "Sermons", "Testimonies"],
      link: "#"
    },
    {
      title: "Support Groups",
      description: "Join online forums or WhatsApp groups where people share their experiences and encourage one another through similar struggles.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Online Forums", "WhatsApp Groups", "Weekly Meetings"],
      link: "#"
    },
    {
      title: "One-on-One Mentorship",
      description: "Get paired with a dedicated mentor who will guide you through your journey of recovery, growth, and faith development.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Personal Guidance", "Recovery Support", "Spiritual Growth"],
      link: "#"
    }
  ];

  return (
    <section id="counseling" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Counseling & Support Services</h2>
          <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700">We offer various forms of support designed to meet you where you are in your journey, combining faith-based guidance with practical help.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }}></div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-700 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-[#6b8ec7] hover:bg-[#4a6da7] text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={service.link} className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
