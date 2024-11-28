// modules
import Image from "next/image"
// lib
import { HomeAboutImages } from "@/lib/constants/images"
// components
import CustomButton from "@/components/shared/CustomButton"
import TextContent from "@/components/shared/TextContent"
import Title from "@/components/shared/Title"

export default function About() {
  return (
    <section
      id="o-nas"
      className="min-h-customScreen flex flex-col bg-background scroll-mt-header"
    >
      <Title className="mb-6 px-5">
        <p>Kim jesteśmy?</p>
        {/* <p>Co tworzymy?</p>
        <p>Dokąd zmierzamy?</p> */}
      </Title>
      <TextContent className="px-5">
        <p>
          Jesteśmy rodzinną firmą zajmującą się odlewnictwem artystycznym.
          Założoną w 2020 roku jako ewolucja trwającej ponad 40 lat
          rzemieślniczej pracy artysty Józefa Polewki, który samodzielnie
          wykonywał i nadal wykonuje odlewy swoich prac. Wyróżnia nas w pełni
          indywidualne podejście do klienta oraz dbałość o najwyższą jakość.
        </p>
      </TextContent>
      <div className="px-5 mt-6">
        <CustomButton navlink path="/o-nas">
          Czytaj więcej
        </CustomButton>
      </div>
      <div className="mt-12 flex gap-2 overflow-x-auto">
        {HomeAboutImages.map((image, i) => (
          <Image
            key={i}
            src={image.path}
            alt={image.alt}
            width={600}
            height={600}
            priority
            className="w-full"
          />
        ))}
      </div>
      <div className="h-customScreen flex flex-col justify-center items-center bg-mottoBg">
        <div className="flex flex-col justify-center items-center text-[28px] font-semibold text-zinc-500">
          <p>Są rzeczy trudne</p>
          <p>ale</p>
          <p>nie niemożliwe</p>
        </div>
      </div>
    </section>
  )
}
