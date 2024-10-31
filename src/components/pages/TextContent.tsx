type TextContentProps = {
	title: React.ReactNode
	content: React.ReactNode
}

export default function TextContent({ title, content }: TextContentProps) {
	return (
		<>
			<div className="mb-6 px-5 pt-5 flex flex-col text-2xl text-textDark">{title}</div>
			<div className="text-justify mb-8 px-5 text-textDark">{content}</div>
		</>
	)
}
