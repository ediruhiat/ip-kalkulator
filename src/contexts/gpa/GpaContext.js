import { createContext, useState } from "react"

export const GpaContext = createContext()

export const GpaContextProvider = ({ children }) => {
	const [gpa, setGpa] = useState(0)
	const [totalSks, setTotalSks] = useState(0)
	const [gradeA, setGradeA] = useState(0)
	const [gradeAB, setGradeAB] = useState(0)
	const [gradeB, setGradeB] = useState(0)
	const [gradeBC, setGradeBC] = useState(0)
	const [gradeC, setGradeC] = useState(0)
	const [gradeD, setGradeD] = useState(0)
	const [gradeE, setGradeE] = useState(0)
	const [remainingSks, setRemainingSks] = useState(144)

	const calculate = () => {
		const total = gradeA + gradeAB + gradeB + gradeBC + gradeC + gradeD + gradeE

		const points = (gradeA * 4)
			+ (gradeAB * 3.5)
			+ (gradeB * 3)
			+ (gradeBC * 2.5)
			+ (gradeC * 2)
			+ (gradeD * 1)
			+ (gradeE * 0)

		setTotalSks(total)
		setGpa(Math.round(((points / total) + Number.EPSILON) * 100) / 100)
	}

	return (
		<GpaContext.Provider
			value={{
				gradeA, setGradeA,
				gradeAB, setGradeAB,
				gradeB, setGradeB,
				gradeBC, setGradeBC,
				gradeC, setGradeC,
				gradeD, setGradeD,
				gradeE, setGradeE,
				gpa,
				totalSks, setTotalSks,
				calculate,
				remainingSks, setRemainingSks
			}}
		>
			{children}
		</GpaContext.Provider>
	)
}

export default GpaContextProvider