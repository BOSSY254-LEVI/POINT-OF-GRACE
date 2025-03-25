import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";
import { EventItem } from "@/lib/types";

export default function EventsSection() {
  const events: EventItem[] = [
    {
      title: "Faith & Recovery Workshop",
      description: "A day-long workshop exploring the intersection of faith and addiction recovery with guest speakers and interactive sessions.",
      date: "15",
      day: "Saturday",
      month: "June",
      location: "Grace Community Church, 123 Main St",
      time: "9:00 AM - 4:00 PM",
      link: "#"
    },
    {
      title: "Youth Retreat: Finding Purpose",
      description: "A weekend retreat for young adults seeking direction, purpose, and spiritual renewal in their lives.",
      date: "22",
      day: "Saturday",
      month: "June",
      location: "Pine Ridge Retreat Center",
      time: "Friday 6 PM - Sunday 2 PM",
      link: "#"
    },
    {
      title: "Mental Health & Faith Seminar",
      description: "An evening seminar addressing mental health challenges from a faith perspective with professional counselors.",
      date: "28",
      day: "Friday",
      month: "June",
      location: "Point of Grace Center, 456 Oak Ave",
      time: "6:30 PM - 9:00 PM",
      link: "#"
    }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Events & Community Engagement</h2>
          <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700">Connect with others through workshops, retreats, and outreach opportunities that strengthen faith and foster growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-6">Upcoming Events</h3>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-[#4a6da7] text-white flex flex-col justify-center items-center p-6">
                      <span className="text-2xl font-bold">{event.date}</span>
                      <span className="text-xl">{event.month}</span>
                      <span className="mt-2">{event.day}</span>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h4 className="font-serif text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-neutral-700 mb-4">{event.description}</p>
                      <div className="flex items-center text-sm text-neutral-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <Button asChild className="bg-[#4a6da7] hover:bg-[#3a5a8e] text-white">
                        <a href={event.link}>Register Now</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a href="#" className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center justify-center">
                View All Events <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Get Involved */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Get Involved</h3>
            
            <Card className="bg-neutral-50 shadow-sm mb-6">
              <CardContent className="p-6">
                <h4 className="font-serif text-xl font-bold mb-4">Volunteer Opportunities</h4>
                <p className="text-neutral-700 mb-4">Use your experience and skills to help others on their journey to recovery and faith renewal.</p>
                <ul className="space-y-2 mb-4">
                  {["Peer Support Volunteer", "Prayer Team Member", "Event Coordination", "Content Creator"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#4a6da7] mt-1 mr-2 h-4 w-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-50 shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-serif text-xl font-bold mb-4">Church Partnerships</h4>
                <p className="text-neutral-700 mb-4">We collaborate with local churches to provide comprehensive support for those in need.</p>
                <ul className="space-y-2 mb-4">
                  {["Counseling Referrals", "Resource Sharing", "Joint Outreach Programs", "Training for Church Leaders"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#4a6da7] mt-1 mr-2 h-4 w-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center">
                  Partner With Us <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
