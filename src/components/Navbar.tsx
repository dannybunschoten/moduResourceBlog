"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="relative w-[180px] h-[40px]">
            <img
              src="/moduSpec.svg"
              alt="ModuSpec Logo"
              className="object-contain w-full h-full"
            />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop navigation - always visible on md+ screens */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="font-medium text-moduspec-blue hover:text-moduspec-red transition-colors"
                >
                  All Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile navigation - only visible when menu is open on small screens */}
          <div
            className={cn(
              "absolute top-20 left-0 right-0 bg-white p-6 shadow-md md:hidden transition-all",
              isOpen ? "block" : "hidden"
            )}
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="font-medium text-moduspec-blue hover:text-moduspec-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
