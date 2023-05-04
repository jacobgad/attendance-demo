import { intlFormatDistance } from "date-fns";
import { cva } from "class-variance-authority";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getInitials } from "../../utils/utils";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

type AttendanceState = "unknown" | "absent" | "present";

type AttendanceCardProps = {
	name: string;
	lastAttended: Date;
	attendance: AttendanceState;
	isLoading?: boolean;
	onChange?: (attendance: AttendanceState) => void;
};

const cardStyles = cva("w-full max-w-xs border rounded-xl flex px-4 py-5 text-left gap-3", {
	variants: {
		attendance: {
			unknown: "border-gray-500",
			present: "border-green-500",
			absent: "border-red-500",
		},
		isLoading: {
			true: "animate-pulse",
		},
		defaultVariants: {
			attendance: "unknown",
			isLoading: false,
		},
	},
});

const iconStyles = cva(
	"rounded-full w-10 h-10 flex justify-center items-center self-center p-2 uppercase",
	{
		variants: {
			attendance: {
				unknown: "bg-gray-500",
				present: "bg-green-500",
				absent: "bg-red-500",
			},
			defaultVariants: {
				attendance: "unknown",
			},
		},
	}
);

function toggleAttendance(current: AttendanceState) {
	const options: AttendanceState[] = ["unknown", "present", "absent"];
	const nextIdx = options.indexOf(current) + 1;
	if (nextIdx < options.length) return options[nextIdx];
	return options[0];
}

export default function AttendanceCard({
	name,
	onChange,
	isLoading = false,
	...props
}: AttendanceCardProps) {
	const [attendance, setAttendance] = useState(props.attendance);
	const debouncedAttendance = useDebounce(attendance, 500);

	const initials = useMemo(() => getInitials(name), [name]);

	useEffect(() => {
		onChange && onChange(debouncedAttendance);
	}, [debouncedAttendance, onChange]);

	return (
		<button
			onClick={() => setAttendance((current) => toggleAttendance(current))}
			className={cardStyles({ attendance, isLoading })}
		>
			<div className={iconStyles({ attendance })}>
				{attendance === "present" && <CheckIcon />}
				{attendance === "absent" && <XMarkIcon />}
				{attendance === "unknown" && initials}
			</div>
			<div>
				<p className="text-sm leading-5 font-medium capitalize">{name}</p>
				<p className="text-sm leading-5 font-normal text-gray-300">
					Last attended {intlFormatDistance(props.lastAttended, new Date())}
				</p>
			</div>
		</button>
	);
}
