import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { queryClient } from './lib'
import router from './router/router'

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
)
