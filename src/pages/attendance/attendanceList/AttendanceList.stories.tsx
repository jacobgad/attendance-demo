import type { Meta, StoryObj } from "@storybook/react";

import AttendanceList from "./AttendanceList";

const meta: Meta<typeof AttendanceList> = {
	title: "Attendance/List",
	component: AttendanceList,
};

export default meta;

type Story = StoryObj<typeof AttendanceList>;

export const Default: Story = {};
