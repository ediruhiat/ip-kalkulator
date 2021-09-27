import { createContext, useState } from "react";

export const GpaContext = createContext()

export const GpaProvider = (childrens) => {
	const [gradeA, setGradeA] = useState([])
	const [gradeB, setGradeB] = useState([])
	const [gradeC, setGradeC] = useState([])
	const [gradeD, setGradeD] = useState([])
	const [gradeE, setGradeE] = useState([])

	return (
		<GpaProvider value={{
			gradeA,
			gradeB,
			gradeC,
			gradeD,
			gradeE,
			setGradeA,
			setGradeB,
			setGradeC,
			setGradeD,
			setGradeE
		}}>
			{childrens}
		</GpaProvider>
	)
}