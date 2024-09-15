"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { siteConfig } from "@/lib/config"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 bg-background z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
            <span className="font-bold text-xl">Brand</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {siteConfig.navItems.map((item: { label: string; href: string; }, index: number) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild className="font-medium relative inline-block text-gray-800 dark:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-black dark:after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild className="w-full">
              <Link href={siteConfig.callToAction.href}>{siteConfig.callToAction.label}</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 ease-in-out" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 ease-in-out" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {siteConfig.navItems.map((item: { label: string, href: string }, index: number) => (
            <Link
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              href={item.href}
              key={index}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Button asChild className="w-full">
              <Link href={siteConfig.callToAction.href}>{siteConfig.callToAction.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
