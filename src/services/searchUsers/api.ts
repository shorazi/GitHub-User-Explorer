import { apiRoutes, fetchGitHub } from '../../lib'
import type { GitHubSearchResponse } from './types'

export const searchUsersApi = (query: string, page: number) =>
	fetchGitHub<GitHubSearchResponse>(apiRoutes.users.search(query, page))
