import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

import { ThemeSwitch } from "./theme-switch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="relative max-w-[85rem] mx-auto bg-background px-6 py-12">
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 z-[1]">
        <div className="order-0 text-center lg:text-start mb-8 md:mb-0">
          <Link
            className="flex items-center justify-center lg:justify-start"
            href="/"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              BrandName
            </span>
          </Link>
          <p className="mt-4 text-sm">
            Empowering your digital journey with innovative solutions.
          </p>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
          <ul className="text-sm">
            <li className="mb-4">
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="/openings">
                Careers
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="/brand">
                Brand Center
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
          <ul className="text-sm">
            <li className="mb-4">
              <Link
                className="hover:underline"
                href="/frequently-asked-questions"
              >
                FAQ
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="/twitter">
                Twitter
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="/facebook">
                Facebook
              </Link>
            </li>
            <li className="mb-4">
              <Link className="hover:underline" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-1 lg:order-4 lg:col-span-2">
          <h2 className="mb-6 text-sm font-semibold uppercase">Subscribe</h2>
          <p className="text-sm mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              className="bg-background text-primary"
              placeholder="Enter your email"
              type="email"
            />
            <Button type="submit" variant="default">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <hr className="my-6 border-background sm:mx-auto lg:my-8" />
      <div className="relative sm:flex sm:items-center sm:justify-between z-[1]">
        <span className="text-sm sm:text-center">
          © 2023{" "}
          <Link className="hover:underline" href="/">
            BrandName™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link className="hover:text-secondary" href="#">
            <Facebook className="w-5 h-5" />
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link className="hover:text-secondary" href="#">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter page</span>
          </Link>
          <Link className="hover:text-secondary" href="#">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram page</span>
          </Link>
          <Link className="hover:text-secondary" href="#">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </Link>
          <Link className="hover:text-secondary" href="#">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
