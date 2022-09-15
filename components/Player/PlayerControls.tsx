import { Forward10, PlayCircle, Replay10 } from '@mui/icons-material'

const PlayerControls = ({ onPausePlay, onRewind, onFastForward }) => {
	return (
		<div className='player_controls'>
			<PlayCircle onClick={onPausePlay} />
			<Forward10 onClick={onFastForward} />
			<Replay10 onClick={onRewind} />
		</div>
	)
}

export default PlayerControls
