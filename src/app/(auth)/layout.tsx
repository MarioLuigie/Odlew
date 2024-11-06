export default function Layout({ children }: LayoutProps) {
	return (
		<main className="flex justify-center items-center min-h-screen w-full bg-background">
			{children}
		</main>
	)
}