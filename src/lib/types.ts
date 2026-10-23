import type { TechnologyId } from "./technologies";

export interface MonthYear {
	month: number;
	year: number;
}

export interface Experience {
	company: string;
	role: string;
	location?: string;
	description: string;
	highlights?: string[];
	stack: string[];
	time: {
		start: MonthYear;
		end?: MonthYear;
	};
}

export interface Project {
	title: string;
	description: string;
	technologies: TechnologyId[];
	inReview?: boolean;
	image: ImageMetadata;
	previewUrl?: string;
	codeUrl?: string;
}

export interface StackGroup {
	label: string;
	items: string[];
}

export interface Education {
	degree: string;
	institution: string;
	period: string;
	status: string;
}
