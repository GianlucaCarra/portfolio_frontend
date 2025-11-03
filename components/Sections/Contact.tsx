import { BiChevronRight } from "react-icons/bi";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { CgMail } from "react-icons/cg";
import { IconType } from "react-icons";
import { BsEnvelope, BsLinkedin, BsMailbox, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export function Contact() {
	const contacts: {
		icon: IconType;
		title: string;
		value: string;
		link: string;
		description: string;
	}[] = [
		{
			icon: BsEnvelope,
			title: "Email",
			value: "contact@giancarra.com",
			link: "mailto:contact@giancarra.com",
			description: "Send me an email anytime",
		},
		{
			icon: BsWhatsapp,
			title: "Whatsapp",
			value: "+34 344 797-4224",
			link: "https://wa.link/d7z3ka",
			description: "Message me for fast responses",
		},
		{
			icon: BsLinkedin,
			title: "LinkedIn",
			value: "linkedin.com/in/gianlucacarra",
			link: "https://linkedin.com/in/yourname",
			description: "Let's connect professionally",
		},
	];

	return (
		<section className="flex flex-col gap-3 lg:gap-4" id="contact">
			<SectionTitle text={"Contact"} />

			<p className="text-font-secondary lg:max-w-[80%]">
				Feel free to get in touch. Whether you have a project in mind, need technical consultation,
				or just want to connect, I&apos;d love to hear from you!
			</p>

			<div className="grid gap-3 select-text sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
				{contacts.map(({ icon: Icon, title, value, link, description }, index) => (
					<a
						key={index}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="group bg-background-secondary border-font-secondary/20 relative overflow-hidden rounded-lg border p-6 hover:z-20 hover:scale-105 hover:border-blue-500 hover:shadow-lg"
					>
						<div className="bg-accent/10 text-accent group-hover:bg-accent mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors group-hover:text-white">
							<Icon className="text-xl" />
						</div>

						<h3 className="text-font-primary mb-1 font-semibold">{title}</h3>

						<p className="text-accent mb-2 text-sm">{value}</p>

						<p className="text-font-secondary/80 text-sm">{description}</p>

						<div className="absolute top-4 right-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
							<BiChevronRight className="text-font-secondary/40 h-6 w-6" />
						</div>
					</a>
				))}
			</div>

			<div className="bg-accent/10 rounded-lg p-6 select-text">
				<h4 className="text-font-primary mb-2 font-semibold">Response time</h4>

				<p className="text-font-secondary/70 text-sm">
					I typically respond within 24 hours during weekdays. For urgent matters, feel free to
					contact on WhatsApp.
				</p>
			</div>
		</section>
	);
}
