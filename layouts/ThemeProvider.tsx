import { Navbar } from '@components'
import { NextPage } from 'next'
import { ReactElement } from 'react'

interface Props {
	children: ReactElement
}

const ThemeProvider: NextPage<Props> = (props) => {
	return (
		<div className="overflow-x-hidden flex justify-center w-full bg-cover bg-no-repeat bg-primary-900 bg-[url('/assets/bg.webp')]">
			<div className='max-w-[1920px] overflow-y-hidden w-full min-h-screen'>
				<Navbar />
				<div className='h-full w-full px-4 sm:px-12  md:px-18 lg:px-24 overflow-x-hidden pt-10'>
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default ThemeProvider
