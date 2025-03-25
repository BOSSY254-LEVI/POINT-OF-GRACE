import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">About Point of Grace</h1>
            <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
            <p className="text-lg text-neutral-700">
              Learn more about our mission, our team, and the impact we're making in the lives of those
              struggling with addiction and life's challenges.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <p className="text-neutral-700 mb-4">
              Point of Grace was founded in 2010 by Pastor James Wilson, who had personally overcome addiction
              and wanted to create a faith-based support system for others walking the same path.
            </p>
            <p className="text-neutral-700 mb-4">
              What began as a small prayer group in a local church basement has grown into a comprehensive
              resource center offering counseling, support groups, and educational programs that have helped
              thousands find healing through faith.
            </p>
            <p className="text-neutral-700">
              Our approach combines spiritual principles with evidence-based practices to address the whole
              person - mind, body, and spirit - in the journey toward recovery and renewal.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}></div>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Meet the dedicated professionals and volunteers who make our mission possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pastor James Wilson", 
                role: "Founder & Executive Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                bio: "Former addiction counselor with 15 years of ministry experience."
              },
              {
                name: "Dr. Sarah Martinez", 
                role: "Lead Counselor",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                bio: "Licensed therapist specializing in faith-based trauma recovery."
              },
              {
                name: "Michael Thomas", 
                role: "Outreach Coordinator",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                bio: "Former addict with a passion for community-based recovery support."
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${member.image}')` }}></div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#4a6da7] font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        <div>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              The principles that guide our approach to healing and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Faith-Centered",
                icon: "heart",
                description: "We believe that spiritual renewal is an essential component of true healing."
              },
              {
                title: "Compassionate Care",
                icon: "hands-helping",
                description: "We approach each person with dignity, respect, and unconditional positive regard."
              },
              {
                title: "Community Support",
                icon: "users",
                description: "We foster connection and belonging as vital elements in the recovery journey."
              },
              {
                title: "Holistic Approach",
                icon: "balance-scale",
                description: "We address the whole person - mind, body, and spirit - in our programs and services."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#4a6da7] rounded-full flex items-center justify-center text-white">
                    <i className={`fas fa-${value.icon} text-2xl`}></i>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-neutral-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
