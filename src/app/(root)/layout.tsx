// components
import { Header, Main, Footer } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen max-w-[1920px] flex flex-col mx-auto">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
