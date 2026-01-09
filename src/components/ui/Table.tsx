"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TableContext = React.createContext<{
  variant: "simple" | "striped" | "bordered";
} | null>(null);

function Table({
  className,
  variant = "simple",
  ...props
}: React.HTMLAttributes<HTMLTableElement> & { variant?: "simple" | "striped" | "bordered" }) {
  return (
    <TableContext.Provider value={{ variant }}>
      <div className={cn(
        "relative w-full overflow-auto",
        variant === "bordered" && "rounded-lg border",
        className
      )}>
        <table
          className={cn(
            "w-full caption-bottom text-sm",
            variant === "striped" && "overflow-hidden rounded-lg",
          )}
          {...props}
        />
      </div>
    </TableContext.Provider>
  );
}
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const context = React.useContext(TableContext);
  const variant = context?.variant || "simple";
  
  return (
    <tr
      ref={ref}
      className={cn(
        "transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        
        // Simple/Bordered: Bottom border
        (variant === "simple" || variant === "bordered") && "border-b border-border",
        
        // Striped: Alternating colors, no border usually, or subtle border
        variant === "striped" && "border-none odd:bg-black/5 dark:odd:bg-white/5 even:bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
        
        className
      )}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const context = React.useContext(TableContext);
  const variant = context?.variant || "simple";

  return (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        variant === "bordered" && "border-r border-border last:border-r-0 bg-muted/50",
        className
      )}
      {...props}
    />
  );
});
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const context = React.useContext(TableContext);
  const variant = context?.variant || "simple";

  return (
    <td
      ref={ref}
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        variant === "bordered" && "border-r border-border last:border-r-0",
        className
      )}
      {...props}
    />
  );
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
