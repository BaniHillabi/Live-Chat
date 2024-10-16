import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"  // Replace with your actual utility

// Define the paragraph variants using cva
const textVariants = cva(
  "text-gray", // Base class for all paragraph components
  {
    variants: {
      weight: {
        default: "",
        bold: "font-bold",
        thin: "font-thin",
      },
      color: {
        default: "text-gray",
        black: "text-slate-900",
        gray: "text-slate-700",
        lightgray: "text-slate-500",
        white: "text-white",
        gradient_a: "bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text",
        gradient_b: "bg-gradient-to-r to-blue-600 from-purple-500 inline-block text-transparent bg-clip-text"
      }
    },
    defaultVariants: {
      size: "default",
      weight: "default",
      color: "default"
    },
  }
)

// Create the Paragraph component
const Paragraph = React.forwardRef(
  ({ className, weight, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"  // Default to span, but can be overridden

    return (
      <Comp
        className={cn(textVariants({ weight, color, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Paragraph.displayName = "Paragraph"

export { Paragraph, textVariants }