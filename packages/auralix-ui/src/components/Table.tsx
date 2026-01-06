import { cn } from "../utils";

export interface TableProps {
  children: React.ReactNode;
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
}

export function Table({ children, className, striped, hoverable }: TableProps) {
  return (
    <div className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md">
      <div className="w-full overflow-x-auto">
        <table
          className={cn(
            "w-full caption-bottom text-sm",
            striped && "[&_tbody_tr:nth-child(even)]:bg-muted/30",
            hoverable && "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-muted/50",
            className
          )}
        >
          {children}
        </table>
      </div>
    </div>
  );
}

export interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={cn("border-b border-border", className)}>
      {children}
    </thead>
  );
}

export interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  );
}

export interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={cn("border-b border-border", className)}>
      {children}
    </tr>
  );
}

export interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </th>
  );
}

export interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td className={cn("p-4 align-middle", className)}>
      {children}
    </td>
  );
}
