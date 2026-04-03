import type { GitHubRepo } from '../services/userProfile'

export default function RepositoryCard({ repo }: { repo: GitHubRepo }) {
	return (
		<a
			href={repo.html_url}
			target='_blank'
			rel='noreferrer'
			className='block p-4 rounded-xl bg-[#161b22] hover:bg-[#1f2937] transition-colors'
		>
			<div className='flex items-center justify-between'>
				<span className='font-semibold text-blue-400'>{repo.name}</span>
				<span className='text-sm text-yellow-400'>
					⭐ {repo.stargazers_count}
				</span>
			</div>
			{repo.description && (
				<p className='text-gray-400 text-sm mt-1 line-clamp-2'>
					{repo.description}
				</p>
			)}
			{repo.language && (
				<span className='text-xs text-gray-500 mt-2 inline-block'>
					{repo.language}
				</span>
			)}
		</a>
	)
}
