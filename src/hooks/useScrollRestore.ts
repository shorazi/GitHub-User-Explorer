import { useEffect } from 'react'
import { searchState } from '../lib'

export function useScrollRestore() {
	useEffect(() => {
		if (searchState.scrollY > 0) {
			const raf = requestAnimationFrame(() => {
				window.scrollTo(0, searchState.scrollY)
			})
			return () => cancelAnimationFrame(raf)
		}
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			searchState.scrollY = window.scrollY
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
}
