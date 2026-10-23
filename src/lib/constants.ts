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
	location: "Ciudad Guayana, Venezuela · GMT-4",
	status: "Disponible para conversar",
	careerStart: {
		month: 10,
		year: 2020,
	},
	experiences: [
		{
			company: "Sportyeah",
			role: "Flutter Developer",
			location: "Latinoamérica · Remoto",
			description:
				"Módulos para la gestión de eventos deportivos, desde el escaneo de entradas hasta el panel en vivo de cada encuentro.",
			highlights: [
				"Diseñé e implementé módulos de gestión de eventos, escaneo de entradas, creación de torneos, panel en vivo para encuentros deportivos y administración de campañas, sponsors y espacios publicitarios.",
				"Establecí una arquitectura modular y limpia, con un sistema de componentes de interfaz reutilizables y soporte para internacionalización.",
				"Diseñé una estrategia de datos locales con sincronización en segundo plano, control de acceso basado en roles y permisos, e integración con APIs REST.",
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
			location: "Latinoamérica · Remoto",
			description:
				"Aplicaciones móviles de chat y citas, con una base local confiable y comunicación en tiempo real.",
			highlights: [
				"Colaboré en la creación de software empaquetado y componentes de UI reutilizables que aceleraron el desarrollo de nuevos módulos.",
				"Implementé base de datos local, manejo de sesiones de usuario, roles y permisos, cifrado, integración con APIs REST y uso de sockets.",
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
			location: "Venezuela · Presencial",
			description:
				"Herramientas internas para la recolección y visualización de información climatológica.",
			highlights: [
				"Diseñé e implementé APIs con PHP para la captura y consulta de datos climatológicos.",
				"Desarrollé aplicaciones web con React que mejoraron la interfaz y la experiencia de usuario, agilizando la recolección y visualización de la información.",
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
