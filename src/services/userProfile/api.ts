import { fetchGitHub } from '../../lib'
import type { GitHubRepo, GitHubUserDetail } from './types'

export const getUserDetailApi = (username: string) =>
	fetchGitHub<GitHubUserDetail>(`/users/${username}`)

export const getUserReposApi = (username: string) =>
	fetchGitHub<GitHubRepo[]>(`/users/${username}/repos?per_page=100&sort=pushed`)
