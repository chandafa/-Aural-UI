// src/components/Button.tsx
import { forwardRef } from "react";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = forwardRef(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        disabled,
        className: cn(
          "inline-flex items-center justify-center rounded-[2rem] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border border-border bg-transparent hover:bg-muted": variant === "outline",
            "bg-transparent hover:bg-muted": variant === "ghost",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive"
          },
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg"
          },
          className
        ),
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Badge.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Badge({
  children,
  variant = "default",
  size = "md",
  className
}) {
  return /* @__PURE__ */ jsx2(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full font-medium",
        {
          "bg-muted text-foreground": variant === "default",
          "bg-success/20 text-success": variant === "success",
          "bg-warning/20 text-warning": variant === "warning",
          "bg-destructive/20 text-destructive": variant === "error",
          "bg-info/20 text-info": variant === "info"
        },
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-2.5 py-1 text-sm": size === "md"
        },
        className
      ),
      children
    }
  );
}

// src/components/Alert.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var icons = {
  success: /* @__PURE__ */ jsx3("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
  error: /* @__PURE__ */ jsx3("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
  warning: /* @__PURE__ */ jsx3("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }),
  info: /* @__PURE__ */ jsx3("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })
};
function Alert({
  children,
  variant = "info",
  title,
  icon = true,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "alert",
      className: cn(
        "flex gap-3 rounded-[2rem] border p-4 backdrop-blur-sm",
        {
          "border-success/30 bg-success/10 text-success": variant === "success",
          "border-destructive/30 bg-destructive/10 text-destructive": variant === "error",
          "border-warning/30 bg-warning/10 text-warning": variant === "warning",
          "border-info/30 bg-info/10 text-info": variant === "info"
        },
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx3("div", { className: "flex-shrink-0", children: icons[variant] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          title && /* @__PURE__ */ jsx3("div", { className: "mb-1 font-semibold", children: title }),
          /* @__PURE__ */ jsx3("div", { className: "text-sm opacity-90", children })
        ] })
      ]
    }
  );
}

// src/components/Card.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Card({ children, className, hoverable }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: cn(
        "rounded-[2rem] border border-white/10 bg-background/60 p-6 backdrop-blur-md",
        hoverable && "hover-lift hover:border-violet-500/20",
        className
      ),
      children
    }
  );
}
function CardHeader({ children, className }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("mb-4", className), children });
}
function CardTitle({ children, className }) {
  return /* @__PURE__ */ jsx4("h3", { className: cn("text-lg font-semibold", className), children });
}
function CardDescription({ children, className }) {
  return /* @__PURE__ */ jsx4("p", { className: cn("text-sm text-muted-foreground", className), children });
}
function CardContent({ children, className }) {
  return /* @__PURE__ */ jsx4("div", { className: cn(className), children });
}
function CardFooter({ children, className }) {
  return /* @__PURE__ */ jsx4("div", { className: cn("mt-4 flex items-center gap-2", className), children });
}

// src/components/Input.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Input = forwardRef2(
  ({ className, error, inputSize = "md", disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "input",
      {
        ref,
        disabled,
        className: cn(
          "w-full rounded-[2rem] border bg-background/50 px-4 text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error
          },
          {
            "h-8 text-sm": inputSize === "sm",
            "h-10 text-sm": inputSize === "md",
            "h-12 text-base": inputSize === "lg"
          },
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/Modal.tsx
import { useEffect, useCallback } from "react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnBackdrop = true,
  className
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs2("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx6(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-md",
        onClick: closeOnBackdrop ? onClose : void 0,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx6(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        className: cn(
          "relative z-10 w-full rounded-[2rem] border border-white/10 bg-background/80 p-6 shadow-2xl backdrop-blur-xl",
          {
            "max-w-sm": size === "sm",
            "max-w-md": size === "md",
            "max-w-lg": size === "lg",
            "max-w-xl": size === "xl"
          },
          className
        ),
        children
      }
    )
  ] });
}
function ModalHeader({ children, className }) {
  return /* @__PURE__ */ jsx6("div", { className: cn("mb-4", className), children });
}
function ModalTitle({ children, className }) {
  return /* @__PURE__ */ jsx6("h2", { className: cn("text-lg font-semibold", className), children });
}
function ModalBody({ children, className }) {
  return /* @__PURE__ */ jsx6("div", { className: cn("text-sm text-muted-foreground", className), children });
}
function ModalFooter({ children, className }) {
  return /* @__PURE__ */ jsx6("div", { className: cn("mt-6 flex items-center justify-end gap-2", className), children });
}

