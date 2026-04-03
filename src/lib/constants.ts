import { QueryClient } from '@tanstack/react-query'

export const searchState = {
	query: '',
	scrollY: 0,
}

export const staleTime = 5 * 60 * 1000 // 5 мин
export const gcTime = 10 * 60 * 1000 // 10 мин

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 5 мин — результаты поиска не меняются часто,
			// не нужно рефетчить при каждом фокусе вкладки
			staleTime,
			// gcTime: 10 мин — держим кэш достаточно долго, чтобы
			// при возврате назад не перезагружать данные
			// gcTime > staleTime намеренно: данные могут быть stale,
			// но они есть в кэше и показываются мгновенно
			gcTime,
		},
	},
})
