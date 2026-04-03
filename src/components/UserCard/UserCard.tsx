import { useNavigate } from 'react-router-dom'
import type { GitHubUser } from '../../services/searchUsers/types'
interface Props {
	user: GitHubUser
}

export default function UserCard({ user }: Props) {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/user/${user.login}`)
	}

	return (
		<div
			onClick={handleClick}
			className='flex items-center gap-3 p-4 rounded-xl bg-[#161b22] hover:bg-[#1f2937] cursor-pointer transition-colors'
		>
			<img
				src={user.avatar_url}
				alt={user.login}
				className='w-16 h-16 rounded-full shrink-0 bg-cyan-950'
			/>
			<div className='flex flex-col min-w-0'>
				<span className='font-semibold'>{user.login}</span>
				<span className='text-[0.875rem] text-gray-400'>
					Посмотреть профиль
				</span>
			</div>
		</div>
	)
}
