import { fetchGitHub } from '../../lib'
import type { GitHubSearchResponse } from './types'

export const searchUsersApi = (query: string, page: number) =>
	fetchGitHub<GitHubSearchResponse>(
		`/search/users?q=${encodeURIComponent(query)}&per_page=12&page=${page}`,
	)
