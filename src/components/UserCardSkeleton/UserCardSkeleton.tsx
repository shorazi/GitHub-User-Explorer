export default function UserCardSkeleton() {
	return (
		<div className='flex items-center gap-3 p-4 rounded-xl bg-[#161b22] animate-pulse'>
			<div className='w-12 h-12 rounded-full bg-gray-700 shrink-0' />
			<div className='flex flex-col gap-2 flex-1'>
				<div className='h-4 w-32 bg-gray-700 rounded' />
				<div className='h-3 w-20 bg-gray-700 rounded' />
			</div>
		</div>
	)
}
