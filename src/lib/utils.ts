import clsx, { type ClassArray } from "clsx";

/**
 * Utility function to merge classes.
 * @param classes - The classes to merge.
 * @returns The merged classes.
 */
export function cn(...classes: ClassArray) {
	return clsx(classes);
}

interface DateParts {
	month: number;
	year: number;
}

/**
 * Counts the full years elapsed since a start date.
 * @param start - The month and year when the experience started.
 * @param now - The reference date, defaults to today.
 * @returns The number of completed years.
 */
export function getYearsOfExperience(start: DateParts, now = new Date()) {
	const years = now.getFullYear() - start.year;

	return now.getMonth() + 1 < start.month ? Math.max(years - 1, 0) : years;
}
