export default function Title({ children }: {children: React.ReactNode}) {
	return (
		<div className="mb-6 px-5 pt-5 flex flex-col text-2xl text-textDark">{children}</div>
	)
}