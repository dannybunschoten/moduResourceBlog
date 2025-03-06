import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "../../lib/utils"
import { Check } from "lucide-react"

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative inline-flex items-start">
      <input type="checkbox" className="peer sr-only" ref={ref} {...props} />
      <div
        className={cn(
          "h-4 w-4 shrink-0 rounded-sm border border-primary mr-2 flex items-center justify-center peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className,
        )}
      >
        <Check className="h-3 w-3 hidden peer-checked:flex text-white" />
      </div>
    </div>
  )
})

Checkbox.displayName = "Checkbox"

