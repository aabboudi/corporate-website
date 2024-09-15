import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">BrandName</span>
            </Link>
            <p className="mt-4 text-sm">Empowering your digital journey with innovative solutions.</p>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
            <ul className="text-sm">
              <li className="mb-4">
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li className="mb-4">
                <Link href="/careers" className="hover:underline">Careers</Link>
              </li>
              <li className="mb-4">
                <Link href="/brand" className="hover:underline">Brand Center</Link>
              </li>
              <li className="mb-4">
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
            <ul className="text-sm">
              <li className="mb-4">
                <Link href="/discord" className="hover:underline">Discord Server</Link>
              </li>
              <li className="mb-4">
                <Link href="/twitter" className="hover:underline">Twitter</Link>
              </li>
              <li className="mb-4">
                <Link href="/facebook" className="hover:underline">Facebook</Link>
              </li>
              <li className="mb-4">
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Subscribe</h2>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background text-primary"
              />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        <hr className="my-6 border-background sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2023 <Link href="/" className="hover:underline">BrandName™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="#" className="hover:text-secondary">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="hover:text-secondary">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="hover:text-secondary">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link href="#" className="hover:text-secondary">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn account</span>
            </Link>
            <Link href="#" className="hover:text-secondary">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  )
}
