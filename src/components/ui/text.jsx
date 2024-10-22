import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"  // Replace with your actual utility

// Define the text variants using cva
const titleVariants = cva(
  "capitalize",
  {
    variants: {
      size: {
        default: "",  // Default size
        black: "text-7xl",
        h1: "text-6xl",  // Small text
        h2: "text-4xl",  // Large text
        h3: "text-2xl",  // Extra large, bold text
        h4: "text-xl",  // Extra large, bold text
        h5: "text-lg",  // Extra large, bold text
      },
      weight: {
        default: "",
        black: "font-extrabold",
        bold: "font-bold",
        semibold: "font-semibold",
        thin: "font-thin",
      },
      color: {
        default: "text-gray",
        black: "text-slate-900",
        gray: "text-slate-700",
        lightgray: "text-slate-",
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

// Create the Text component
const Title = React.forwardRef(
  ({ className, size, weight, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"  // Default to span, but can be overridden

    return (
      <Comp
        className={cn(titleVariants({ size, weight, color, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Title.displayName = "Title"

export { Title, titleVariants }