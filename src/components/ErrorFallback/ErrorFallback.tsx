import type { FallbackProps } from 'react-error-boundary'

export default function ErrorFallback({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	return (
		<div className='flex flex-col items-center justify-center py-20 gap-4'>
			<p className='text-red-400 text-lg'>
				{error instanceof Error ? error.message : 'Что-то пошло не так'}
			</p>
			<button
				onClick={resetErrorBoundary}
				className='px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm'
			>
				Попробовать снова
			</button>
		</div>
	)
}
