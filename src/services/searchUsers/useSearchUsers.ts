import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { queryKeys } from '../../lib'
import { searchUsersApi } from './api'
import type { GitHubUser } from './types'

export function useUserSearch(query: string) {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useSuspenseInfiniteQuery({
			queryKey: queryKeys.users.search(query),
			queryFn: ({ pageParam }) => searchUsersApi(query, pageParam),
			initialPageParam: 1,
			getNextPageParam: (lastPage, allPages) => {
				const totalLoaded = allPages.flatMap(p => p.items).length
				if (totalLoaded >= Math.min(lastPage.total_count, 1000))
					return undefined
				return allPages.length + 1
			},
		})

	const users: GitHubUser[] = data.pages.flatMap(page => page.items)

	return { users, fetchNextPage, hasNextPage, isFetchingNextPage }
}
