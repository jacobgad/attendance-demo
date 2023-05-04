import type { Meta, StoryObj } from "@storybook/react";

import AttendanceCard from "./AttendanceCard";
import { sub } from "date-fns";

const meta: Meta<typeof AttendanceCard> = {
	title: "Attendance Card",
	component: AttendanceCard,
};

export default meta;

type Story = StoryObj<typeof AttendanceCard>;

const lastAttended = sub(new Date(), { weeks: 3 });

export const Present: Story = {
	args: {
		name: "Jonathan Davies",
		lastAttended,
		attendance: "present",
	},
};
