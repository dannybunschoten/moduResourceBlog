"use client";

import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { ActionItem } from "../lib/blog-data";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

const SeverityIndicator = ({
  severity,
}: {
  severity: "High" | "Medium" | "Low";
}) => {
  const styles = {
    High: "text-moduspec-red",
    Medium: "text-moduspec-blue",
    Low: "text-gray-500",
  };

  return (
    <div className="flex items-center">
      <div
        className={cn("w-2 h-2 rounded-full mr-2", {
          "bg-moduspec-red": severity === "High",
          "bg-moduspec-blue": severity === "Medium",
          "bg-gray-500": severity === "Low",
        })}
      />
      <span className={cn("text-sm font-medium", styles[severity])}>
        {severity}
      </span>
    </div>
  );
};

const StatusIndicator = ({ status }: { status: string }) => {
  const completed = ["Completed", "Verified"];
  const inProgress = ["In Progress", "Scheduled"];
  const attention = ["Open", "Deferred"];

  const isCompleted = completed.includes(status);
  const isInProgress = inProgress.includes(status);
  const needsAttention = attention.includes(status);

  return (
    <div className="flex items-center">
      {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />}
      {isInProgress && <Clock className="w-4 h-4 text-moduspec-blue mr-2" />}
      {needsAttention && (
        <AlertCircle className="w-4 h-4 text-moduspec-red mr-2" />
      )}
      <span
        className={cn("text-sm", {
          "text-green-600": isCompleted,
          "text-moduspec-blue": isInProgress,
          "text-moduspec-red": needsAttention,
          "text-gray-500": !isCompleted && !isInProgress && !needsAttention,
        })}
      >
        {status}
      </span>
    </div>
  );
};

interface ActionTableProps {
  actionItems: ActionItem[];
  className?: string;
}

export function ActionTable({ actionItems, className }: ActionTableProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-[#1f3560]/10 shadow-md transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-0">
                <TableHead className="w-[15%] bg-moduspec-blue text-white font-semibold h-12 px-4 first:rounded-tl-md">
                  IADC
                </TableHead>
                <TableHead className="w-[45%] bg-moduspec-blue text-white font-semibold h-12 px-4">
                  Action
                </TableHead>
                <TableHead className="w-[20%] bg-moduspec-blue text-white font-semibold h-12 px-4">
                  Severity
                </TableHead>
                <TableHead className="w-[20%] bg-moduspec-blue text-white font-semibold h-12 px-4 last:rounded-tr-md">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actionItems.map((item, itemIndex) => (
                <TableRow
                  key={itemIndex}
                  className={cn(
                    itemIndex % 2 === 0 ? "bg-white" : "bg-[#1f3560]/5",
                    "hover:bg-[#1f3560]/10"
                  )}
                >
                  <TableCell className="px-4 py-4">
                    <div className="font-medium text-moduspec-blue">
                      {item.iadc}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-4 font-medium text-gray-700">
                    {item.action}
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <SeverityIndicator severity={item.severity} />
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <StatusIndicator status={item.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
