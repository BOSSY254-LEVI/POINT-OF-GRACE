import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestimonialItem } from "@/lib/types";

export default function TestimonialsSection() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Michael Obiri",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "After struggling with addiction for 8 years, I found Point of Grace when I was at my lowest point. The faith-based counseling and support group helped me reconnect with God and find the strength to overcome my addiction. I've been clean for 2 years now and serve as a peer counselor.",
      rating: 5,
      subtitle: "Recovery Journey: 2 Years"
    },
    {
      name: "Caro O.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The depression and anxiety I experienced after losing my job and going through a divorce left me feeling hopeless. Point of Grace provided me with both spiritual guidance and practical resources. Their holistic approach helped me rebuild my life and faith.",
      rating: 5,
      subtitle: "Mental Health Journey"
    },
    {
      name: "Estro and Val",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "When our son was struggling with addiction, we felt lost as parents. Point of Grace provided our family with counseling, resources, and a supportive community. Their faith-based approach helped not only our son but our entire family heal and grow stronger together.",
      rating: 5,
      subtitle: "Family Support Journey"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#4a6da7] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Stories of Hope & Healing</h2>
          <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
          <p className="text-lg opacity-90">Real stories from people who have found hope, healing, and renewed faith through Point of Grace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white text-neutral-700 rounded-lg shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-[#f8b156]">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">{testimonial.quote}</p>
                <div className="text-center">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-white text-[#4a6da7] hover:bg-neutral-100">
            <a href="#">Read More Stories</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
