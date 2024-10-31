export default function TextContent({ children }: {children: React.ReactNode}) {
	return (
		<div className="text-justify mb-8 px-5 text-textDark">{children}</div>
	)
}