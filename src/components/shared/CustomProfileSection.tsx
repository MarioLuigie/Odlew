// modules
import Image from "next/image"

type CustomProfileSectionProps = {
  children: React.ReactNode
  picturePath?: string
}

export default function CustomProfileSection({
  children,
  picturePath,
}: CustomProfileSectionProps) {
  return (
    <div className="flex flex-col">
      <div>
        <Image src={picturePath || '/assets/images/about-1.jpg'} alt="" width={2400} height={2400} />
      </div>
      <div>{children}</div>
    </div>
  )
}
