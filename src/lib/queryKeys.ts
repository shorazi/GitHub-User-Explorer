export const queryKeys = {
	users: {
		search: (query: string) => ['users', 'search', query],
		detail: (username: string) => ['users', 'detail', username],
		repos: (username: string) => ['users', 'repos', username],
	},
}
