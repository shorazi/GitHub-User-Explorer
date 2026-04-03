export default function SearchInput() {
	return (
		<div className='flex justify-start items-center py-4'>
			<input
				type='text'
				placeholder='Search for a user'
				className='max-w-md w-full py-3 px-5 outline-none text-base rounded-xl overflow-hidden border border-gray-600'
			/>
		</div>
	)
}
