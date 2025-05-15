import './Home.css';
import Footer from '$lib/components/Footer';
import Hero from '$lib/components/Hero';
import Navbar from '$lib/components/Navbar';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import AthleteCarousel, {
	type CarouselAthlete,
} from '$lib/components/AthleteCarousel';
import ServiceList, { type Service } from '$lib/components/ServiceList';
import AboutVideo from '$lib/components/AboutVideo';
import EmployeeList, { type ListEmployee } from '$lib/components/EmployeeList';
import employee1 from '$lib/assets/employee.jpg';
import employee2 from '$lib/assets/employee2.jpg';
import employee3 from '$lib/assets/employee3.jpg';
import TestimonialList, {
	type ListTestimonial,
} from '$lib/components/TestimonialList';
import testimonial1 from '$lib/assets/testimonial1.png';
import testimonial2 from '$lib/assets/testimonial2.png';
import FinalHook from '$lib/components/FinalHook';
import { parseAthletes } from '$lib/athletes';

export default function Home() {
	const [showNav, setShowNav] = useState(false);
	const heroRef = useRef<HTMLElement>(null);
	const [athletes, setAthletes] = useState<CarouselAthlete[]>([]);

	useEffect(() => {
		const callback: IntersectionObserverCallback = entries => {
			for (const entry of entries) {
				setShowNav(!entry.isIntersecting);
			}
		};

		const observer = new IntersectionObserver(callback, {
			threshold: 0.45,
		});

		if (heroRef.current) {
			observer.observe(heroRef.current);
		}
	});

	useEffect(() => {
		fetch('/api/athletes/')
			.then(res => res.json())
			.then(data => setAthletes(parseAthletes(data)))
			.catch(err => console.error('Failed to fetch athletes:', err));
	}, []);

	// TODO: get services from ???
	const services: Service[] = [
		{
			id: 0,
			title: 'NIL Deal Negotiation',
			icon: 'tabler:briefcase',
			body: 'We work closely with brands and businesses to negotiate fair and beneficial NIL deals for our athletes. Our team ensures that each contract aligns with the athlete’s goals and long-term success.',
		},
		{
			id: 1,
			title: 'Sponsorship & Endorsement Opportunities',
			icon: 'tabler:heart-handshake',
			body: "Connecting athletes with the right sponsors is our specialty. We seek out partnerships that enhance our athletes' brand value and provide meaningful financial opportunities.",
		},
		{
			id: 2,
			title: 'Social Media Growth & Monetization',
			icon: 'tabler:social',
			body: 'We help athletes expand their online presence and monetize their social media platforms effectively. From content strategy to engagement optimization, we ensure athletes maximize their digital impact.',
		},
		{
			id: 3,
			title: 'Personal Branding & Marketing Strategy',
			icon: 'tabler:user-star',
			body: 'Building a strong personal brand is key to long-term success. We assist athletes in developing their brand identity, creating compelling content, and positioning themselves as marketable figures in the sports industry.',
		},
		{
			id: 4,
			title: 'Financial Literacy & Contract Review',
			icon: 'tabler:shield-dollar',
			body: 'Understanding NIL earnings and contract terms is crucial. We provide financial literacy education and contract review services to ensure our athletes make informed decisions about their earnings and agreements. We also offer specialized training and workshops to educate athletes about NIL opportunities, contract reviews, and financial management.',
		},
		{
			id: 5,
			title: 'Business & Entrepreneurship Guidance',
			icon: 'tabler:file-certificate',
			body: 'For athletes looking to explore business ventures, we provide strategic guidance on launching their own products, businesses, or investment opportunities. Our goal is to equip athletes with the knowledge and skills to thrive beyond their playing careers.',
		},
	];

	// TODO: get employees from ??
	const employees: ListEmployee[] = [
		{
			id: 0,
			name: 'Santiago Zuniga',
			position: 'Founder & CEO',
			body: 'With a deep understanding of the NIL space and a passion for helping athletes succeed, Santiago leads Players Club Management with expertise and dedication. His vision is to create a platform where student-athletes can thrive both on and off the field.',
			image: employee1,
		},
		{
			id: 1,
			name: 'David Zuniga',
			position: 'Business Development Director',
			body: "David brings a wealth of experience in business strategy and partnership development. His role focuses on creating strategic collaborations between athletes and brands, ensuring that every deal aligns with our athletes' goals and values.",
			image: employee2,
		},
		{
			id: 2,
			name: 'Santana Zuniga',
			position: 'Marketing & Branding Specialist',
			body: 'Santana specializes in brand development and marketing strategies that amplify the reach and impact of our athletes. Her creativity and expertise help student-athletes build compelling personal brands that attract top-tier NIL opportunities.',
			image: employee3,
		},
	];

	// TODO: get testimonials from ??
	const testimonials: ListTestimonial[] = [
		{
			id: 0,
			tagline: 'The best organization in the business',
			quote:
				"I really can't say enough about how smoothly they've been handling everything. They really are the best organization in the business.",
			attribution: {
				name: 'Buck Wheatley',
				credentials: 'UCLA Football Athlete',
				image: testimonial1,
			},
		},
		{
			id: 1,
			tagline: "They've boosted my athletic career to whole new heights",
			quote:
				"Players Club Management has helped me take the next step in my journey. They've boosted my athletic career to whole new heights.",
			attribution: {
				name: 'Adam Smith',
				credentials: 'UCSB Basketball Athlete',
				image: testimonial2,
			},
		},
		{
			id: 2,
			tagline: "I've never had to worry about a single thing",
			quote:
				"These guys are great at what they do. I've never had to worry about a single thing they manage.",
			attribution: {
				name: 'Mike Walters',
				credentials: 'ASU Baseball Athlete',
			},
		},
	];

	return (
		<main>
			<Hero ref={heroRef} id='hero' />
			<Navbar className={clsx('Home-navbar', showNav && 'is-visible')} />
			<AthleteCarousel athletes={athletes} />
			<ServiceList services={services} />
			<AboutVideo />
			<EmployeeList employees={employees} />
			<TestimonialList testimonials={testimonials} />
			<FinalHook />
			<Footer />
		</main>
	);
}
