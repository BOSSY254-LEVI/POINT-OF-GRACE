import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(74,109,167,0.8)] to-[rgba(74,109,167,0.6)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-white relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">Find Hope and Healing on Your Journey</h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">Point of Grace offers faith-based guidance, counseling, and resources for those struggling with addiction, mental health challenges, and life's hardships.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#4a6da7] hover:bg-gray-100">
              <a href="#counseling">Our Services</a>
            </Button>
            <Button asChild size="lg" className="bg-[#f8b156] hover:bg-[#f59f30] text-white">
              <a href="#contact">Reach Out</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
