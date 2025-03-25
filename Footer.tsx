import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8b156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-2xl font-bold font-serif">Point of Grace</span>
            </div>
            <p className="text-neutral-400 mb-6">A faith-based organization dedicated to providing support, guidance, and resources for those seeking healing and spiritual renewal.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-serif mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#mission" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Our Mission</a></li>
              <li><a href="#counseling" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Counseling Services</a></li>
              <li><a href="#resources" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Resources</a></li>
              <li><a href="#prayer" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Prayer Requests</a></li>
              <li><a href="#events" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Events & Workshops</a></li>
              <li><a href="#testimonials" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-serif mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Blog Articles</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Videos & Podcasts</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Recovery Guides</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Faith Resources</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Devotionals</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Life Skills</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-[#f8b156] transition-colors">Support Directory</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-serif mb-6">Subscribe</h4>
            <p className="text-neutral-400 mb-4">Sign up to receive our weekly devotional and updates on events and resources.</p>
            <form className="space-y-3">
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#f8b156] hover:bg-[#f59f30] text-white font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Point of Grace. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#f8b156] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f8b156] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#f8b156] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
