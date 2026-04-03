import { useInfiniteScroll } from '../../hooks'
import { useUserSearch } from '../../services/searchUsers'
import UserCard from '../UserCard'
import UserCardSkeleton from '../UserCardSkeleton'
interface Props {
	query: string
}

export default function UserGrid({ query }: Props) {
	const { users, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useUserSearch(query)

	const { loadMoreRef } = useInfiniteScroll({
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	})

	if (users.length === 0) {
		return (
			<p className='text-center text-gray-400 mt-12'>
				Пользователи не найдены по "{query}"
			</p>
		)
	}

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6'>
			{/* {Array.from({ length: 24 }).map((_, i) => (
				<UserCard key={`skeleton-${i}`} />
			))} */}
			{users.map(user => (
				<UserCard key={user.id} user={user} />
			))}
			{/* {Array.from({ length: 4 }).map((_, i) => (
				<UserCardSkeleton key={`skeleton-${i}`} />
			))} */}
			{isFetchingNextPage &&
				Array.from({ length: 4 }).map((_, i) => (
					<UserCardSkeleton key={`skeleton-${i}`} />
				))}
			<div ref={loadMoreRef} className='h-10 mt-4' />
		</div>
	)
}
