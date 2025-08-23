import type { Experience } from "./types";

interface Me {
	email: string;
	linkedin: string;
	github: string;
	resumeUrl: string;
	experiences: Experience[];
}

/**
 * My personal information.
 */
export const me: Me = {
	email: "alvarojrr79@gmail.com",
	linkedin: "https://www.linkedin.com/in/alvaro-resplandor/",
	github: "https://github.com/alvaro-jrr",
	resumeUrl: "/data/cv_es.pdf",
	experiences: [
		{
			company: "Nolatech",
			role: "Flutter Developer",
			description:
				"Desarrollé aplicaciones móviles de chat y citas con Flutter. Colaboré en la creación de software y componentes de UI reutilizables para agilizar el desarrollo. Me encargué de la implementación de bases de datos locales, manejo de sesiones, encriptación e integración de APIs REST.",
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
			role: "Desarollador Web",
			description:
				"En esta posición, me enfoqué en el diseño e implementación de APIs usando PHP y desarrollé aplicaciones web con React para mejorar la interfaz y experiencia del usuario. Además, creé páginas informativas interactivas.",
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
};
