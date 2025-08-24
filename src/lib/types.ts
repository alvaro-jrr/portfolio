import type { TechonologyId } from "./technologies";

export interface MonthYear {
	month: number;
	year: number;
}

export interface Experience {
	company: string;
	role: string;
	description: string;
	time: {
		start: MonthYear;
		end?: MonthYear;
	};
}

export interface Project {
	title: string;
	description: string;
	technologies: TechonologyId[];
	image: ImageMetadata;
	previewUrl?: string;
	codeUrl?: string;
}
