// modules
import Image from "next/image"
import { cn } from "@/lib/utils"

type CustomProfileSectionProps = {
  children: React.ReactNode
  picturePath?: string
  className?: string
}

export default function CustomProfileSection({
  children,
  picturePath,
  className,
}: CustomProfileSectionProps) {
  return (
    <div className={cn("flex flex-col pb-8", className)}>
      <div>
        <Image src={picturePath || '/assets/images/about-1.jpg'} alt="" width={2400} height={2400} />
      </div>
      <div>{children}</div>
    </div>
  )
}
