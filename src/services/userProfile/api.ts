import { apiRoutes, fetchGitHub } from '../../lib'
import type { GitHubRepo, GitHubUserDetail } from './types'

export const getUserDetailApi = (username: string) =>
	fetchGitHub<GitHubUserDetail>(apiRoutes.users.detail(username))

export const getUserReposApi = (username: string) =>
	fetchGitHub<GitHubRepo[]>(apiRoutes.users.repos(username))
