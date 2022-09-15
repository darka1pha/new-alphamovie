import { useRouter } from 'next/router'
import MenuButton from './MenuButton'

const Menu = () => {
	const router = useRouter()
	return (
		<div className='bg-[#00000020] h-[56px] w-full max-w-[360px] sm:w-[360px] p-2 mt-12 rounded-md flex justify-between align-middle'>
			<MenuButton
				name='All'
				active={
					!router.pathname.includes('movies') &&
					!router.pathname.includes('tvshows')
				}
			/>
			<MenuButton name='Movies' active={router.pathname.includes('movies')} />
			<MenuButton
				name='TV Shows'
				active={router.pathname.includes('tvshows')}
			/>
		</div>
	)
}

export default Menu
