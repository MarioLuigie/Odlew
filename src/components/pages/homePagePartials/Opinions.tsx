// components
import OpinionsCarouselList from "@/components/content/OpinionsCarouselList";
import CustomButton from "@/components/shared/CustomButton";
import Title from "@/components/shared/Title";

export default function Opinions() {
	return (
		<div>
			<Title className="mb-12 px-5">
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
	)
}
