// components
import { Header, Main, Footer } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
