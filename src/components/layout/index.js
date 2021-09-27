import { useContext } from 'react'
import { GpaContext } from '../../contexts/gpa/GpaContext'

import Form from '../form'
import Button from '../button'
import Screen from '../screen'

import './layout.scss'

const Layout = () => {
	const {
		calculate
	} = useContext(GpaContext)

	return (
		<>
			<div className="top-content">
				<div className="header">
					<div className="title">
						<h1 className="app-title">IP <span className="fw-500">Kalkulator</span></h1>
						<span className="config-info">Strata 1 - 144 SKS</span>
					</div>
					<div className="config-button-container" title="Config">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
				</div>
				<div className="form-group">
					<Form title="A" grade="grade-a" />
					<Form title="B+" grade="grade-ab" />
					<Form title="B" grade="grade-b" />
					<Form title="C+" grade="grade-bc" />
					<Form title="C" grade="grade-c" />
					<Form title="D" grade="grade-d" />
					<Form title="E" grade="grade-e" />
				</div>
			</div>

			<Screen />

			<Button text="Kalkulasi" action={calculate} />
			<span className="version-info">v0.0.1</span>
		</>
	)
}

export default Layout