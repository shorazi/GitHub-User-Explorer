import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorFallback from '../../components/ErrorFallback'
import UserProfile from '../../components/UserProfile'
import UserProfileSkeleton from '../../components/UserProfileSkeleton'

const ProfilePage = () => {
	const { username } = useParams<{ username: string }>()
	const navigate = useNavigate()

	if (!username)
		return (
			<p className='text-center text-gray-400 mt-12'>
				Имя пользователя не указано
			</p>
		)

	return (
		<div>
			<div className='flex justify-start items-center py-4'>
				<button
					onClick={() => navigate(-1)}
					className='mb-6 flex items-center gap-2 text-gray-400
                   hover:text-white transition-colors'
				>
					Вернуться назад
				</button>
			</div>

			<ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[username]}>
				<Suspense fallback={<UserProfileSkeleton />}>
					<UserProfile username={username} />
				</Suspense>
			</ErrorBoundary>
		</div>
	)
}

export default ProfilePage
