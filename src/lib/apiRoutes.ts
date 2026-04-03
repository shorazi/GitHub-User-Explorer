export const BASE_URL = 'https://api.github.com'

export const apiRoutes = {
	users: {
		search: (query: string, page: number) =>
			`/search/users?q=${encodeURIComponent(query)}&per_page=12&page=${page}`,
		detail: (username: string) => `/users/${username}`,
		repos: (username: string) =>
			`/users/${username}/repos?per_page=100&sort=pushed`,
	},
}
