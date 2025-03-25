import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Map, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ContactFormValues } from "@/lib/types";

const formSchema = z.object({
  "contact-name": z.string().min(2, { message: "Name must be at least 2 characters" }),
  "contact-email": z.string().email({ message: "Please enter a valid email address" }),
  "contact-phone": z.string().optional(),
  "contact-subject": z.string().min(1, { message: "Please select a subject" }),
  "contact-message": z.string().min(10, { message: "Message must be at least 10 characters" }),
  "contact-agreement": z.boolean().refine((val) => val === true, { message: "You must agree to be contacted" }),
});

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "contact-name": "",
      "contact-email": "",
      "contact-phone": "",
      "contact-subject": "",
      "contact-message": "",
      "contact-agreement": false,
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", {
        name: data["contact-name"],
        email: data["contact-email"],
        phone: data["contact-phone"],
        subject: data["contact-subject"],
        message: data["contact-message"],
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitContactForm.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Contact & Crisis Support</h2>
              <div className="w-20 h-1 bg-[#f8b156] mb-6"></div>
              <p className="text-lg text-neutral-700 mb-8">We're here to help you or your loved one find the support and resources needed for recovery and spiritual renewal.</p>
              
              {/* Emergency Support */}
              <div className="bg-red-500 text-white p-6 rounded-lg mb-6">
                <h3 className="font-serif text-xl font-bold mb-4">24/7 Crisis Support</h3>
                <p className="mb-4">If you or someone you know is in immediate danger, please call emergency services.</p>
                <div className="flex items-center font-bold text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Emergency: 911</span>
                </div>
                <div className="flex items-center font-bold text-lg mt-2">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Crisis Helpline: 0723651197</span>
                </div>
              </div>
              
              {/* Contact Information */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-[#4a6da7] mt-1 mr-3">
                        <Map className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Office Location</h4>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#4a6da7] mt-1 mr-3">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Phone Numbers</h4>
                        <p>Contact: 0723651197</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#4a6da7] mt-1 mr-3">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p>Mobiri74@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#4a6da7] mt-1 mr-3">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Office Hours</h4>
                        <p>Monday-Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-[#4a6da7] text-white rounded-full flex items-center justify-center hover:bg-[#3a5a8e] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#4a6da7] text-white rounded-full flex items-center justify-center hover:bg-[#3a5a8e] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#4a6da7] text-white rounded-full flex items-center justify-center hover:bg-[#3a5a8e] transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#4a6da7] text-white rounded-full flex items-center justify-center hover:bg-[#3a5a8e] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="contact-name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
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
                      name="contact-email"
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
                      name="contact-phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(123) 456-7890" 
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
                      name="contact-subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Subject</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                            required
                          >
                            <FormControl>
                              <SelectTrigger className="border-neutral-300">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="counseling">Counseling Services</SelectItem>
                              <SelectItem value="support">Support Groups</SelectItem>
                              <SelectItem value="events">Events & Workshops</SelectItem>
                              <SelectItem value="volunteer">Volunteering</SelectItem>
                              <SelectItem value="partnership">Church Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contact-message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
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
                      name="contact-agreement"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                              required
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-neutral-700">
                              I agree to the privacy policy and consent to being contacted regarding my inquiry.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#4a6da7] hover:bg-[#3a5a8e]"
                      disabled={submitContactForm.isPending}
                    >
                      {submitContactForm.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
