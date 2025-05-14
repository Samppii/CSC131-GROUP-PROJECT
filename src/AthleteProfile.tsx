import amos from '$lib/assets/amos-aguilera.webp';
import { useEffect, useState } from 'react';
import './AthleteProfile.css';
import CallToAction from '$lib/components/CallToAction';
import TagList, { type ListTag } from '$lib/components/TagList';
import StatCarousel, {
	type CarouselStatCard,
} from './lib/components/StatCarousel';



interface SportStat {
	header: string;
	body: string;
}

interface Sport {
	name: string;
	stats: SportStat[];
}

interface SocialAccount {
	social_name: string;
	handle: string;
}

interface AthleteAPIResponse {
	first_name: string;
	last_name: string;
	school: string;
	class_of: number;
	weight_lbs: number;
	height_inches: number;
	hometown: string;
	interests: string;
	summary: string;
	sports: Sport[];
	social_accounts: SocialAccount[];
}

export default function AthleteProfile() {
	const [athlete, setAthlete] = useState<AthleteAPIResponse | null>(null);

	useEffect(() => {
		fetch('http://localhost:8000/api/athletes/1/') // Update URL if needed
			.then((res) => res.json())
			.then((data) => setAthlete(data))
			.catch((err) => console.error('Failed to fetch athlete:', err));
	}, []);

	const tags: ListTag[] =
		athlete?.sports.map((sport, i) => ({
			id: i,
			body: sport.name,
		})) || [];

	const formatStats = (sports: Sport[]): CarouselStatCard[] => {
		return sports.map((sport, index) => ({
			id: index,
			title: sport.name,
			icon: 'tabler:ball-baseball', // Customize icon if needed
			stats: sport.stats.map((s, i) => ({
				id: i,
				name: s.header,
				body: s.body,
			})),
		}));
	};

	const stats = athlete ? formatStats(athlete.sports) : [];

	if (!athlete) return <p>Loading profile...</p>;

	return (
		<main>
			<header className='AthleteProfile-header'>
				<div className='AthleteProfile-portraitFlex'>
					<div className='AthleteProfile-portraitContainer'>
						<img
							className='AthleteProfile-portrait'
							src={amos} // Replace with dynamic image if available
							alt={`Portrait of ${athlete.first_name} ${athlete.last_name}`}
						/>
					</div>
				</div>

				<div className='AthleteProfile-headerInfo'>
					<h1 className='AthleteProfile-title'>
						{athlete.first_name} {athlete.last_name}
					</h1>
					<p>
						{athlete.school} | Class of {athlete.class_of}
					</p>
					<TagList tags={tags} />
				</div>
			</header>

			<section className='AthleteProfile-stats'>
				<h2 className='AthleteProfile-statsHeader'>Stats</h2>
				<StatCarousel stats={stats} />
			</section>

			<section className='AthleteProfile-bio'>
				<h2 className='AthleteProfile-bioTitle'>
					{athlete.interests || 'Athlete Summary'}
				</h2>

				<p>{athlete.summary}</p>

				<p>
					Height: {athlete.height_inches}" | Weight: {athlete.weight_lbs} lbs |
					Hometown: {athlete.hometown}
				</p>
			</section>

			<section className='AthleteProfile-callToActionContainer'>
				<h2>Want to Get in Touch with This Athlete?</h2>
				<CallToAction icon='tabler:mail-fast' to='/contact'>
					Contact Us Now
				</CallToAction>
			</section>
		</main>
	);
}
