import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import { ProfilePage, SearchPage } from './lazy'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: SearchPage,
			},
			{
				path: 'user/:username',
				Component: ProfilePage,
			},
		],
	},
])

export default router
