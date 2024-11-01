type Opinion = {
  name: string
  opinion: string
  date: string
  stars: number
}

export default function Opinion({ opinion }: { opinion: Opinion }) {
  return (
    <div className="p-4 pb-12 min-h-[180px] bg-mottoBg rounded-3xl">
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
