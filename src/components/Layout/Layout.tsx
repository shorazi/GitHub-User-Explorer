import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='w-full min-h-dvh flex items-start justify-center'>
			<div className='w-full min-h-dvh flex flex-col justify-start items-center bg-[#0d1117] text-white'>
				<nav className='w-full min-h-12 sticky top-0 bg-[#0d1117] flex items-center justify-between px-8 py-4 border-b border-gray-700'>
					<p className='font-bold text-lg'>Github User Explorer</p>
				</nav>
				<div className='max-w-5xl w-full flex-1 p-4'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
