import { Header, Main, Footer } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
