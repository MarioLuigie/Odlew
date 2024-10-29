// components
import { Header, Main, Footer } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen max-h-screen overflow-auto remove-scrollbar">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
