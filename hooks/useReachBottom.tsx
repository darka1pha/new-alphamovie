import {
	MutableRefObject,
	ReactElement,
	Ref,
	RefObject,
	useEffect,
} from 'react'

const useReachBottom = ({
	el,
	onReach,
	onReachCondition,
	refreshDependecies,
}: {
	el: MutableRefObject<HTMLDivElement | null>
	onReach: () => void
	onReachCondition: boolean | undefined
	refreshDependecies: Array<any>
}) => {
	const isBottom = () => {
		return el.current
			? el.current.getBoundingClientRect().bottom <= window.innerHeight
			: null
	}

	useEffect(() => {
		const trackScrolling = () => {
			if (el) {
				if (isBottom()) {
					if (onReachCondition) {
						onReach()
					}
				}
			}
		}
		document.addEventListener('scroll', trackScrolling)
		return () => {
			document.removeEventListener('scroll', trackScrolling)
		}
	}, [...refreshDependecies])
}

export default useReachBottom
