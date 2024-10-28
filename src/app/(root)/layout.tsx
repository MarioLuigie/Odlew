import { Header, Main, Footer } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='scroll-m-4'>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
