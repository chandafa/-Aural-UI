import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocsPagerProps {
  prev?: {
    name: string;
    slug: string;
  };
  next?: {
    name: string;
    slug: string;
  };
}

export function DocsPager({ prev, next }: DocsPagerProps) {
  const buttonClass = cn(
    "inline-flex items-center justify-center rounded-[2rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    "border border-border bg-transparent hover:bg-muted", // outline variant
    "h-10 px-4 text-sm", // md size
    "no-underline group"
  );

  return (
    <div className="flex flex-row items-center justify-between">
      {prev ? (
        <Link
          href={`/components/${prev.slug}`}
          className={buttonClass}
        >
          <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {prev.name}
        </Link>
      ) : (
        <div /> // Spacer
      )}
      {next ? (
        <Link
          href={`/components/${next.slug}`}
          className={buttonClass}
        >
          {next.name}
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}
