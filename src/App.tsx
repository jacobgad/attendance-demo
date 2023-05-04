import { sub } from "date-fns";
import AttendanceCard from "./components/AttendanceCard";

export default function App() {
	return (
		<div className="mx-auto max-w-xs my-6">
			<h2>Year 10 Boys &middot; Sunday School</h2>
			<h1>23 April 2023</h1>
			<ul className="mt-6">
				<li>
					<AttendanceCard
						name="jonathan davies"
						lastAttended={sub(Date.now(), { weeks: 3 })}
						attendance="present"
						loading={true}
					/>
				</li>
			</ul>
		</div>
	);
}
