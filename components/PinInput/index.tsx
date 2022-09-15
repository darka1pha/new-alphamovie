import React, { useRef, useState } from 'react'
import { PinInputFields } from './PinInputField'

interface PinInputProps {
	pinLength: number
	disabled?: boolean
	onValueChange: (value: string) => void
}

const PIN_MIN_VALUE = 0
const PIN_MAX_VALUE = 9
const BACKSPACE_KEY = 'Backspace'

const PinInput: React.FC<PinInputProps> = ({
	pinLength,
	disabled,
	onValueChange,
}) => {
	const inputRefs = useRef<HTMLInputElement[]>([])
	const [pin, setPin] = useState<Array<number | undefined>>(
		new Array(pinLength)
	)

	const onPinChanged = (pinEntry: number, index: number) => {
		const newPin = [...pin]
		newPin[index] = pinEntry
		setPin(newPin)
	}

	const changePinFocus = (pinIndex: number) => {
		const ref = inputRefs.current[pinIndex]
		if (ref) {
			ref.focus()
		}
	}

	const onChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const value = event.target.value
		if (!Number(value)) {
			return
		}
		const pinNumber = Number(value.trim())

		if (pinNumber >= PIN_MIN_VALUE && pinNumber <= PIN_MAX_VALUE) {
			onPinChanged(pinNumber, index)
			onValueChange(pin.toString().replaceAll(',', ''))
			if (index < pinLength - 1) {
				changePinFocus(index + 1)
			}
		}
	}

	const onKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		const keyboardKeyCode = event.nativeEvent.code
		if (keyboardKeyCode !== BACKSPACE_KEY) {
			return
		}

		if (pin[index] === undefined) {
			changePinFocus(index - 1)
		} else {
			onPinChanged(undefined, index)
		}
	}

	return (
		<>
			<div>
				{Array.from({ length: pinLength }, (_, index) => (
					<PinInputFields
						disabled={disabled}
						onKeyDown={(event) => onKeyDown(event, index)}
						key={index}
						ref={(el) => {
							if (el) {
								inputRefs.current[index] = el
							}
						}}
						onChange={(event) => onChange(event, index)}
						value={pin[index] || ''}
					/>
				))}
			</div>
		</>
	)
}

export default PinInput
