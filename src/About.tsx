import './About.css';
import CallToAction from '$lib/components/CallToAction';
import teamSantiago from '$lib/assets/employee.jpg';
import teamDavid from '$lib/assets/employee2.jpg';
import teamSantana from '$lib/assets/employee3.jpg';
import QuestionAnswerList from './lib/components/QuestionAnswerList';

export default function About() {
	const faqs = [
 		{
			id: 0,
			question: 'What services does Players Club Management offer?',
			answer: 'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.'
		},
		{
			id: 1,
			question: 'Who can sign with Players Club Management?',
			answer: 'We work with high school and college athletes across various sports who are looking to maximize their NIL potential.'
		},
		{
			id: 2,
			question: 'How does Players Club Management get paid?',
			answer: 'We offer a tiered membership system, and also typically keep an industry-standard 20% commission on any deals we secure. We require a $500 deposit and take a 20% commission on any NIL deals secured.'
		},
		{
			id: 3,
			question: 'How can brands collaborate with Players Club Management?',
			answer: 'Brands looking to partner with our athletes can reach out through our contact form or by emailing us directly. We will match brands with the right athletes based on target audience, values, and marketing goals.'
		},
		{
			id: 4,
			question: 'Do you provide legal support for NIL contracts?',
			answer: 'Yes, we work with legal professionals to ensure all NIL contracts are reviewed and compliant with NCAA and state regulations.'
		}
	];

	return (
		<div className="About">
			<section className="About-welcome">
				<div className="About-welcomeContent">
					<div className="About-welcomeImageContainer">
						<img src="/src/lib/assets/employee.jpg" alt="Santiago Zuniga" className="About-welcomeImage" />
						<p className="About-welcomeCaption">Santiago Zuniga, Founder & CEO</p>
					</div>
					<div className="About-welcomeText">
						<h2 className="About-welcomeTitle">Welcome to Players Club Management</h2>
						<p>
							Unlock your full potential in the NIL space with a team that puts
							athletes first. Whether you're a student-athlete looking to maximize
							your brand or a business searching for top-tier athlete partnerships,
							we're here to connect you to the right opportunities.
						</p>
						<div className="About-welcomeCta">
							<CallToAction icon="tabler:calendar-time" to="/contact">
								GET IN TOUCH WITH US
							</CallToAction>
						</div>
					</div>
				</div>
			</section>

			<section className="About-hero">
				<div className="About-heroContent">
					<h1 className="About-title">Empowering Athletes and Connecting Brands</h1>
					<p className="About-subtitle">
						At Players Club Management, we are dedicated to empowering student athletes by maximizing their Name,
						Image, and Likeness (NIL) opportunities. Our mission is to help athletes build their personal brands, secure
						valuable partnerships, and create long-term financial success through strategic marketing and dedicated
						negotiation, and we are here to guide them every step of the way.
					</p>
					<p className="About-subtitle">
						Players Club Management was founded with a passion for sports and a vision to help athletes navigate the
						evolving NIL landscape. As former athletes and business professionals, we recognized the need for a trusted,
						athlete-first agency that provides guidance, support and expertise in the NIL space. Our journey began with a
						commitment to financial literacy, brand building, and long-term career planning. Today, we are proud to help athletes turn their talents
						into sustainable success.
					</p>
					<p className="About-subtitle">
						Want to learn more about how Players Club Management can help you or your brand? Let's get in touch today!
					</p>
					<div className="About-teamCta">
						<CallToAction icon="tabler:message-circle" to="/contact">
							SCHEDULE AN APPOINTMENT
						</CallToAction>
					</div>
				</div>
			</section>

			<section className="About-team">
				<h2 className="About-sectionTitle">Meet the Team</h2>
				<div className="About-teamMembers">
					<div className="About-teamMember">
						<img src={teamSantiago} alt="Santiago Zuniga" className="About-teamImage" />
						<div className="About-teamInfo">
							<h3 className="About-teamName">SANTIAGO ZUNIGA</h3>
							<h4 className="About-teamTitle">Founder & CEO</h4>
							<p className="About-teamBio">
								With a background in collegiate athletics and a passion for helping
								student-athletes succeed, Santiago founded PCM with
								a mission to help athletes maximize their NIL value. His sports business network allows
								him to create a platform where athletes can thrive in the world of NIL.
							</p>
						</div>
					</div>

					<div className="About-teamMember">
						<img src={teamDavid} alt="David Zuniga" className="About-teamImage" />
						<div className="About-teamInfo">
							<h3 className="About-teamName">DAVID ZUNIGA</h3>
							<h4 className="About-teamTitle">Business Development Director</h4>
							<p className="About-teamBio">
								David brings his expertise in business development and partnerships.
								Specializing in NIL compliance and market analysis, he carefully
								constructs strategies to ensure that every deal aligns with our
								athletes' goals and values.
							</p>
						</div>
					</div>

					<div className="About-teamMember">
						<img src={teamSantana} alt="Santana Zuniga" className="About-teamImage" />
						<div className="About-teamInfo">
							<h3 className="About-teamName">SANTANA ZUNIGA</h3>
							<h4 className="About-teamTitle">Marketing & Operations Manager</h4>
							<p className="About-teamBio">
								Santana oversees our marketing and operations processes.
								With a background in brand development and marketing strategies
								that prioritize, elevate and expand each athlete's unique qualifications,
								Santana creates compelling personal brands that
								attract the top NIL opportunities.
							</p>
						</div>
					</div>
				</div>
				<div className="About-teamCta">
					<CallToAction icon="tabler:user" to="/contact" className="About-sendUsMessage">
						SEND US A MESSAGE
					</CallToAction>
				</div>
			</section>

			<section className="About-faq">
				<h2 className="About-faqTitle">Frequently Asked Questions</h2>

				<QuestionAnswerList list={faqs} />

				<div className="About-faqCta">
					<CallToAction icon="tabler:help-circle" to="/contact">
						Have more questions?
					</CallToAction>
				</div>
			</section>
		</div>
	);
}
