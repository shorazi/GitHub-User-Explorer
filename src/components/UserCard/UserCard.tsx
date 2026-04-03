export default function UserCard() {
	return (
		<div className='flex items-center gap-3 p-4 rounded-xl bg-[#161b22] hover:bg-[#1f2937] cursor-pointer transition-colors'>
			<img className='w-16 h-16 rounded-full shrink-0 bg-cyan-950' />
			<div className='flex flex-col min-w-0'>
				<span className='font-semibold truncate'>login</span>
				<span className='text-sm text-gray-400'>Visit Profile</span>
			</div>
		</div>
	)
}
