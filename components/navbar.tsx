"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 bg-background dark:bg-[#0c2545] shadow-lg z-50">
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link className="flex items-center space-x-2" href="/">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
                {siteConfig.navItems.map(
                  (item: { label: string; href: string }, index: number) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        className="font-medium inline-block text-gray-800 dark:text-white animated-underline"
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild className="w-full">
              <Link href={siteConfig.callToAction.href}>
                {siteConfig.callToAction.label}
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              aria-label="Toggle Menu"
              size="icon"
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
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
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {siteConfig.navItems.map(
            (item: { label: string; href: string }, index: number) => (
              <Link
                key={index}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="px-3 py-2">
            <Button asChild className="w-full">
              <Link href={siteConfig.callToAction.href}>
                {siteConfig.callToAction.label}
              </Link>
            </Button>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
