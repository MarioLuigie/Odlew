// PARAMS, SEARCHPARAMS
declare interface SingleSlugParams {
	[key: string]: string
}

declare interface CatchAllSlugParams {
	[key: string]: string[]
}

declare interface SearchParams {
	[key: string]: string | string[] | undefined
}

declare type SingleSlugPageProps = {
	params: SingleSlugParams
	searchParams: SearchParams
}

declare type CatchAllSlugPageProps = {
	params: CatchAllSlugParams
	searchParams: SearchParams
}

declare type PageProps = {
	searchParams: SearchParams
}

// DATA RESULT
declare type Result<T> = {
	success: boolean
	data?: T
	errors?: { [key: string]: string }
}

declare type DataResult<T> = {
	success: boolean
	data: T
	errors?: { [key: string]: string }
}

type LayoutProps = {
	children: React.ReactNode
}

interface CustomJwtSessionClaims {
	metadata: {
		role?: 'admin' | 'moderator'
	}
}

declare type Picture = {
	path: string
	alt: string
}

