export function getInitials(name: string) {
	const array = name.split(" ");
	if (array.length < 2) return name[0] ?? "";
	return `${array.at(0)?.at(0)}${array.at(-1)?.at(0)}`;
}
