import { useContext, useState } from 'react'
import { GpaContext } from '../../contexts/gpa/GpaContext'
import Slider from 'react-rangeslider'

import './form.scss'

const Form = ({ title, grade }) => {
	const {
		setGradeA,
		setGradeAB,
		setGradeB,
		setGradeBC,
		setGradeC,
		setGradeD,
		setGradeE,
		remainingSks, setRemainingSks
	} = useContext(GpaContext)

	const [volume, setVolume] = useState(0)

	const setGradeState = (value) => {
		switch (grade) {
			case 'grade-a':
				setGradeA(value)
				break

			case 'grade-ab':
				setGradeAB(value)
				break

			case 'grade-b':
				setGradeB(value)
				break

			case 'grade-bc':
				setGradeBC(value)
				break

			case 'grade-c':
				setGradeC(value)
				break

			case 'grade-d':
				setGradeD(value)
				break

			case 'grade-e':
				setGradeE(value)
				break

			default:
				break
		}
	}

	const handleOnChangeSlider = value => {
		setGradeState(value)
		setVolume(value)
	}

	const handleOnChangeNumber = e => {
		let { value, max } = e.target
		let min = 0

		value = Math.max(Number(min), Math.min(Number(max), Number(value)))

		setGradeState(value)
		setRemainingSks(remainingSks - value)
		setVolume(value)
	}

	const handleOnFocusNumber = e => {
		e.target.select()
	}

	return (
		<>
			<div className="form-container">
				<span className={`form-title ${grade}`}>{title}</span>
				<Slider
					value={volume}
					orientation="horizontal"
					onChange={handleOnChangeSlider}
					max={144}
					className={grade}
				/>
				<input
					type="number"
					onChange={handleOnChangeNumber}
					value={volume}
					max="144"
					id="number-input"
					onFocus={handleOnFocusNumber}
				/>
			</div>
		</>
	)
}

export default Form