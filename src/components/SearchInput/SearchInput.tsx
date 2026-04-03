interface Props {
	value: string
	onChange: (value: string) => void
	onClear: () => void
}

export default function SearchInput({ value, onChange }: Props) {
	return (
		<div className='flex justify-start items-center py-4'>
			<input
				type='text'
				placeholder='Поиск пользователей ...'
				value={value}
				onChange={e => onChange(e.target.value)}
				className='max-w-md w-full py-3 px-5 outline-none text-base rounded-xl overflow-hidden border border-gray-600'
			/>
		</div>
	)
}
