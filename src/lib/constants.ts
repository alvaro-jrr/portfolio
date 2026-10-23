import iAnimalitos from "@/assets/ianimalitos.webp";
import siecoh from "@/assets/siecoh.webp";
import theTelecomPost from "@/assets/the-telecom-post.webp";
import type { Education, Experience, Project, StackGroup } from "./types";

interface Me {
	email: string;
	linkedin: string;
	github: string;
	resumeUrl: string;
	location: string;
	status: string;
	experiences: Experience[];
	projects: Project[];
	stackGroups: StackGroup[];
	education: Education;
	certifications: string[];
	websiteBaseUrl: string;
}

/**
 * My personal information.
 */
export const me: Me = {
	email: "alvarojrr79@gmail.com",
	linkedin: "https://www.linkedin.com/in/alvaro-resplandor/",
	github: "https://github.com/alvaro-jrr",
	resumeUrl: "/data/cv_es.pdf",
	location: "Caracas, Venezuela · GMT-4",
	status: "Disponible para conversar",
	experiences: [
		{
			company: "Nolatech",
			role: "Flutter Developer",
			description:
				"Desarrollé aplicaciones móviles de chat y citas con Flutter. Construí componentes de UI reutilizables e implementé bases de datos locales, sesiones, roles y permisos, cifrado, APIs REST y sockets.",
			stack: [
				"Flutter",
				"Firebase",
				"Supabase",
				"Provider",
				"Socket.io",
				"REST APIs",
				"SQLite",
			],
			time: {
				start: {
					month: 2,
					year: 2023,
				},
				end: {
					month: 5,
					year: 2025,
				},
			},
		},
		{
			company: "Corpoelec",
			role: "Desarrollador Web",
			description:
				"Diseñé e implementé APIs con PHP y desarrollé aplicaciones web con React. También creé páginas informativas interactivas.",
			stack: ["React", "PHP", "Slim", "Tailwind CSS", "REST APIs"],
			time: {
				start: {
					month: 10,
					year: 2020,
				},
				end: {
					month: 2,
					year: 2023,
				},
			},
		},
	],
	projects: [
		{
			title: "SIECOH",
			description:
				"Aplicación web para registrar y consultar datos climatológicos de distintas estaciones, con históricos y carga de nuevos registros.",
			technologies: [
				"react",
				"tailwind",
				"php",
				"reactRouter",
				"swr",
				"typescript",
			],
			image: siecoh,
		},
		{
			title: "iAnimalitos",
			description:
				"Aplicación móvil para consultar los resultados del sorteo de animalitos de Venezuela y analizar las probabilidades de aparición por casa de lotería.",
			technologies: ["flutter", "dart"],
			image: iAnimalitos,
			codeUrl: "https://github.com/alvaro-jrr/ia-animalitos",
		},
		{
			title: "The Telecom Post",
			description:
				"Blog educativo sobre telecomunicaciones con artículos temáticos, construido con Astro y Tailwind CSS.",
			technologies: ["astro", "tailwind", "typescript"],
			image: theTelecomPost,
			previewUrl: "https://telecom-blog.vercel.app/",
			codeUrl: "https://github.com/alvaro-jrr/telecom-blog",
		},
	],
	stackGroups: [
		{
			label: "Frontend",
			items: [
				"React",
				"Astro",
				"TypeScript",
				"JavaScript",
				"Tailwind CSS",
				"React Router",
				"SWR",
			],
		},
		{
			label: "Móvil",
			items: [
				"Flutter",
				"Dart",
				"Firebase",
				"Supabase",
				"SQLite",
				"Provider",
				"Socket.io",
			],
		},
		{
			label: "Backend",
			items: ["PHP", "Laravel", "Slim", "Prisma", "MySQL"],
		},
		{
			label: "Herramientas",
			items: [
				"Git",
				"GitHub",
				"Postman",
				"Figma",
				"Adobe XD",
				"Zeplin",
				"Trello",
			],
		},
		{
			label: "Idiomas",
			items: ["Español nativo", "Inglés C2"],
		},
	],
	education: {
		degree: "Ingeniería Informática",
		institution: "Universidad Nacional Experimental de Guayana",
		period: "2020 — actualidad",
		status: "Último semestre",
	},
	certifications: [
		"JavaScript Algorithms and Data Structures",
		"Responsive Web Design",
		"EF SET English C2",
	],
	websiteBaseUrl: "https://alvaro-resplandor.vercel.app",
};
