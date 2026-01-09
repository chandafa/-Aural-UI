"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FileTreeNode {
  name: string;
  type: "file" | "folder";
  children?: FileTreeNode[];
  icon?: React.ReactNode;
}

interface FileTreeProps {
  data: FileTreeNode[];
  className?: string;
  onSelect?: (node: FileTreeNode) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({
  data,
  className,
  onSelect,
}) => {
  return (
    <div className={cn("font-mono text-sm", className)}>
      {data.map((node, index) => (
        <FileTreeItem key={index} node={node} depth={0} onSelect={onSelect} />
      ))}
    </div>
  );
};

interface FileTreeItemProps {
  node: FileTreeNode;
  depth: number;
  onSelect?: (node: FileTreeNode) => void;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ node, depth, onSelect }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const hasChildren = node.type === "folder" && node.children && node.children.length > 0;

  const handleClick = () => {
    if (node.type === "folder") {
      setIsExpanded(!isExpanded);
    }
    onSelect?.(node);
  };

  const getDefaultIcon = () => {
    if (node.type === "folder") {
      return isExpanded ? (
        <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
        </svg>
      );
    }
    
    // File icons based on extension
    const ext = node.name.split(".").pop()?.toLowerCase();
    const iconColor = getFileColor(ext);
    
    return (
      <svg className={cn("w-4 h-4", iconColor)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  };

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-1.5 py-1 px-2 rounded-md cursor-pointer",
          "hover:bg-muted/50 dark:hover:bg-zinc-800/50",
          "transition-colors duration-150"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={handleClick}
      >
        {/* Expand/Collapse Arrow */}
        {hasChildren && (
          <svg
            className={cn(
              "w-3 h-3 text-muted-foreground transition-transform duration-150",
              isExpanded && "rotate-90"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
        {!hasChildren && <span className="w-3" />}
        
        {/* Icon */}
        {node.icon || getDefaultIcon()}
        
        {/* Name */}
        <span className="text-foreground">{node.name}</span>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child, index) => (
            <FileTreeItem
              key={index}
              node={child}
              depth={depth + 1}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function getFileColor(ext?: string): string {
  const colors: Record<string, string> = {
    ts: "text-blue-500",
    tsx: "text-blue-500",
    js: "text-yellow-500",
    jsx: "text-yellow-500",
    css: "text-purple-500",
    html: "text-orange-500",
    json: "text-green-500",
    md: "text-gray-500",
    py: "text-green-400",
    go: "text-cyan-500",
    rs: "text-orange-600",
  };
  return colors[ext || ""] || "text-muted-foreground";
}
