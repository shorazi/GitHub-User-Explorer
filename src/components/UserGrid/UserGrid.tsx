import { UserCardSkeleton } from '../../pages/SearchPage/SearchPage'
import UserCard from '../UserCard'

export default function UserGrid() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6'>
			{Array.from({ length: 24 }).map((_, i) => (
				<UserCard key={`skeleton-${i}`} />
			))}
			{Array.from({ length: 4 }).map((_, i) => (
				<UserCardSkeleton key={`skeleton-${i}`} />
			))}
		</div>
	)
}
