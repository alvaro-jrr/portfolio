export interface MonthYear {
	month: number;
	year: number;
}

export type Experience = {
	company: string;
	role: string;
	description: string;
	time: {
		start: MonthYear;
		end?: MonthYear;
	};
};
