import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='w-full min-h-dvh flex items-start justify-center'>
			<div className='max-w-md w-full min-h-dvh flex justify-center items-center'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