// src/components/Select.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Select = forwardRef3(
  ({ className, options, placeholder, error, selectSize = "md", disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsxs3(
      "select",
      {
        ref,
        disabled,
        className: cn(
          "w-full appearance-none rounded-[2rem] border bg-background/50 px-4 text-foreground backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error
          },
          {
            "h-8 text-sm": selectSize === "sm",
            "h-10 text-sm": selectSize === "md",
            "h-12 text-base": selectSize === "lg"
          },
          "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%2371717a%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10",
          className
        ),
        ...props,
        children: [
          placeholder && /* @__PURE__ */ jsx7("option", { value: "", disabled: true, children: placeholder }),
          options.map((option) => /* @__PURE__ */ jsx7("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value))
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/components/Textarea.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Textarea = forwardRef4(
  ({ className, error, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsx8(
      "textarea",
      {
        ref,
        disabled,
        className: cn(
          "min-h-[80px] w-full rounded-[2rem] border bg-background/50 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error
          },
          className
        ),
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/Tooltip.tsx
import { useState, useRef } from "react";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
function Tooltip({
  children,
  content,
  position = "top",
  className
}) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-foreground border-l-transparent border-r-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-foreground border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-foreground border-t-transparent border-b-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-foreground border-t-transparent border-b-transparent border-l-transparent"
  };
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      ref: triggerRef,
      className: "relative inline-flex",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      onFocus: () => setIsVisible(true),
      onBlur: () => setIsVisible(false),
      children: [
        children,
        isVisible && /* @__PURE__ */ jsxs4(
          "div",
          {
            role: "tooltip",
            className: cn(
              "absolute z-50 whitespace-nowrap rounded-[1rem] bg-foreground/90 px-3 py-1.5 text-xs text-background shadow-lg backdrop-blur-sm",
              positionClasses[position],
              className
            ),
            children: [
              content,
              /* @__PURE__ */ jsx9(
                "div",
                {
                  className: cn(
                    "absolute h-0 w-0 border-4",
                    arrowClasses[position]
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/components/Table.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function Table({ children, className, striped, hoverable }) {
  return /* @__PURE__ */ jsx10("div", { className: "w-full overflow-hidden rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md", children: /* @__PURE__ */ jsx10("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx10(
    "table",
    {
      className: cn(
        "w-full caption-bottom text-sm",
        striped && "[&_tbody_tr:nth-child(even)]:bg-muted/30",
        hoverable && "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-muted/50",
        className
      ),
      children
    }
  ) }) });
}
function TableHeader({ children, className }) {
  return /* @__PURE__ */ jsx10("thead", { className: cn("border-b border-border", className), children });
}
function TableBody({ children, className }) {
  return /* @__PURE__ */ jsx10("tbody", { className: cn("[&_tr:last-child]:border-0", className), children });
}
function TableRow({ children, className }) {
  return /* @__PURE__ */ jsx10("tr", { className: cn("border-b border-border", className), children });
}
function TableHead({ children, className }) {
  return /* @__PURE__ */ jsx10(
    "th",
    {
      className: cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
        className
      ),
      children
    }
  );
}
function TableCell({ children, className }) {
  return /* @__PURE__ */ jsx10("td", { className: cn("p-4 align-middle", className), children });
}

// src/components/Form.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
function Form({ children, className, ...props }) {
  return /* @__PURE__ */ jsx11("form", { className: cn("space-y-4", className), ...props, children });
}
function FormField({ children, className }) {
  return /* @__PURE__ */ jsx11("div", { className: cn("space-y-2", className), children });
}
function FormLabel({ children, required, className, ...props }) {
  return /* @__PURE__ */ jsxs5(
    "label",
    {
      className: cn("text-sm font-medium text-foreground", className),
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ jsx11("span", { className: "ml-1 text-destructive", children: "*" })
      ]
    }
  );
}
function FormDescription({ children, className }) {
  return /* @__PURE__ */ jsx11("p", { className: cn("text-xs text-muted-foreground", className), children });
}
function FormError({ children, className }) {
  return /* @__PURE__ */ jsx11("p", { className: cn("text-xs text-destructive", className), children });
}

// src/components/NeonButton.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var NeonButton = forwardRef5(
  ({ className, variant = "cyan", neonSize = "md", children, ...props }, ref) => {
    const variants = {
      cyan: "border-cyan-400 text-cyan-400 shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_20px_#22d3ee] hover:bg-cyan-400 hover:text-black",
      magenta: "border-fuchsia-400 text-fuchsia-400 shadow-[0_0_10px_#e879f9] hover:shadow-[0_0_20px_#e879f9] hover:bg-fuchsia-400 hover:text-black",
      lime: "border-lime-400 text-lime-400 shadow-[0_0_10px_#a3e635] hover:shadow-[0_0_20px_#a3e635] hover:bg-lime-400 hover:text-black",
      violet: "border-violet-400 text-violet-400 shadow-[0_0_10px_#a78bfa] hover:shadow-[0_0_20px_#a78bfa] hover:bg-violet-400 hover:text-white"
    };
    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-6 py-2 text-base",
      lg: "px-8 py-3 text-lg"
    };
    return /* @__PURE__ */ jsxs6(
      "button",
      {
        ref,
        className: cn(
          "relative inline-flex items-center justify-center rounded-lg border-2 bg-transparent font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[neonSize],
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx12("span", { className: "relative z-10 filter drop-shadow-sm", children }),
          /* @__PURE__ */ jsx12("div", { className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-20 bg-current" })
        ]
      }
    );
  }
);
NeonButton.displayName = "NeonButton";

// src/components/GlassCard.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var GlassCard = forwardRef6(
  ({ className, intensity = "medium", children, ...props }, ref) => {
    const intensities = {
      low: "bg-white/10 backdrop-blur-sm border-white/20",
      medium: "bg-white/10 backdrop-blur-md border-white/30",
      high: "bg-white/10 backdrop-blur-xl border-white/40"
    };
    return /* @__PURE__ */ jsxs7(
      "div",
      {
        ref,
        className: cn(
          "rounded-xl border shadow-xl overflow-hidden relative",
          intensities[intensity],
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx13("div", { className: "absolute inset-0 opacity-5 pointer-events-none", style: { backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` } }),
          /* @__PURE__ */ jsx13("div", { className: "relative z-10 p-6", children })
        ]
      }
    );
  }
);
GlassCard.displayName = "GlassCard";

// src/components/BlurText.tsx
import { useRef as useRef2, useEffect as useEffect2, useState as useState2 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
function BlurText({
  text,
  className,
  delay = 0,
  wordDelay = 50
}) {
  const [isVisible, setIsVisible] = useState2(false);
  const ref = useRef2(null);
  const words = text.split(" ");
  useEffect2(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  return /* @__PURE__ */ jsx14("div", { ref, className: cn("inline-block", className), children: words.map((word, wordIndex) => /* @__PURE__ */ jsx14(
    "span",
    {
      className: "inline-block mr-[0.25em] overflow-hidden",
      style: { verticalAlign: "top" },
      children: /* @__PURE__ */ jsx14(
        "span",
        {
          className: cn(
            "inline-block transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
            isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-[10px] translate-y-4"
          ),
          style: {
            transitionDelay: `${wordIndex * wordDelay}ms`
          },
          children: word
        }
      )
    },
    wordIndex
  )) });
}

// src/components/SpotlightCard.tsx
import { useRef as useRef3, useState as useState3 } from "react";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(139, 92, 246, 0.15)",
  // Violet-ish
  ...props
}) {
  const divRef = useRef3(null);
  const [position, setPosition] = useState3({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState3(0);
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleMouseEnter = () => {
    setOpacity(1);
  };
  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      ref: divRef,
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/60 backdrop-blur-md transition-colors hover:border-violet-500/20",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx15(
          "div",
          {
            className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
            style: {
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
            }
          }
        ),
        /* @__PURE__ */ jsx15("div", { className: "relative h-full", children })
      ]
    }
  );
}

// src/components/TrueFocus.tsx
import { useState as useState4 } from "react";
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
function TrueFocus({
  className,
  label = "Focus me",
  focusColor = "#8b5cf6",
  // Violet-500
  ...props
}) {
  const [isFocused, setIsFocused] = useState4(false);
  return /* @__PURE__ */ jsxs9("div", { className: "relative group", children: [
    /* @__PURE__ */ jsx16(
      "div",
      {
        className: cn(
          "absolute -inset-0.5 rounded-lg opacity-0 transition-opacity duration-300 blur-md group-hover:opacity-50",
          isFocused ? "opacity-100" : ""
        ),
        style: {
          background: isFocused ? `linear-gradient(45deg, ${focusColor}, transparent)` : "transparent"
        }
      }
    ),
    /* @__PURE__ */ jsxs9("div", { className: "relative", children: [
      /* @__PURE__ */ jsx16(
        "input",
        {
          className: cn(
            "flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-300",
            className
          ),
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
          placeholder: label,
          ...props
        }
      ),
      /* @__PURE__ */ jsx16(
        "div",
        {
          className: cn(
            "absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 ease-out",
            isFocused ? "w-full" : "w-0"
          )
        }
      )
    ] })
  ] });
}

// src/components/AnimatedGradientText.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function AnimatedGradientText({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      className: cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx17(
          "div",
          {
            className: cn(
              "absolute inset-0 block h-full w-full animate-shimmer bg-[linear-gradient(110deg,transparent,45%,var(--color-shimmer,rgba(167,139,250,0.5)),55%,transparent)] bg-[length:200%_100%]"
            )
          }
        ),
        /* @__PURE__ */ jsx17("span", { className: "relative z-10", children })
      ]
    }
  );
}

// src/components/BorderBeam.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0
}) {
  return /* @__PURE__ */ jsx18(
    "div",
    {
      style: {
        "--size": size,
        "--duration": duration,
        "--anchor": anchor,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": delay
      },
      className: cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // Mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // Pseudo element for the beam
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:calc(var(--delay)*1s)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )
    }
  );
}

// src/components/Dock.tsx
import React3, { useRef as useRef4, useState as useState5 } from "react";
import { jsx as jsx19 } from "react/jsx-runtime";
var DEFAULT_MAGNIFICATION = 60;
var DEFAULT_DISTANCE = 140;
function Dock({
  className,
  direction: _direction = "bottom",
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE
}) {
  const dockRef = useRef4(null);
  const renderChildren = () => {
    return React3.Children.map(children, (child) => {
      if (React3.isValidElement(child)) {
        return React3.cloneElement(child, {
          magnification,
          distance
        });
      }
      return child;
    });
  };
  return /* @__PURE__ */ jsx19(
    "div",
    {
      ref: dockRef,
      className: cn(
        "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
        className
      ),
      children: renderChildren()
    }
  );
}
function DockIcon({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  className,
  children,
  ...props
}) {
  const ref = useRef4(null);
  const [scale, setScale] = useState5(1);
  React3.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - centerX);
      if (dist < distance) {
        const val = 1 + (magnification / size - 1) * Math.cos(dist / distance * Math.PI / 2);
        setScale(val);
      } else {
        setScale(1);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [distance, magnification, size]);
  return /* @__PURE__ */ jsx19(
    "div",
    {
      ref,
      style: {
        width: size * scale,
        height: size * scale,
        transition: "width 0.1s ease-out, height 0.1s ease-out"
      },
      className: cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-black/5 dark:bg-white/10 shadow-sm hover:bg-black/10 dark:hover:bg-white/20",
        className
      ),
      ...props,
      children
    }
  );
}

// src/components/MeteorMeteors.tsx
import { useEffect as useEffect3, useState as useState6 } from "react";
import { Fragment, jsx as jsx20 } from "react/jsx-runtime";
var Meteors = ({ number = 20, className }) => {
  const [meteors, setMeteors] = useState6([]);
  useEffect3(() => {
    const meteorStyles = new Array(number).fill(null).map(() => ({
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 0.6 + 0.2,
      duration: Math.floor(Math.random() * 8 + 2)
    }));
    setMeteors(meteorStyles);
  }, [number]);
  return /* @__PURE__ */ jsx20(Fragment, { children: meteors.map((style, idx) => (
    // Meteor Head
    /* @__PURE__ */ jsx20(
      "span",
      {
        className: cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
          className
        ),
        style: {
          top: "-5px",
          left: `${style.left}%`,
          animationDelay: `${style.delay}s`,
          animationDuration: `${style.duration}s`
        },
        children: /* @__PURE__ */ jsx20("div", { className: "pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" })
      },
      idx
    )
  )) });
};

// src/components/MagicCard.tsx
import { useState as useState7, useRef as useRef5 } from "react";
import { jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  ...props
}) {
  const cardRef = useRef5(null);
  const [position, setPosition] = useState7({ x: -gradientSize, y: -gradientSize });
  const [opacity, setOpacity] = useState7(0);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };
  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      className: cn(
        "group relative flex h-full w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 text-black dark:text-white",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx21("div", { className: "relative z-10", children }),
        /* @__PURE__ */ jsx21(
          "div",
          {
            className: "pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300",
            style: {
              opacity,
              background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 100%)`
            }
          }
        )
      ]
    }
  );
}

// src/components/Dialog.tsx
import * as React4 from "react";
import { jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className
}) {
  React4.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs12("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx22(
      "div",
      {
        className: "absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx22(
      "div",
      {
        className: cn(
          "relative z-10 w-full max-w-sm transform overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95",
          "rounded-[2rem]",
          // Super rounded corners
          "bg-white/70 dark:bg-zinc-900/70",
          // Semi-transparent background
          "backdrop-blur-2xl supported-[backdrop-filter]:bg-white/40",
          // Strong blur
          "shadow-2xl ring-1 ring-white/20 dark:ring-white/10",
          // Subtle border ring
          "p-6",
          className
        ),
        children: /* @__PURE__ */ jsxs12("div", { className: "flex flex-col gap-4", children: [
          (title || description) && /* @__PURE__ */ jsxs12("div", { className: "space-y-2", children: [
            title && /* @__PURE__ */ jsx22("h2", { className: "text-lg font-semibold leading-none tracking-tight", children: title }),
            description && /* @__PURE__ */ jsx22("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
          ] }),
          children,
          footer && /* @__PURE__ */ jsx22("div", { className: "flex gap-3 pt-2", children: footer })
        ] })
      }
    )
  ] });
}
function DialogButton({
  className,
  variant = "primary",
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    "button",
    {
      className: cn(
        "flex-1 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" : "bg-blue-100/50 text-blue-900 hover:bg-blue-200/50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
        className
      ),
      ...props
    }
  );
}

// src/components/Switch.tsx
import * as React5 from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
var Switch = React5.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const handleClick = (e) => {
      onCheckedChange?.(!checked);
      props.onClick?.(e);
    };
    return /* @__PURE__ */ jsx23(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        ref,
        onClick: handleClick,
        className: cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          "backdrop-blur-md",
          checked ? "bg-blue-500/50" : "bg-white/10 input",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx23(
          "span",
          {
            className: cn(
              "pointer-events-none block h-5 w-5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] ring-0 transition-transform",
              checked ? "translate-x-5 bg-white" : "translate-x-0 bg-white/70"
            )
          }
        )
      }
    );
  }
);
Switch.displayName = "Switch";

// src/components/Slider.tsx
import * as React6 from "react";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var Slider = React6.forwardRef(
  ({ className, value, defaultValue, min = 0, max = 100, onValueChange, ...props }, ref) => {
    const isControlled = value !== void 0;
    const [localValue, setLocalValue] = React6.useState(defaultValue ?? min);
    const currentValue = (isControlled ? value : localValue) ?? min;
    const handleChange = (e) => {
      const newValue = Number(e.target.value);
      if (!isControlled) {
        setLocalValue(newValue);
      }
      onValueChange?.(newValue);
      props.onChange?.(e);
    };
    const percentage = (currentValue - min) * 100 / (max - min);
    return /* @__PURE__ */ jsxs13("div", { className: cn("relative flex w-full touch-none select-none items-center", className), children: [
      /* @__PURE__ */ jsx24("div", { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsx24(
        "div",
        {
          className: "absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-80 transition-all",
          style: { width: `${percentage}%` }
        }
      ) }),
      /* @__PURE__ */ jsx24(
        "div",
        {
          className: "absolute h-5 w-5 rounded-full border border-white/50 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          style: { left: `calc(${percentage}% - 10px)` }
        }
      ),
      /* @__PURE__ */ jsx24(
        "input",
        {
          type: "range",
          min,
          max,
          value: currentValue,
          ref,
          onChange: handleChange,
          className: "absolute inset-0 w-full opacity-0 cursor-pointer",
          ...props
        }
      )
    ] });
  }
);
Slider.displayName = "Slider";

// src/components/Tabs.tsx
import * as React7 from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
var TabsContext = React7.createContext(null);
function Tabs({
  defaultValue,
  className,
  children
}) {
  const [activeTab, setActiveTab] = React7.useState(defaultValue);
  return /* @__PURE__ */ jsx25(TabsContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsx25("div", { className: cn("w-full", className), children }) });
}
function TabsList({
  className,
  children
}) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      className: cn(
        "inline-flex h-10 items-center justify-center rounded-full bg-white/5 p-1 text-muted-foreground backdrop-blur-md",
        className
      ),
      children
    }
  );
}
function TabsTrigger({
  value,
  className,
  children
}) {
  const context = React7.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");
  const isActive = context.activeTab === value;
  return /* @__PURE__ */ jsx25(
    "button",
    {
      onClick: () => context.setActiveTab(value),
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-white/10 text-foreground shadow-lg backdrop-blur-sm" : "hover:bg-white/5 hover:text-foreground",
        className
      ),
      children
    }
  );
}
function TabsContent({
  value,
  className,
  children
}) {
  const context = React7.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");
  if (context.activeTab !== value) return null;
  return /* @__PURE__ */ jsx25(
    "div",
    {
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in zoom-in-95 duration-200",
        className
      ),
      children
    }
  );
}

// src/components/Accordion.tsx
import * as React8 from "react";
import { ChevronDown } from "lucide-react";
import { jsx as jsx26, jsxs as jsxs14 } from "react/jsx-runtime";
var AccordionContext = React8.createContext(null);
function Accordion({
  children,
  className
}) {
  const [openItem, setOpenItem] = React8.useState(null);
  const toggleItem = (value) => {
    setOpenItem((prev) => prev === value ? null : value);
  };
  return /* @__PURE__ */ jsx26(AccordionContext.Provider, { value: { openItem, toggleItem }, children: /* @__PURE__ */ jsx26("div", { className: cn("space-y-2", className), children }) });
}
function AccordionItem({ value, trigger, children, className }) {
  const context = React8.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");
  const isOpen = context.openItem === value;
  return /* @__PURE__ */ jsxs14("div", { className: cn("rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-200", className), children: [
    /* @__PURE__ */ jsxs14(
      "button",
      {
        onClick: () => context.toggleItem(value),
        className: "flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-all hover:bg-white/5 [&[data-state=open]>svg]:rotate-180",
        "data-state": isOpen ? "open" : "closed",
        children: [
          trigger,
          /* @__PURE__ */ jsx26(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200 text-white/50" })
        ]
      }
    ),
    /* @__PURE__ */ jsx26(
      "div",
      {
        className: cn(
          "overflow-hidden text-sm transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4 px-4" : "max-h-0 opacity-0"
        ),
        children: /* @__PURE__ */ jsx26("div", { className: "text-white/70 pt-2 border-t border-white/5", children })
      }
    )
  ] });
}

// src/components/Navbar.tsx
import { useState as useState11 } from "react";
import { Fragment as Fragment2, jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
function Navbar({
  logo,
  items = [],
  rightAction,
  className,
  mobileMenuOpen: controlledMobileMenuOpen,
  onMobileMenuToggle,
  LinkComponent = "a"
  // Default to anchor tag
}) {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState11(false);
  const isMobileMenuOpen = controlledMobileMenuOpen ?? internalMobileMenuOpen;
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setInternalMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  };
  const Link = LinkComponent;
  return /* @__PURE__ */ jsx27(Fragment2, { children: /* @__PURE__ */ jsxs15("header", { className: cn("fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl", className), children: [
    /* @__PURE__ */ jsxs15(
      "div",
      {
        className: cn(
          "flex items-center justify-between rounded-[2rem] transition-all duration-500",
          "px-6 py-3",
          // Glass effect - Standard Tailwind Dark Mode
          "bg-white/60 dark:bg-white/5",
          "backdrop-blur-2xl",
          "border border-white/20 dark:border-white/10",
          "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        ),
        children: [
          /* @__PURE__ */ jsx27("div", { className: "flex items-center gap-2 group", children: logo || /* @__PURE__ */ jsx27("span", { className: "text-lg font-bold tracking-tight text-zinc-900 dark:text-white", children: "Brand" }) }),
          /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-1.5", children: [
            rightAction,
            /* @__PURE__ */ jsx27(
              "button",
              {
                className: "md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all",
                onClick: toggleMobileMenu,
                "aria-label": "Menu",
                children: isMobileMenuOpen ? /* @__PURE__ */ jsx27("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx27("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx27("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx27("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) })
              }
            )
          ] })
        ]
      }
    ),
    isMobileMenuOpen && /* @__PURE__ */ jsx27(
      "div",
      {
        className: cn(
          "md:hidden mt-2 mx-2 rounded-[1.5rem] backdrop-blur-3xl overflow-hidden animate-in slide-in-from-top-2 duration-300",
          // Use standard dark classes
          "bg-white dark:bg-zinc-900/95",
          "border border-black/[0.05] dark:border-white/[0.08]",
          "shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        ),
        children: /* @__PURE__ */ jsx27("nav", { className: "p-2 space-y-1", children: items.map((item) => /* @__PURE__ */ jsx27(
          Link,
          {
            href: item.href,
            className: cn(
              "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
              "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
            ),
            onClick: () => {
              setInternalMobileMenuOpen(false);
              onMobileMenuToggle?.(false);
            },
            children: item.name
          },
          item.href
        )) })
      }
    )
  ] }) });
}

