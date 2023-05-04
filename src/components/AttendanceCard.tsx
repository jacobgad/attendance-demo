import { intlFormatDistance } from "date-fns";
import { cva } from "class-variance-authority";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getInitials } from "../utils/utils";
import { useMemo } from "react";

type AttendanceCardProps = {
	name: string;
	lastAttended: Date;
	attendance?: "unknown" | "absent" | "present";
	loading?: boolean;
};

const cardStyles = cva("w-full border rounded-xl flex px-4 py-5 text-left gap-3", {
	variants: {
		attendance: {
			unknown: "border-gray-500",
			present: "border-green-500",
			absent: "border-red-500",
		},
		loading: {
			true: "animate-pulse",
		},
		defaultVariants: {
			attendance: "unknown",
			loading: false,
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

export default function AttendanceCard({ name, attendance, ...props }: AttendanceCardProps) {
	const initials = useMemo(() => getInitials(name), [name]);

	return (
		<button className={cardStyles({ attendance, loading: props.loading })}>
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
