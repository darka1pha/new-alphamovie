import styled from 'styled-components'

interface ValidationResultParagraphProps {
	isCorrect?: boolean
}

export const PinInputFields = styled.input<ValidationResultParagraphProps>`
	width: 45px;
	height: 45px;
	border: 2px solid;
	font-size: 12px;
	text-align: center;
	transition: all 300ms ease;
	margin: 8px;
	background-color: black;
	border-radius: 6px;
	&:focus {
		border-color: #3748e5;
		outline: 0;
	}
	border-color: ${(props) => {
		switch (props.isCorrect) {
			case true:
				return 'green'
			case false:
				return 'red'
			default:
				return '#c3c3c3'
		}
	}};
`
