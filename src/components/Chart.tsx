import { TrendingDown, TrendingUp } from "lucide-react";
import { ActionItem } from "../lib/blog-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface GroupedActions {
  [key: string]: ActionItem[];
}

const chartOrder = [
  "Open",
  "Deferred",
  "Scheduled",
  "In Progress",
  "Completed",
  "Verified",
];

export function Chart({ data }: { data: ActionItem[] }) {
  const chartData = data.reduce((acc: GroupedActions, item) => {
    if (!acc[item.status]) {
      acc[item.status] = [];
    }
    acc[item.status].push(item);
    return acc;
  }, {});
  const results = Object.entries(chartData)
    .map(([status, actions]) => {
      const severities = actions.reduce(
        (acc, item) => {
          acc[item.severity]++;
          return acc;
        },
        { High: 0, Medium: 0, Low: 0 }
      );

      return {
        status,
        ...severities,
      };
    })
    .sort(
      (a, b) => chartOrder.indexOf(a.status) - chartOrder.indexOf(b.status)
    );

  const finishedItems = results
    .filter((item) => item.status === "Completed" || item.status === "Verified")
    .reduce((acc, item) => acc + item.High + item.Medium + item.Low, 0);
  const totalItems = results.reduce(
    (acc, item) => acc + item.High + item.Medium + item.Low,
    0
  );
  const completionRate = Math.round((finishedItems / totalItems) * 100);

  const chartConfig = {
    High: {
      label: "High",
      color: "var(--color-moduspec-red)",
    },
    Medium: {
      label: "Medium",
      color: "var(--color-moduspec-blue)",
    },
    Low: {
      label: "Low",
      color: "var(--color-green-600)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="not-prose">
      <CardHeader>
        <CardTitle className="text-primary">
          Actions by Status and Severity
        </CardTitle>
        <CardDescription className="text-gray-500">
          Actions grouped by status and ordered by severity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-96">
          <BarChart accessibilityLayer data={results}>
            <CartesianGrid vertical={false} stroke="var(--color-border)" />
            <XAxis
              dataKey="status"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => (value ? value : "")}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="High"
              fill="var(--color-High)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="Medium"
              fill="var(--color-Medium)"
              radius={[4, 4, 0, 0]}
            />
            <Bar dataKey="Low" fill="var(--color-Low)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <p className="text-sm flex items-center gap-2 font-medium leading-none text-primary">
          {finishedItems} of {totalItems} actions completed or verified (
          {completionRate}%)
          {completionRate >= 50 ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
        </p>
      </CardFooter>
    </Card>
  );
}
