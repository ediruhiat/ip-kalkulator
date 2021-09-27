import './button.scss'

const Button = ({ text, action }) => {
	return (
		<button className="btn btn-lg" onClick={action}>
			{text}
		</button>
	)
}

export default Button