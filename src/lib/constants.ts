import { QueryClient } from '@tanstack/react-query'

export const searchState = {
	query: '',
	scrollY: 0,
}

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 5 мин — результаты поиска не меняются часто,
			// не нужно рефетчить при каждом фокусе вкладки
			staleTime: 5 * 60 * 1000,
			// gcTime: 10 мин — держим кэш достаточно долго, чтобы
			// при возврате назад не перезагружать данные
			// gcTime > staleTime намеренно: данные могут быть stale,
			// но они есть в кэше и показываются мгновенно
			gcTime: 10 * 60 * 1000,
		},
	},
})
