import FlutterIcon from "@/components/icons/FlutterIcon.astro";
import PhpIcon from "@/components/icons/PhpIcon.astro";
import ReactIcon from "@/components/icons/ReactIcon.astro";
import ReactRouterIcon from "@/components/icons/ReactRouterIcon.astro";
import SWRIcon from "@/components/icons/SwrIcon.astro";
import TailwindIcon from "@/components/icons/TailwindIcon.astro";
import AstroIcon from "@/components/icons/AstroIcon.astro";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon.astro";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon.astro";
import LaravelIcon from "@/components/icons/LaravelIcon.astro";
import DartIcon from "@/components/icons/DartIcon.astro";
import PrismaIcon from "@/components/icons/PrismaIcon.astro";

/**
 * The technologies tags.
 */
export const TECHNOLOGIES = {
	react: {
		label: "React",
		backgroundColor: "#006591",
		icon: ReactIcon,
	},
	php: {
		label: "PHP",
		backgroundColor: "#4E5B93",
		icon: PhpIcon,
	},
	tailwind: {
		label: "Tailwind CSS",
		backgroundColor: "#006591",
		icon: TailwindIcon,
	},
	dart: {
		label: "Dart",
		backgroundColor: "#042448",
		icon: DartIcon,
	},
	flutter: {
		label: "Flutter",
		backgroundColor: "#042448",
		icon: FlutterIcon,
	},
	reactRouter: {
		label: "React Router",
		backgroundColor: "#121212",
		icon: ReactRouterIcon,
	},
	swr: {
		label: "SWR",
		backgroundColor: "#121212",
		icon: SWRIcon,
	},
	astro: {
		label: "Astro",
		backgroundColor: "#000",
		icon: AstroIcon,
	},
	typescript: {
		label: "TypeScript",
		backgroundColor: "#007ACC",
		icon: TypeScriptIcon,
	},
	javascript: {
		label: "JavaScript",
		backgroundColor: "oklch(47.6% 0.114 61.907)",
		icon: JavaScriptIcon,
	},
	laravel: {
		label: "Laravel",
		backgroundColor: "#111110",
		icon: LaravelIcon,
	},
	prisma: {
		label: "Prisma",
		backgroundColor: "#1C2044",
		icon: PrismaIcon,
	},
};

export type TechonologyId = keyof typeof TECHNOLOGIES;

export type Techonology = (typeof TECHNOLOGIES)[TechonologyId];
