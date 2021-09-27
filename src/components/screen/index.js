import { useContext } from 'react'
import { GpaContext } from '../../contexts/gpa/GpaContext'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './screen.scss'

const Screen = () => {
	const { gpa, totalSks } = useContext(GpaContext)

	return (
		<div className="screen-container">
			<div className="total-sks-container">
				<h2>Total SKS</h2>
				<span>{totalSks || '-'}</span>
			</div>
			<div className="result-container">
				<h2>IP</h2>
				<span>{gpa || '-'}</span>
			</div>
		</div>
	)
}

export default Screen