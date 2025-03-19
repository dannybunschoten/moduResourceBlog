"use client";

import { type ReactNode } from "react";
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
  value?: string;
  icon: ReactNode;
  highlight?: boolean;
}

export default function CustomerInformation() {
  const customerInfo: CustomerInfoItem[] = [
    {
      label: "Project Name",
      value: "MRAP1136",
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
      value: "Karamay, Xinjiang region",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      label: "Rig name",
      value: "KRM-Horizon 8750",
      icon: <Construction className="h-5 w-5" />,
    },
    {
      label: "Rig type",
      value: "Land rig",
      icon: <HardHat className="h-5 w-5" />,
    },
    {
      label: "Date",
      value: "7/4/2025 - 21/4/2025",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      label: "Team",
      icon: <Users className="h-5 w-5" />,
      highlight: true,
    },
    {
      label: "Surveyor",
      value: "Bart Musters",
      icon: (
        <img
          src="/bart.jpg"
          alt="Bart Musters"
          className="h-8 w-8 rounded-full"
        />
      ),
    },
    {
      label: "Surveyor",
      value: "Jelle Swanenberg",
      icon: (
        <img
          src="/jelle.jpg"
          alt="Jelle Swanenberg"
          className="h-8 w-8 rounded-full"
        />
      ),
    },
    {
      label: "Techinical Coordinator",
      value: "Peter Wilke",
      icon: (
        <img
          src="/peter.jpg"
          alt="Peter Wilke"
          className="h-8 w-8 rounded-full"
        />
      ),
    },
  ];

  return (
    <Card className="overflow-hidden border-[#1f3560]/10 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-moduspec-blue pb-4 pt-5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1.5 rounded bg-moduspec-red" />
          <h2 className="font-display text-2xl font-bold text-white">
            Project Details
          </h2>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {customerInfo.map((item) => (
            <div
              key={`customer-info-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "flex gap-3 p-4 transition-colors",
                item.highlight ? "bg-[#1f3560]/5" : "hover:bg-gray-50",
                item.value ? "items-start" : "items-center"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                  item.highlight
                    ? "bg-moduspec-red/10 text-moduspec-red"
                    : "bg-[#1f3560]/10 text-moduspec-blue"
                )}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                {item.value && (
                  <p
                    className={cn(
                      "mt-1 font-medium",
                      item.highlight
                        ? "text-moduspec-red"
                        : "text-moduspec-blue"
                    )}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
