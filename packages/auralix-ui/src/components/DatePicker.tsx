"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { Popover } from "./Popover";

export function DatePicker({
  date,
  setDate,
  className,
}: {
  date?: Date;
  setDate: (date?: Date) => void;
  className?: string;
}) {
  return (
    <Popover
      trigger={
        <div
          className={cn(
            "flex h-10 w-full items-center justify-start rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-accent hover:text-accent-foreground cursor-pointer",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </div>
      }
    >
      <div className="w-auto p-0 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </div>
    </Popover>
  );
}
