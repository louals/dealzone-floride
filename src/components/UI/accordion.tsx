import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  type?: "single" | "multiple";
  className?: string;
  children: React.ReactNode;
}

export function Accordion({ type = "single", className, children }: AccordionProps) {
  return (
    <div
      className={cn(
        "w-full divide-y divide-white/10 border border-white/20 rounded-lg bg-white/5",
        className
      )}
      data-type={type}
    >
      {children}
    </div>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <div className="accordion-item" data-value={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <button
      {...props}
      onClick={() => setOpen(!open)}
      className={cn(
        "w-full flex justify-between items-center py-3 px-4 text-left text-sm font-medium text-[#f1f3ee] hover:bg-white/10 transition-colors",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200 text-[#e6c77c]",
          open && "rotate-180"
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "px-4 pb-4 text-sm text-gray-300",
        className
      )}
      data-open={open}
    >
      {children}
    </div>
  );
}
