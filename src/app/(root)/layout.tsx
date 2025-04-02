// components
import { Header, Main, Footer } from '@/components/layout/index'
// import Test from '@/components/shared/Test'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen w-full max-w-[1920px] flex flex-col mx-auto">
			<Header />
			<Main>{children}</Main>
			<Footer />
			{/* <Test /> */}
		</div>
	)
}
