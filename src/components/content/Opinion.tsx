import { cn } from "@/lib/utils"

type OpinionProp = {
  name: string
  opinion: string
  date: string
  stars: number
}

export default function Opinion({
  opinion,
  className,
}: {
  opinion: OpinionProp
  className?: string
}) {
  return (
    <div
      className={cn(
        "p-4 pb-12 min-h-[180px] bg-opinionBg rounded-3xl text-textDark",
        className
      )}
    >
      {/* STARS */}
      <div></div>

      {/* CLIENT NAME AND DATE */}
      <div className="flex justify-between w-full pb-6 text-sm">
        <p>{opinion?.name}</p>
        <p>{opinion?.date}</p>
      </div>

      {/* OPINION */}
      <div className="text-sm">
        <p>{opinion?.opinion}</p>
      </div>
    </div>
  )
}
