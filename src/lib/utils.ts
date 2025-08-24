import clsx, { type ClassArray } from "clsx";

/**
 * Utility function to merge classes.
 * @param classes - The classes to merge.
 * @returns The merged classes.
 */
export function cn(...classes: ClassArray) {
	return clsx(classes);
}
