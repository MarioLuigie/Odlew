"use client"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

const ReactStars = dynamic(() => import("react-stars"), { ssr: false })

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
  // Handler and calling server action inside to save rating to db
  const ratingChanged = (newRating: number) => {
    console.log(newRating)
  }

  return (
    <div
      className={cn(
        "p-4 pb-12 min-h-[180px] bg-opinionBg rounded-3xl text-textDark",
        className
      )}
    >
      {/* STARS RATING */}
      <div className="pb-4">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color1={"#bebebe"}
          color2={"#E36A00"}
        />
      </div>

      {/* CLIENT NAME AND DATE */}
      <div className="flex justify-between w-full pb-6 text-sm text-textSecondary">
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
