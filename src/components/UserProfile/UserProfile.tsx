import { useUserProfile } from '../../services/userProfile'
import RepositoryCard from '../RepositoryCard'

interface Props {
	username: string
}

export default function UserProfile({ username }: Props) {
	const { user, repos } = useUserProfile(username)

	return (
		<>
			<div>
				<div className='flex items-center gap-6 mb-8'>
					<img
						src={user.avatar_url}
						alt={user.login}
						className='w-24 h-24 rounded-full'
					/>
					<div>
						<h1 className='text-2xl font-bold'>{user.name ?? user.login}</h1>
						{user.bio && <p className='text-gray-400 mt-1'>{user.bio}</p>}
						<div className='flex gap-4 mt-2 text-sm text-gray-400'>
							<span>{user.followers} подписчиков</span>
							<span>{user.public_repos} репозиториев</span>
						</div>
					</div>
					<a
						href={user.html_url}
						target='_blank'
						rel='noreferrer'
						className='text-blue-400 text-sm hover:underline mt-1 inline-block'
					>
						Просмотреть на GitHub
					</a>
				</div>
			</div>
			<h2 className='text-lg font-semibold mb-4'>Репозитории </h2>
			{repos.length === 0 ? (
				<p className='text-gray-400'>Нет публичных репозиториев</p>
			) : (
				<div className='flex flex-col gap-3'>
					{repos.map(repo => (
						<RepositoryCard key={repo.id} repo={repo} />
					))}
				</div>
			)}
		</>
	)
}
