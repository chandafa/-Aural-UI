"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ToCItem {
  title: string;
  url: string;
  items?: ToCItem[];
}

// These are the standard sections we expect on every component page
const items: ToCItem[] = [
  {
    title: "Preview",
    url: "#preview",
  },
  {
    title: "Installation",
    url: "#installation",
  },
  {
    title: "Usage",
    url: "#usage",
  },
  {
    title: "Props",
    url: "#props",
  },
  {
    title: "Variants",
    url: "#variants",
  },
];

export function TableOfContents({ showVariants = true }: { showVariants?: boolean }) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
    
    const handleScroll = () => {
      // Simple logic to highlight based on scroll position could go here
      // For now, we'll just stick to hash based or click based
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems = items.filter(item => {
    if (item.url === "#variants" && !showVariants) return false;
    return true;
  });

  return (
    <div className="space-y-3">
      <p className="font-medium text-sm text-foreground">On this page</p>
      <ul className="m-0 list-none space-y-0 border-l border-border">
        {filteredItems.map((item) => (
          <li key={item.url} className="mt-0">
            <a
              href={item.url}
              className={cn(
                "block border-l-2 py-1 pl-4 text-sm transition-all duration-200 -ml-[1px]",
                activeHash === item.url
                  ? "border-blue-500 text-blue-500 font-medium"
                  : "border-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
              )}
              onClick={() => setActiveHash(item.url)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
