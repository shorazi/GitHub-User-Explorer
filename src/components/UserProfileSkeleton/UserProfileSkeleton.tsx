export default function UserProfileSkeleton() {
	return (
		<div className='animate-pulse'>
			<div className='flex items-center gap-6 mb-8'>
				<div className='w-24 h-24 rounded-full bg-gray-700 shrink-0' />
				<div className='flex flex-col gap-3 flex-1'>
					<div className='h-6 w-48 bg-gray-700 rounded' />
					<div className='h-4 w-72 bg-gray-600 rounded' />
					<div className='h-4 w-32 bg-gray-600 rounded' />
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className='p-4 rounded-xl bg-[#161b22]'>
						<div className='h-4 w-48 bg-gray-700 rounded mb-2' />
						<div className='h-3 w-full bg-gray-700 rounded' />
					</div>
				))}
			</div>
		</div>
	)
}
