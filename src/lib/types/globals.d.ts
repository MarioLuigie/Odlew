// Url params, route query, page params
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


