import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll events to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-[#4a6da7] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mr-2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-2xl font-bold font-serif">Point of Grace</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-neutral-700 hover:text-[#4a6da7]"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-medium ${location === "/" ? "text-[#4a6da7]" : "text-neutral-700 hover:text-[#4a6da7]"} transition-colors`}>
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-neutral-700 hover:text-[#4a6da7] flex items-center transition-colors">
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#mission" className="w-full">Our Mission</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#team" className="w-full">Our Team</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#testimonials" className="w-full">Testimonials</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about" className="w-full">About Page</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-neutral-700 hover:text-[#4a6da7] flex items-center transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#counseling" className="w-full">Counseling</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#resources" className="w-full">Resources</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#prayer" className="w-full">Prayer Corner</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#events" className="w-full">Events</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-neutral-700 hover:text-[#4a6da7] flex items-center transition-colors">
                Growth <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#personal" className="w-full">Personal Growth</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#life-skills" className="w-full">Life Skills</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#contact" className="font-medium text-neutral-700 hover:text-[#4a6da7] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#help" className="bg-[#f8b156] hover:bg-[#f59f30] text-white font-medium py-2 px-5 rounded-full shadow-sm transition-colors">
              Get Help Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-3">
          <Link href="/" className="block font-medium text-[#4a6da7]">Home</Link>
          <Link href="/about" className="block font-medium text-neutral-700 hover:text-[#4a6da7]">About Us</Link>
          <a href="#mission" className="block font-medium text-neutral-700 hover:text-[#4a6da7]" onClick={() => setIsMobileMenuOpen(false)}>Our Mission</a>
          <a href="#counseling" className="block font-medium text-neutral-700 hover:text-[#4a6da7]" onClick={() => setIsMobileMenuOpen(false)}>Counseling</a>
          <a href="#resources" className="block font-medium text-neutral-700 hover:text-[#4a6da7]" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
          <a href="#prayer" className="block font-medium text-neutral-700 hover:text-[#4a6da7]" onClick={() => setIsMobileMenuOpen(false)}>Prayer Corner</a>
          <a href="#events" className="block font-medium text-neutral-700 hover:text-[#4a6da7]" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
          <a href="#contact" className="block font-medium text-neutral-700 hover:text-[#4a6da7]" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="#help" className="block text-center bg-[#f8b156] text-white font-medium py-2 px-4 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>Get Help Now</a>
        </div>
      </div>
    </header>
  );
}
