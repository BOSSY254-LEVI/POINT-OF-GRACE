import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Lightbulb } from "lucide-react";

export default function MissionSection() {
  const missionValues = [
    {
      title: "Faith-Centered",
      description: "We integrate spiritual guidance with professional support to address the whole person – mind, body, and spirit.",
      icon: <Heart className="h-8 w-8" />
    },
    {
      title: "Community Support",
      description: "We believe healing happens in community, through relationships, mentorship, and mutual encouragement.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Holistic Approach",
      description: "We address not just immediate struggles but provide resources for personal growth, life skills, and future success.",
      icon: <Lightbulb className="h-8 w-8" />
    }
  ];

  return (
    <section id="mission" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700">Point of Grace exists to provide faith-centered support, guidance, and resources to individuals struggling with addiction, mental health challenges, and life's hardships. We believe in the transformative power of faith, community, and professional support working together to bring hope and healing.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {missionValues.map((value, index) => (
            <Card key={index} className="bg-neutral-50 transition-all hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#4a6da7] rounded-full flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-700">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
