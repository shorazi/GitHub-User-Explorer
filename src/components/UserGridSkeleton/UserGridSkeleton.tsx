import { UserCardSkeleton } from '../../pages/SearchPage/SearchPage'

export default function UserGridSkeleton() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 px-8'>
			{Array.from({ length: 12 }).map((_, i) => (
				<UserCardSkeleton key={i} />
			))}
		</div>
	)
}
