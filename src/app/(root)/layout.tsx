// components
import { Header, Main, Footer } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen max-h-screen overflow-auto remove-scrollbar bg-red-300">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
