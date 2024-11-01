"use client"
// modules
import Image from "next/image"
// lib
import { AboutImages, OfferImages, ProductImages } from "@/lib/constants/images"
//components
import CompanyName from "@/components/content/CompanyName"
import CustomButton from "@/components/shared/CustomButton"
import TextContent from "@/components/content/TextContent"
import Title from "@/components/content/Title"
import OpinionsCarouselList from "@/components/content/OpinionsCarouselList"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HOME */}
      <section
        id="home"
        className="h-customScreen p-5 pb-28 flex flex-col justify-end gap-4 homepage-background scroll-mt-header"
      >
        <CompanyName mode="light" className="h-auto" />
        <CustomButton navlink path="/realizacje">
          Zobacz realizacje
        </CustomButton>
      </section>

      {/* ABOUT */}
      <section
        id="o-nas"
        className="min-h-customScreen flex flex-col bg-background scroll-mt-header"
      >
        <Title>
          <p>Kim jesteśmy?</p>
          <p>Co tworzymy?</p>
          <p>Dokąd zmierzamy?</p>
        </Title>
        <TextContent>
          <p>
            Jesteśmy rodzinną firmą zajmującą się odlewnictwem artystycznym.
            Założoną w 2020 roku jako ewolucja trwającej ponad 40 lat
            rzemieślniczej pracy artysty Józefa Polewki, który samodzielnie
            wykonywał i nadal wykonuje odlewy swoich prac. Wyróżnia nas w pełni
            indywidualne podejście do klienta oraz dbałość o najwyższą jakość.
          </p>
        </TextContent>
        <div className="px-5">
          <CustomButton navlink path="/o-nas">
            Czytaj więcej
          </CustomButton>
        </div>
        <div className="mt-12 flex gap-2 overflow-x-auto">
          {AboutImages.map((image, i) => (
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
          <div className="flex flex-col justify-center items-center gap-4 text-[32px] text-textLight">
            <p>Są rzeczy trudne</p>
            <p>ale nie niemozliwe</p>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section
        id="oferta"
        className="min-h-customScreen bg-background scroll-mt-header"
      >
        <Title>
          <p>Co oferujemy</p>
          <p>i dla kogo?</p>
        </Title>
        <TextContent>
          <p>
            Współpracujemy z artystami którzy swoje prace tworzą w plastycznym
            materiale tj wosk, glina, plastelina lub drewno a chcą je utrwalić w
            metalowej postaci. Z każdym kto chce mieć coś stworzonego
            “wyrzeźbionego” przez siebie. Stworzyć oryginalny prezent dla
            bliskiej osoby. Do współpracy zachęcamy instytucje kultury, urzędy i
            organizacje chcące upamiętnić ważne wydarzenia lub osoby.
          </p>
        </TextContent>
        <div className="px-5">
          <CustomButton navlink path="/oferta">
            Czytaj więcej
          </CustomButton>
        </div>
        <div className="mt-12 flex gap-2 overflow-x-auto">
          {OfferImages.map((image, i) => (
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
      </section>

      {/* REALIZATIONS */}
      <section
        id="realizacje"
        className="min-h-customScreen bg-background scroll-mt-header"
      >
        <Title>
          <p>Nasze realizacje</p>
          <p>i ich znaczenie</p>
        </Title>
        <TextContent>
          <p>
            Nasze realizacje to nie tylko dzieła sztuki, ale także wyjątkowe
            projekty, które łączą pasję z rzemiosłem. Pracujemy nad różnorodnymi
            realizacjami, od indywidualnych zleceń po większe projekty
            artystyczne i kulturalne. Współpraca z artystami oraz klientami
            pozwala nam tworzyć niepowtarzalne dzieła, które mają swoje miejsce
            w galeriach, instytucjach oraz prywatnych kolekcjach.
          </p>
        </TextContent>
        <div className="mt-12 flex flex-col gap-1 overflow-x-auto">
          {ProductImages.slice(0, 3).map((image, i) => (
            <Image
              key={i}
              src={image.path}
              alt={image.alt}
              width={2400}
              height={2400}
              priority
              className="w-full"
            />
          ))}
        </div>
        <div className="px-5 my-12">
          <CustomButton navlink path="/realizacje">
            Zobacz więcej
          </CustomButton>
        </div>

        {/* Opinions */}
        <div>
          <Title className="p-6">
            <p>Opinie klientów</p>
          </Title>

          <div className="w-full flex justify-center">
            <OpinionsCarouselList />
          </div>

          <div className="px-5 my-12">
            <CustomButton navlink path="/realizacje">
              Napisz opinię
            </CustomButton>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontakt"
        className="h-customScreen bg-background scroll-mt-header"
      >
        CONTACT
      </section>
    </div>
  )
}
