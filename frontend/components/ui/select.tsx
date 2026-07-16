/* oxlint-disable jsx-a11y/prefer-tag-over-role -- intentional custom-styled combobox (ARIA listbox pattern), not a native select */
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  name: string;
  options: SelectOption[];
  placeholder: string;
  defaultValue?: string;
  className?: string;
}

export function Select({
  id,
  name,
  options,
  placeholder,
  defaultValue = "",
  className,
}: SelectProps) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-md bg-paper-2 px-3 py-2 font-ui text-base text-text outline-none focus:ring-2 focus:ring-layer-ui",
          !selectedLabel && "text-text-muted",
          className,
        )}
      >
        <span>{selectedLabel ?? placeholder}</span>
        <span
          className={cn(
            "font-mono text-[11px] text-text-muted transition-transform",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-md border border-border bg-paper-2 shadow-brand"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                setValue(option.value);
                setOpen(false);
              }}
              className={cn(
                "w-full px-3 py-2 text-left font-ui text-base hover:bg-bg",
                option.value === value && "text-layer-ui",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <input type="hidden" name={name} value={value} />
    </div>
  );
}
