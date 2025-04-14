import { cn } from "@/lib/utils"

type TextVerticalLineProps = {
  children: React.ReactNode
  className?: string
  mode?: "dark" | "light"
}

export default function TextVerticalLine({
  children,
  className,
  mode = "dark",
}: TextVerticalLineProps) {
  const textVariants = {
    dark: "text-textDark",
    light: "text-textLight",
  }

  const lineVariants = {
    dark: "bg-textDark",
    light: "bg-textLight",
  }
  return (
    <div className={cn("w-full h-full flex justify-end gap-4", className)}>
      <div className={cn(textVariants[mode], 'w-full')}>{children}</div>
      <div className={cn("w-[2px]", lineVariants[mode])}></div>
    </div>
  )
}
