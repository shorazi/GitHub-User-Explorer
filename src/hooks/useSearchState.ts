import { useState } from 'react'
import { searchState } from '../lib'

export function useSearchState() {
	const [query, setQuery] = useState(searchState.query)

	const handleChange = (value: string) => {
		setQuery(value)
		searchState.query = value
		searchState.scrollY = 0
	}

	const handleClear = () => {
		setQuery('')
		searchState.query = ''
		searchState.scrollY = 0
	}

	return { query, handleChange, handleClear }
}
