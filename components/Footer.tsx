import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

export default function Footer() {
  return (
    <footer className="relative max-w-[85rem] mx-auto bg-background px-6 py-12">
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 z-[1]">
        <div className="order-0 text-center lg:text-start mb-8 md:mb-0">
          <Link href="/" className="flex items-center justify-center lg:justify-start">
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
        <div className="order-1 lg:order-4 lg:col-span-2">
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
      <div className="relative sm:flex sm:items-center sm:justify-between z-[1]">
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
      <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2 z-0" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-700/50" stroke="currentColor"/>
        <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-700/50" stroke="currentColor"/>
      </svg>
    </footer>
  )
}
