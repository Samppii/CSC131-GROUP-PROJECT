import './Home.css';
import Footer from '$lib/components/Footer';
import Hero from '$lib/components/Hero';
import Navbar from '$lib/components/Navbar';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import AthleteCarousel, {
	type CarouselAthlete,
} from '$lib/components/AthleteCarousel';
import amos from '$lib/assets/amos-aguilera.webp';
import ServiceList, { type Service } from '$lib/components/ServiceList';
import AboutVideo from '$lib/components/AboutVideo';

export default function Home() {
	const [showNav, setShowNav] = useState(false);
	const heroRef = useRef<HTMLElement>(null);

	const [nAthletes, setNAthletes] = useState(4);

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

	// TODO: get athletes from django
	const athletes: CarouselAthlete[] = [...Array(nAthletes)].map((_, i) => ({
		id: i,
		name: 'Amos Aguilera',
		position: '1B',
		school: 'Jurupa Hills High School',
		image: i === 0 ? amos : `https://unsplash.it/id/${(i * 142) % 517}/400/240`,
		tags: ['Baseball', 'NIL', 'Multi-Sport'],
	}));

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

	return (
		<main>
			<Hero ref={heroRef} id='hero' />
			<Navbar className={clsx('Home-navbar', showNav && 'is-visible')} />
			<AthleteCarousel athletes={athletes} />
			<label style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
				Number of athletes
				<input
					type='range'
					min='4'
					max='16'
					value={nAthletes}
					onChange={e => {
						const n = Number.parseInt(e.target.value);
						if (Number.isNaN(n)) return;
						setNAthletes(Math.max(n, 1));
					}}
				/>
			</label>
			<ServiceList services={services} />
			<AboutVideo />
			<Footer />
		</main>
	);
}
