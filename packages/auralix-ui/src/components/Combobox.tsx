"use client";

import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./Button";
import { Command } from "cmdk";
import { Popover } from "./Popover";

interface ComboboxProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select item...",
  className,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      side="bottom"
      align="start"
      className="p-0"
      trigger={
        <div
          aria-expanded={open}
          className={cn(
             "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer hover:bg-accent hover:text-accent-foreground",
             className
          )}
          role="combobox"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </div>
      }
    >
      <div className="p-0 w-[200px] border border-border bg-popover text-popover-foreground shadow-md rounded-md">
        <Command className="w-full">
          <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
            <input
               className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
               placeholder="Search..."
               onChange={(e) => {
                 // Note: cmdk handles filtering internally usually, but controlled input needs management if advanced
               }}
             />
          </div>
          <div className="max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
             {options.map((option) => (
                <div
                  key={option.value}
                   className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
                    value === option.value ? "bg-accent text-accent-foreground" : ""
                   )}
                   onClick={() => {
                     onChange?.(option.value);
                     setOpen(false);
                   }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </div>
             ))}
             {options.length === 0 && <div className="py-6 text-center text-sm">No items found.</div>}
          </div>
        </Command>
      </div>
    </Popover>
  );
}
