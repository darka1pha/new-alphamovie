import { useRef, useState } from 'react'
import PlayerControls from './PlayerControls'

const Player = () => {
	const playerRef = useRef<HTMLVideoElement>(null)
	const playerContainerRef = useRef<HTMLDivElement>(null)
	const [controlls, setControlls] = useState({
		fullscreen: false,
		playing: false,
		played: 0,
	})

	const onPausePlay = () => {
		console.log(playerRef.current?.paused)
		playerRef.current?.paused
			? playerRef.current?.play()
			: playerRef.current?.pause()
	}

	const onRewind = () => {
		playerRef.current?.currentTime -= 10
	}

	const onFastForward = () => {
		playerRef.current?.currentTime += 10
	}

	return (
		<div className='player_container' ref={playerContainerRef}>
			<video
				id='video_player'
				onTimeUpdate={(e) => {
					console.log(e.target.currentTime)
				}}
				ref={playerRef}
				src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
			/>
			<PlayerControls
				onRewind={onRewind}
				onFastForward={onFastForward}
				onPausePlay={onPausePlay}
			/>
		</div>
	)
}

export default Player
