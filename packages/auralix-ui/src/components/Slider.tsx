"use client";

import * as React from "react";
import { cn } from "../utils";

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number;
  min?: number;
  max?: number;
  onValueChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, defaultValue, min = 0, max = 100, onValueChange, ...props }, ref) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = React.useState(defaultValue ?? min);
    
    // Determine the current value to display/use
    const currentValue = ((isControlled ? value : localValue) ?? min) as number;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      
      if (!isControlled) {
        setLocalValue(newValue);
      }
      
      onValueChange?.(newValue);
      props.onChange?.(e);
    };

    const percentage = ((currentValue - min) * 100) / (max - min);

    return (
      <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
        {/* Track */}
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
          {/* Range */}
          <div
            className="absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-80 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {/* Thumb (Visual only, input handles interaction) */}
        <div 
            className="absolute h-5 w-5 rounded-full border border-white/50 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            style={{ left: `calc(${percentage}% - 10px)` }}
        />

        {/* Hidden Input for Logic */}
        <input
            type="range"
            min={min}
            max={max}
            value={currentValue}
            ref={ref}
            onChange={handleChange}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
            {...props}
        />
      </div>
    );
  }
);
Slider.displayName = "Slider";

export { Slider };
