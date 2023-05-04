import type { Student } from "./attendanceList/AttendanceList";
import AttendanceCard from "../../components/attendanceCard/AttendanceCard";
import { sub } from "date-fns";
import { useState } from "react";

type Props = {
	student: Student;
};

export default function AttendanceForm({ student: initialStudent }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [student, setStudent] = useState(initialStudent);

	return (
		<AttendanceCard
			name={student.name}
			lastAttended={sub(Date.now(), { weeks: 3 })}
			attendance={student.attendance}
			isLoading={isLoading}
			onChange={(attendance) => {
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
					setStudent({ ...student, attendance });
				}, 1000);
			}}
		/>
	);
}
