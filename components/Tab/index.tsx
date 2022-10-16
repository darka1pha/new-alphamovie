import Indicator from './indicator'
import TabButton from './TabButton'

const Tab = ({
	activeTab,
	onChange,
}: {
	activeTab: 'all' | 'movie' | 'tv'
	onChange: (value: 'all' | 'tv' | 'movie') => void
}) => {
	return (
		<div className='bg-[#00000020] relative h-[85px] w-full  max-w-[340px] p-2 mt-12 rounded-md flex justify-between items-center'>
			<Indicator active={activeTab} />
			<TabButton onClick={() => onChange('all')} name='All' />
			<TabButton onClick={() => onChange('movie')} name='Movies' />
			<TabButton onClick={() => onChange('tv')} name='TV Shows' />
		</div>
	)
}

export default Tab
