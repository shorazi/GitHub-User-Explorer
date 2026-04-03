import { BASE_URL } from './apiRoutes'

export async function fetchGitHub<T>(url: string): Promise<T> {
	const res = await fetch(`${BASE_URL}${url}`, {
		headers: {
			Accept: 'application/vnd.github+json',
		},
	})

	if (!res.ok) {
		const message =
			res.status === 403
				? 'Превышен лимит запросов к GitHub API. Пожалуйста, попробуйте позже.'
				: res.status === 404
					? 'Пользователь не найден.'
					: `GitHub API error: ${res.status}`
		throw new Error(message)
	}

	return res.json() as Promise<T>
}
