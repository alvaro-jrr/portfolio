import AstroIcon from "@/components/icons/AstroIcon.astro";
import DartIcon from "@/components/icons/DartIcon.astro";
import FlutterIcon from "@/components/icons/FlutterIcon.astro";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon.astro";
import LaravelIcon from "@/components/icons/LaravelIcon.astro";
import PhpIcon from "@/components/icons/PhpIcon.astro";
import PrismaIcon from "@/components/icons/PrismaIcon.astro";
import ReactIcon from "@/components/icons/ReactIcon.astro";
import ReactRouterIcon from "@/components/icons/ReactRouterIcon.astro";
import SWRIcon from "@/components/icons/SwrIcon.astro";
import TailwindIcon from "@/components/icons/TailwindIcon.astro";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon.astro";

/**
 * The technologies tags.
 */
export const TECHNOLOGIES = {
	react: {
		label: "React",
		icon: ReactIcon,
	},
	php: {
		label: "PHP",
		icon: PhpIcon,
	},
	tailwind: {
		label: "Tailwind CSS",
		icon: TailwindIcon,
	},
	dart: {
		label: "Dart",
		icon: DartIcon,
	},
	flutter: {
		label: "Flutter",
		icon: FlutterIcon,
	},
	reactRouter: {
		label: "React Router",
		icon: ReactRouterIcon,
	},
	swr: {
		label: "SWR",
		icon: SWRIcon,
	},
	astro: {
		label: "Astro",
		icon: AstroIcon,
	},
	typescript: {
		label: "TypeScript",
		icon: TypeScriptIcon,
	},
	javascript: {
		label: "JavaScript",
		icon: JavaScriptIcon,
	},
	laravel: {
		label: "Laravel",
		icon: LaravelIcon,
	},
	prisma: {
		label: "Prisma",
		icon: PrismaIcon,
	},
};

export type TechnologyId = keyof typeof TECHNOLOGIES;
