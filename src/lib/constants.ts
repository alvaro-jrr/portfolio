import iAnimalitos from "@/assets/ianimalitos.webp";
import siecoh from "@/assets/siecoh.webp";
import theTelecomPost from "@/assets/the-telecom-post.webp";
import type {
	Education,
	Experience,
	MonthYear,
	Project,
	StackGroup,
} from "./types";

interface Me {
	email: string;
	linkedin: string;
	github: string;
	resumeUrl: string;
	location: string;
	timezone: string;
	status: string;
	careerStart: MonthYear;
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
	location: "Ciudad Guayana, Venezuela",
	timezone: "GMT-4",
	status: "Disponible para conversar",
	careerStart: {
		month: 10,
		year: 2020,
	},
	experiences: [
		{
			company: "Sportyeah",
			role: "Flutter Developer",
			location: "Latinoamérica, remoto",
			description:
				"Desarrollo el producto móvil de una plataforma de gestión de eventos deportivos, del escaneo de entradas al panel en vivo.",
			highlights: [
				"Diseñé los módulos de eventos, escaneo de entradas, torneos, panel en vivo y administración de campañas, sponsors y publicidad.",
				"Establecí una arquitectura modular con componentes de UI reutilizables e internacionalización.",
				"Implementé una capa local con sincronización en segundo plano, permisos por rol e integración con APIs REST.",
			],
			stack: [
				"Flutter",
				"Dart",
				"SQLite",
				"REST APIs",
				"Clean Architecture",
				"i18n",
			],
			time: {
				start: {
					month: 12,
					year: 2025,
				},
			},
		},
		{
			company: "Nolatech",
			role: "Flutter Developer",
			location: "Latinoamérica, remoto",
			description:
				"Aplicaciones móviles de chat y citas, con base local y comunicación en tiempo real.",
			highlights: [
				"Construí software empaquetado y componentes de UI reutilizables que aceleraron el desarrollo de nuevos módulos.",
				"Implementé base de datos local, sesiones, roles y permisos, cifrado, APIs REST y sockets.",
			],
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
			location: "Venezuela, presencial",
			description:
				"Herramientas internas para recolectar y visualizar información climatológica.",
			highlights: [
				"Diseñé APIs en PHP para la captura y consulta de datos climatológicos.",
				"Desarrollé la interfaz en React que agilizó la recolección y visualización de registros.",
				"Creé páginas informativas interactivas para el equipo y el público.",
			],
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
				"HTML",
				"CSS",
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
			label: "Metodologías",
			items: ["SCRUM", "Agile"],
		},
		{
			label: "Idiomas",
			items: ["Español nativo", "Inglés C2"],
		},
	],
	education: {
		degree: "Ingeniería Informática",
		institution: "Universidad Nacional Experimental de Guayana",
		period: "2020 — 2026",
		status: "Egresado",
	},
	certifications: [
		"JavaScript Algorithms and Data Structures (2022)",
		"Responsive Web Design",
		"EF SET English C2 (2025)",
	],
	websiteBaseUrl: "https://alvaro-resplandor.vercel.app",
};
