"use client";

import type React from "react";

import {
  Building2,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  HardHat,
  Construction,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "../lib/utils";

interface CustomerInfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export default function CustomerInformation() {
  const customerInfo: CustomerInfoItem[] = [
    {
      label: "Project Name",
      value: "???",
      icon: <Briefcase className="h-5 w-5" />,
      highlight: true,
    },
    {
      label: "Customer",
      value: "Chevron",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      label: "Location",
      value: "Karamay, Xinjian region",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      label: "Rig name",
      value: "???",
      icon: <Construction className="h-5 w-5" />,
    },
    {
      label: "Rig type",
      value: "Lang rig",
      icon: <HardHat className="h-5 w-5" />,
    },
    {
      label: "Date",
      value: "7/4/2025 - 21/4/2025",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      label: "Team",
      value: "Bart Musters & Jelle Swanenberg",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <Card className="overflow-hidden border-[#1f3560]/10 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-[#1f3560] pb-4 pt-5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1.5 rounded bg-[#e30613]" />
          <h2 className="font-display text-2xl font-bold text-white">
            Customer Information
          </h2>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {customerInfo.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 p-4 transition-colors",
                item.highlight ? "bg-[#1f3560]/5" : "hover:bg-gray-50"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                  item.highlight
                    ? "bg-[#e30613]/10 text-[#e30613]"
                    : "bg-[#1f3560]/10 text-[#1f3560]"
                )}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p
                  className={cn(
                    "mt-1 font-medium",
                    item.highlight ? "text-[#e30613]" : "text-[#1f3560]",
                    item.value === "???" ? "italic text-gray-400" : ""
                  )}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
