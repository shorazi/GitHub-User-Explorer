import { useSuspenseQueries } from '@tanstack/react-query'
import { queryKeys, staleTime } from '../../lib'
import { getUserDetailApi, getUserReposApi } from './api'

export function useUserProfile(username: string) {
	const [userResult, reposResult] = useSuspenseQueries({
		queries: [
			{
				queryKey: queryKeys.users.detail(username),
				queryFn: () => getUserDetailApi(username),
				staleTime,
			},
			{
				queryKey: queryKeys.users.repos(username),
				queryFn: () => getUserReposApi(username),
				staleTime,
			},
		],
	})

	const user = userResult.data
	const repos = reposResult.data
		.filter(repo => repo.fork === false)
		.sort((a, b) => b.stargazers_count - a.stargazers_count)

	return { user, repos }
}
