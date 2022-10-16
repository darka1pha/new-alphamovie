import Indicator from './indicator'
import TabButton from './TabButton'
import { useState, useRef, useEffect } from 'react'

const tabs = [
	{
		name: 'All',
		value: 'all' as 'tv' | 'all' | 'movie',
	},
	{
		name: 'Movies',
		value: 'movie' as 'tv' | 'all' | 'movie',
	},
	{
		name: 'Tv Shows',
		value: 'tv' as 'tv' | 'all' | 'movie',
	},
]

const Tab = ({
	onChange,
}: {
	onChange: (value: 'all' | 'tv' | 'movie') => void
}) => {
	const tabsRef = useRef<any>([])
	const [activeTabIndex, setActiveTabIndex] = useState(0)
	const [tabIndicatorWidth, setTabIndicatorWidth] = useState(0)
	const [tabIndicatorLeft, setTabIndicatorLeft] = useState(0)

	useEffect(() => {
		function setTabPosition() {
			const currentTab = tabsRef.current[activeTabIndex]
			setTabIndicatorLeft(currentTab?.offsetLeft ?? 0)
			setTabIndicatorWidth(currentTab?.clientWidth ?? 0)
		}

		setTabPosition()
		window.addEventListener('resize', setTabPosition)

		return () => window.removeEventListener('resize', setTabPosition)
	}, [activeTabIndex])

	return (
		<div className='bg-[#00000020] relative h-[85px] w-full  max-w-[480px] p-2 mt-12 rounded-md flex justify-between items-center'>
			<Indicator left={tabIndicatorLeft} width={tabIndicatorWidth} />
			{tabs.map(({ name, value }, index) => (
				<TabButton
					ref={(el) => (tabsRef.current[index] = el)}
					onClick={() => {
						setActiveTabIndex(index)
						onChange(value)
					}}
					name={name}
				/>
			))}
		</div>
	)
}

export default Tab
