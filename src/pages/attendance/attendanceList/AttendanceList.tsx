import type { AttendanceState } from "../../../components/attendanceCard/AttendanceCard";
import AttendanceForm from "../AttendanceForm";

export type Student = {
	id: number;
	name: string;
	attendance: AttendanceState;
};

const students: Student[] = [
	{ id: 1, name: "jonathan davies", attendance: "unknown" },
	{ id: 2, name: "michael samy", attendance: "unknown" },
	{ id: 3, name: "matthew gerges", attendance: "unknown" },
	{ id: 4, name: "anthony bebawi", attendance: "unknown" },
	{ id: 5, name: "jacob gad", attendance: "unknown" },
];

export default function AttendanceList() {
	return (
		<div className="mx-auto max-w-xs my-6">
			<h2>Year 10 Boys &middot; Sunday School</h2>
			<h1>23 April 2023</h1>
			<ul className="mt-6 flex flex-col gap-4">
				{students.map((student) => (
					<li key={student.id}>
						<AttendanceForm student={student} />
					</li>
				))}
			</ul>
		</div>
	);
}