// src/components/CommandMenu.tsx
import { useState as useState12, useEffect as useEffect5, useMemo, useCallback as useCallback2 } from "react";
import { jsx as jsx28, jsxs as jsxs16 } from "react/jsx-runtime";
function CommandMenu({
  open,
  onOpenChange,
  items = [],
  placeholder = "Type a command or search..."
}) {
  const [query, setQuery] = useState12("");
  useEffect5(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange, open]);
  const filteredItems = useMemo(() => {
    if (!query) return [];
    return items.filter(
      (item) => item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);
  const runCommand = useCallback2((command) => {
    onOpenChange(false);
    command();
  }, [onOpenChange]);
  if (!open) return null;
  return /* @__PURE__ */ jsxs16("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-[15vh]", children: [
    /* @__PURE__ */ jsx28(
      "div",
      {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
        onClick: () => onOpenChange(false)
      }
    ),
    /* @__PURE__ */ jsxs16("div", { className: cn(
      "relative w-full max-w-lg overflow-hidden transition-all duration-300",
      "rounded-[2rem]",
      "backdrop-blur-xl",
      "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
      // Standard Dark Mode Classes
      "bg-white/80 dark:bg-zinc-900/80",
      "border border-white/20 dark:border-white/10",
      "shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
    ), children: [
      /* @__PURE__ */ jsxs16("div", { className: cn(
        "flex items-center border-b px-4 pt-1",
        "border-black/5 dark:border-white/5"
      ), children: [
        /* @__PURE__ */ jsx28(
          "svg",
          {
            className: "mr-2 h-4 w-4 shrink-0 opacity-50 text-black dark:text-white",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ jsx28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })
          }
        ),
        /* @__PURE__ */ jsx28(
          "input",
          {
            className: cn(
              "h-11 flex-1 rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
              "text-black dark:text-white placeholder:text-zinc-500"
            ),
            placeholder,
            value: query,
            onChange: (e) => setQuery(e.target.value),
            autoFocus: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx28("div", { className: "max-h-[300px] overflow-y-auto p-2", children: query === "" ? /* @__PURE__ */ jsx28("div", { className: "py-6 text-center text-sm text-zinc-500 dark:text-zinc-400", children: "Type to search..." }) : filteredItems.length === 0 ? /* @__PURE__ */ jsx28("div", { className: "py-6 text-center text-sm text-zinc-500 dark:text-zinc-400", children: "No results found." }) : /* @__PURE__ */ jsx28("div", { className: "space-y-1", children: filteredItems.map((item, index) => /* @__PURE__ */ jsxs16(
        "button",
        {
          onClick: () => runCommand(() => {
            item.onSelect?.();
            if (item.href) window.location.href = item.href;
          }),
          className: cn(
            "flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors",
            "text-zinc-600 dark:text-zinc-300",
            "hover:bg-black/5 dark:hover:bg-white/5",
            "hover:text-black dark:hover:text-white"
          ),
          children: [
            /* @__PURE__ */ jsx28("div", { className: cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full mr-2",
              "bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50"
            ), children: item.icon || "#" }),
            /* @__PURE__ */ jsx28("span", { children: item.name }),
            /* @__PURE__ */ jsx28("span", { className: "ml-auto text-xs text-zinc-400 dark:text-zinc-500", children: item.category })
          ]
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxs16("div", { className: cn(
        "border-t px-4 py-2 text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center justify-end gap-2",
        "border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5"
      ), children: [
        /* @__PURE__ */ jsx28("span", { children: "Select" }),
        " ",
        /* @__PURE__ */ jsx28("kbd", { className: "bg-transparent px-1.5 rounded border border-current opacity-50", children: "\u21B5" }),
        /* @__PURE__ */ jsx28("span", { children: "Close" }),
        " ",
        /* @__PURE__ */ jsx28("kbd", { className: "bg-transparent px-1.5 rounded border border-current opacity-50", children: "Esc" })
      ] })
    ] })
  ] });
}
export {
  Accordion,
  AccordionItem,
  Alert,
  AnimatedGradientText,
  Badge,
  BlurText,
  BorderBeam,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CommandMenu,
  Dialog,
  DialogButton,
  Dock,
  DockIcon,
  Form,
  FormDescription,
  FormError,
  FormField,
  FormLabel,
  GlassCard,
  Input,
  MagicCard,
  Meteors,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Navbar,
  NeonButton,
  Select,
  Slider,
  SpotlightCard,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TrueFocus,
  cn
};
//# sourceMappingURL=index.mjs.map