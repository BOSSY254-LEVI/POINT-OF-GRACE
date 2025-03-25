import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { PrayerRequestFormValues, ScriptureItem } from "@/lib/types";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  "prayer-request": z.string().min(5, { message: "Prayer request must be at least 5 characters long" }),
  "keep-private": z.boolean().optional(),
});

export default function PrayerSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      "prayer-request": "",
      "keep-private": false,
    },
  });

  const submitPrayerRequest = useMutation({
    mutationFn: async (data: PrayerRequestFormValues) => {
      const response = await apiRequest("POST", "/api/prayer-requests", {
        name: data.name,
        email: data.email,
        request: data["prayer-request"],
        isPrivate: data["keep-private"],
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Prayer Request Submitted",
        description: "Our prayer team will be praying for you.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit prayer request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitPrayerRequest.mutate(data);
  };

  const scriptures: ScriptureItem[] = [
    {
      verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28"
    },
    {
      verse: "I can do all this through him who gives me strength.",
      reference: "Philippians 4:13"
    },
    {
      verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
      reference: "Jeremiah 29:11"
    }
  ];

  return (
    <section id="prayer" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Prayer & Encouragement Corner</h2>
          <div className="w-20 h-1 bg-[#f8b156] mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700">Find spiritual support, submit prayer requests, and access daily encouragement to strengthen your faith journey.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prayer Request Form */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-bold mb-6">Submit a Prayer Request</h3>
              <p className="text-neutral-700 mb-6">Share your prayer needs with our prayer team. All requests are kept confidential.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Your Name (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="border-neutral-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            className="border-neutral-300" 
                            {...field} 
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="prayer-request"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Your Prayer Request</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your prayer request here..." 
                            className="border-neutral-300 min-h-[120px]" 
                            {...field} 
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="keep-private"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-neutral-700">
                            Keep my request private to the prayer team only
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#4a6da7] hover:bg-[#3a5a8e]"
                    disabled={submitPrayerRequest.isPending}
                  >
                    {submitPrayerRequest.isPending ? "Submitting..." : "Submit Prayer Request"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Daily Devotional and Bible Verses */}
          <div className="space-y-8">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Today's Devotional</h3>
                <h4 className="font-serif text-xl font-bold text-[#4a6da7] mb-3">Finding Strength in Weakness</h4>
                <p className="italic text-neutral-700 mb-4">"But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me."</p>
                <p className="text-sm text-right">— 2 Corinthians 12:9</p>
                <div className="mt-6">
                  <p className="text-neutral-700 mb-4">In our journey of recovery and healing, we often feel vulnerable and weak. Today's devotional reminds us that it's precisely in those moments of weakness that God's power can work most effectively in our lives.</p>
                  <a href="#" className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center">
                    Read Full Devotional <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Bible Verses */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-6">Encouraging Scripture</h3>
                <div className="space-y-6">
                  {scriptures.map((scripture, index) => (
                    <div key={index} className="border-l-4 border-[#f8b156] pl-4">
                      <p className="text-neutral-700 mb-2">{scripture.verse}</p>
                      <p className="text-sm font-medium">— {scripture.reference}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="#" className="inline-block font-medium text-[#4a6da7] hover:text-[#3a5a8e] flex items-center">
                    More Scripture <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Online Prayer Meetings */}
        <div className="mt-12 bg-[#4a6da7] text-white rounded-lg p-6 shadow-lg">
          <div className="md:flex items-center justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Join Our Online Prayer Meetings</h3>
              <p className="mb-4 md:mb-0">Every Wednesday at 7:00 PM, we gather virtually to pray together and support one another.</p>
            </div>
            <Button asChild className="bg-white text-[#4a6da7] hover:bg-neutral-100">
              <a href="#">Join Prayer Meeting</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
