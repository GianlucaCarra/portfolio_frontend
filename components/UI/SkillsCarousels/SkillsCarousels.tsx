import { SkillCarousel } from "../SkillCarousel.tsx/SkillCarousel";

const techSkills = [
	{ name: "React", logoUrl: "/techs/react-original.svg" },
	{ name: "C#", logoUrl: "/techs/csharp-original.svg" },
	{ name: "Next.js", logoUrl: "/techs/nextjs-original.svg" },
	{ name: "NestJS", logoUrl: "/techs/nestjs-original.svg" },
	{ name: "TypeScript", logoUrl: "/techs/typescript-original.svg" },
	{ name: "JavaScript", logoUrl: "/techs/javascript.svg" },
	{ name: ".NET", logoUrl: "/techs/dot-net-original-wordmark.svg" },
	{ name: "HTML5", logoUrl: "/techs/html5-original.svg" },
	{ name: "CSS3", logoUrl: "/techs/css3-original.svg" },
	{ name: "TailwindCSS", logoUrl: "/techs/tailwindcss-original.svg" },
	{ name: "Node.js", logoUrl: "/techs/nodejs-original-wordmark.svg" },
	{ name: "Express", logoUrl: "/techs/express-original.svg" },
	{ name: "ThreeJS", logoUrl: "/techs/threejs-original.svg" },
];

const dataSkills = [
	{ name: "PostgreSQL", logoUrl: "/techs/postgresql-original.svg" },
	{ name: "MySQL", logoUrl: "/techs/mysql-original.svg" },
	{ name: "SQLite", logoUrl: "/techs/sqlite-original.svg" },
	{ name: "Axios", logoUrl: "/techs/axios-plain-wordmark.svg" },
	{ name: "AzureSQL", logoUrl: "/techs/azuresqldatabase-original.svg" },
	{ name: "Datadog", logoUrl: "/techs/datadog-original-wordmark.svg" },
	{ name: "EF", logoUrl: "/techs/entityframeworkcore-original.svg" },
	{ name: "GraphQL", logoUrl: "/techs/graphql-plain.svg" },
	{ name: "Knex", logoUrl: "/techs/knexjs-original.svg" },
	{ name: "Oauth", logoUrl: "/techs/oauth-original.svg" },
	{ name: "RabbitMQ", logoUrl: "/techs/rabbitmq-original.svg" },
	{ name: "Redis", logoUrl: "/techs/redis-original.svg" },
];

const otherSkills = [
	{ name: "Git", logoUrl: "/techs/git-original.svg" },
	{ name: "GitHub", logoUrl: "/techs/github-original.svg" },
	{ name: "Docker", logoUrl: "/techs/docker-original-wordmark.svg" },
	{ name: "Azure", logoUrl: "/techs/azure-original.svg" },
	{ name: "Google Cloud", logoUrl: "/techs/googlecloud-original.svg" },
	{ name: "AWS", logoUrl: "/techs/amazonwebservices-original-wordmark.svg" },
	{ name: "Jest", logoUrl: "/techs/jest-plain.svg" },
	{ name: "Bash", logoUrl: "/techs/bash-original.svg" },
	{ name: "JSON", logoUrl: "/techs/json-original.svg" },
	{ name: "ESlint", logoUrl: "/techs/eslint-original.svg" },
	{ name: "Homebrew", logoUrl: "/techs/homebrew-original.svg" },
	{ name: "Nodemon", logoUrl: "/techs/nodemon-original.svg" },
];

export function SkillsCarousels() {
	return (
		<div className="flex flex-col gap-3 lg:gap-6" id="skills">
			<SkillCarousel data={techSkills} />
			<SkillCarousel reverse data={dataSkills} />
			<SkillCarousel data={otherSkills} />
		</div>
	);
}
