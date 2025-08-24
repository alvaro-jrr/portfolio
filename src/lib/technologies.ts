import FlutterIcon from "@/components/icons/Flutter.astro";
import PhpIcon from "@/components/icons/Php.astro";
import ReactIcon from "@/components/icons/React.astro";
import ReactRouterIcon from "@/components/icons/ReactRouter.astro";
import SWRIcon from "@/components/icons/Swr.astro";
import TailwindIcon from "@/components/icons/Tailwind.astro";

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
		label: "Tailwind",
		backgroundColor: "#006591",
		icon: TailwindIcon,
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
		backgroundColor: "#006591",
		icon: SWRIcon,
	},
};

export type TechonologyId = keyof typeof TECHNOLOGIES;

export type Techonology = (typeof TECHNOLOGIES)[TechonologyId];
