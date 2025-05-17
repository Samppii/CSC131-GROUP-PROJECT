import './About.css';
import CallToAction from '$lib/components/CallToAction';
import teamSantiago from '$lib/assets/employee.jpg';
import teamDavid from '$lib/assets/employee2.jpg';
import teamSantana from '$lib/assets/employee3.jpg';
import QuestionAnswerList from '$lib/components/QuestionAnswerList';
import EmployeeList, { type ListEmployee } from '$lib/components/EmployeeList';
import type { QuestionAnswer } from '$lib/QuestionAnswerContext';

export default function About() {
	const faqs: QuestionAnswer[] = [
		{
			id: 0,
			question: 'What services does Players Club Management offer?',
			answer:
				'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.',
		},
		{
			id: 1,
			question: 'Who can sign with Players Club Management?',
			answer:
				'We work with high school and college athletes across various sports who are looking to maximize their NIL potential.',
		},
		{
			id: 2,
			question: 'How does Players Club Management get paid?',
			answer:
				'We offer a tiered membership system, and also typically keep an industry-standard 20% commission on any deals we secure. We require a $500 deposit and take a 20% commission on any NIL deals secured.',
		},
		{
			id: 3,
			question: 'How can brands collaborate with Players Club Management?',
			answer:
				'Brands looking to partner with our athletes can reach out through our contact form or by emailing us directly. We will match brands with the right athletes based on target audience, values, and marketing goals.',
		},
		{
			id: 4,
			question: 'Do you provide legal support for NIL contracts?',
			answer:
				'Yes, we work with legal professionals to ensure all NIL contracts are reviewed and compliant with NCAA and state regulations.',
		},
	];

	const employees: ListEmployee[] = [
		{
			id: 0,
			name: 'Santiago Zuniga',
			position: 'Founder & CEO',
			body: 'With a deep understanding of the NIL space and a passion for helping athletes succeed, Santiago leads Players Club Management with expertise and dedication. His vision is to create a platform where student-athletes can thrive both on and off the field.',
			image: teamSantiago,
		},
		{
			id: 1,
			name: 'David Zuniga',
			position: 'Business Development Director',
			body: "David brings a wealth of experience in business strategy and partnership development. His role focuses on creating strategic collaborations between athletes and brands, ensuring that every deal aligns with our athletes' goals and values.",
			image: teamDavid,
		},
		{
			id: 2,
			name: 'Santana Zuniga',
			position: 'Marketing & Branding Specialist',
			body: 'Santana specializes in brand development and marketing strategies that amplify the reach and impact of our athletes. Her creativity and expertise help student-athletes build compelling personal brands that attract top-tier NIL opportunities.',
			image: teamSantana,
		},
	];

	return (
		<div className='About'>
			<section className='About-welcome'>
				<div className='About-welcomeContent'>
					<div className='About-welcomeImageContainer'>
						<img
							src='/src/lib/assets/employee.jpg'
							alt='Santiago Zuniga'
							className='About-welcomeImage'
						/>
						<p className='About-welcomeCaption'>
							Santiago Zuniga, Founder & CEO
						</p>
					</div>
					<div className='About-welcomeText'>
						<h2 className='About-welcomeTitle'>
							Welcome to Players Club Management
						</h2>
						<p>
							Unlock your full potential in the NIL space with a team that puts
							athletes first. Whether you're a student-athlete looking to
							maximize your brand or a business searching for top-tier athlete
							partnerships, we're here to connect you to the right
							opportunities.
						</p>
						<div className='About-welcomeCta'>
							<CallToAction icon='tabler:calendar-time' to='/contact'>
								Get in Touch With Us
							</CallToAction>
						</div>
					</div>
				</div>
			</section>

			<section className='About-hero'>
				<div className='About-heroContent'>
					<h1 className='About-title'>
						Empowering Athletes and Connecting Brands
					</h1>
					<p className='About-subtitle'>
						At Players Club Management, we are dedicated to empowering student
						athletes by maximizing their Name, Image, and Likeness (NIL)
						opportunities. Our mission is to help athletes build their personal
						brands, secure valuable partnerships, and create long-term financial
						success through strategic marketing and dedicated negotiation, and
						we are here to guide them every step of the way.
					</p>
					<p className='About-subtitle'>
						Players Club Management was founded with a passion for sports and a
						vision to help athletes navigate the evolving NIL landscape. As
						former athletes and business professionals, we recognized the need
						for a trusted, athlete-first agency that provides guidance, support
						and expertise in the NIL space. Our journey began with a commitment
						to financial literacy, brand building, and long-term career
						planning. Today, we are proud to help athletes turn their talents
						into sustainable success.
					</p>
					<p className='About-subtitle'>
						Want to learn more about how Players Club Management can help you or
						your brand? Let's get in touch today!
					</p>
					<div className='About-teamCta'>
						<CallToAction icon='tabler:message-circle' to='/contact'>
							Schedule An Appointment
						</CallToAction>
					</div>
				</div>
			</section>

			<section className='About-team'>
				<h2 className='About-sectionTitle'>Meet the Team</h2>
				<EmployeeList className='About-teamMembers' employees={employees} />
			</section>

			<section className='About-faq'>
				<h2 className='About-faqTitle'>Frequently Asked Questions</h2>

				<QuestionAnswerList list={faqs} />

				<div className='About-faqCta'>
					<CallToAction icon='tabler:help-circle' to='/contact'>
						Have More Questions?
					</CallToAction>
				</div>
			</section>
		</div>
	);
}
