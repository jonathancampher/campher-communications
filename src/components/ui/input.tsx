
import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isSearchInput?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, isSearchInput, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {isSearchInput && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img 
              src="/lovable-uploads/308e0f40-d280-4330-a362-2c166bf5621c.png" 
              alt="Campher Communications Search Icon" 
              className="h-4 w-4 opacity-80" 
            />
          </div>
        )}
        {icon && !isSearchInput && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            (isSearchInput || icon) && "pl-10",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
