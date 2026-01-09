"use client";

import React from "react";
import { cn } from "../utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  size = "md",
  className,
}) => {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const generatePages = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      return [...range(1, leftItemCount), "...", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      return [1, "...", ...range(totalPages - rightItemCount + 1, totalPages)];
    }

    return [1, "...", ...range(leftSiblingIndex, rightSiblingIndex), "...", totalPages];
  };

  const pages = generatePages();

  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const PageButton: React.FC<{
    page: number | string;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
  }> = ({ page, isActive, disabled, onClick, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        sizeClasses[size],
        "flex items-center justify-center rounded-lg font-medium transition-all duration-200",
        isActive
          ? "bg-[#007AFF] text-white dark:bg-[#0A84FF]"
          : "text-muted-foreground hover:bg-muted/50 dark:hover:bg-zinc-800/50",
        disabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
      )}
    >
      {children || page}
    </button>
  );

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      role="navigation"
      aria-label="Pagination"
    >
      {/* Previous */}
      <PageButton
        page="prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </PageButton>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className={cn(sizeClasses[size], "flex items-center justify-center text-muted-foreground")}
            >
              ⋯
            </span>
          );
        }
        return (
          <PageButton
            key={page}
            page={page as number}
            isActive={currentPage === page}
            onClick={() => onPageChange(page as number)}
          />
        );
      })}

      {/* Next */}
      <PageButton
        page="next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </PageButton>
    </nav>
  );
};
