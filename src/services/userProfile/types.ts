import type { GitHubUser } from '../searchUsers/types'

export interface GitHubUserDetail extends GitHubUser {
	name: string | null
	bio: string | null
	followers: number
	public_repos: number
}

export interface GitHubRepo {
	id: number
	name: string
	description: string | null
	stargazers_count: number
	html_url: string
	language: string | null
	fork: boolean
}
