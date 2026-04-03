import { useEffect, useRef } from 'react'

interface Options {
	hasNextPage: boolean
	isFetchingNextPage: boolean
	fetchNextPage: () => void
}

export function useInfiniteScroll({
	hasNextPage,
	isFetchingNextPage,
	fetchNextPage,
}: Options) {
	const loadMoreRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = loadMoreRef.current
		if (!element) return

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage()
				}
			},
			{ threshold: 0.1 },
		)

		observer.observe(element)
		return () => observer.disconnect()
	}, [hasNextPage, isFetchingNextPage, fetchNextPage])

	return { loadMoreRef }
}
