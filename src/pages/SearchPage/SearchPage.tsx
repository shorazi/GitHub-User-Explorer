import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../../components/ErrorFallback'
import SearchInput from '../../components/SearchInput'
import UserGrid from '../../components/UserGrid'
import UserGridSkeleton from '../../components/UserGridSkeleton'
import { useDebounce, useScrollRestore, useSearchState } from '../../hooks'

export default function SearchPage() {
	const { query, handleChange, handleClear } = useSearchState()
	const debouncedQuery = useDebounce(query, 300)
	useScrollRestore()

	return (
		<div>
			<SearchInput
				value={query}
				onChange={handleChange}
				onClear={handleClear}
			/>
			{debouncedQuery.trim() && (
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					resetKeys={[debouncedQuery]}
				>
					<Suspense fallback={<UserGridSkeleton />}>
						<UserGrid query={debouncedQuery} />
					</Suspense>
				</ErrorBoundary>
			)}
		</div>
	)
}
