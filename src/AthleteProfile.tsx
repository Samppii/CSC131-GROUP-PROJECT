import { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router';
import './AthleteProfile.css';
import { type APIAthlete, parseAthlete, parseSports } from '$lib/athletes';
import CallToAction from '$lib/components/CallToAction';
import StatCarousel from '$lib/components/StatCarousel';
import TagList, { type ListTag } from '$lib/components/TagList';

export default function AthleteProfile() {
	const params = useParams();
	if (!params.id) {
		redirect('/athletes', 302);
	}

	const [data, setData] = useState<APIAthlete | null>(null);

	useEffect(() => {
		fetch(`http://localhost:8000/api/athletes/${params.id}`, {
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.error('Failed to fetch athlete:', err));
	}, [params.id]);

	if (!data) return <p>Loading profile...</p>;

	const athlete = parseAthlete(data);
	const stats = parseSports(data);
	const tags: ListTag[] | undefined = athlete.tags?.map((body, i) => ({
		id: i,
		body,
	}));

	return (
		<main>
			<header className='AthleteProfile-header'>
				<div className='AthleteProfile-portraitFlex'>
					<div className='AthleteProfile-portraitContainer'>
						<img
							className='AthleteProfile-portrait'
							src={athlete.image}
							alt={`Portrait of ${athlete.name}`}
						/>
					</div>
				</div>

				<div className='AthleteProfile-headerInfo'>
					<h1 className='AthleteProfile-title'>{athlete.name}</h1>
					<p>{athlete.school} | {athlete.position}</p>
					{tags && <TagList tags={tags} />}
				</div>
			</header>

			<section className='AthleteProfile-stats'>
				<h2 className='AthleteProfile-statsHeader'>Stats</h2>
				<StatCarousel stats={stats} />
			</section>

			<section className='AthleteProfile-bio'>
				<h2 className="AthleteProfile-bioTitle">Bio</h2>
				<p>
					Height: {Math.floor(data.height_inches / 12)}'
					{data.height_inches % 12}"
				</p>
				<p>Weight: {data.weight_lbs} lbs</p>
				<p>Hometown: {data.hometown}</p>
				<p>
					School: {athlete.school}, Class of {data.class_of}
				</p>
				<p>
					Interests:{' '}
					{data.interests
						.split('\n')
						.map(s => s.trim())
						.join(', ')}
				</p>

				<h2 className='AthleteProfile-bioTitle'>{data.tagline}</h2>

				{data.summary
					.split('\n')
					.filter(s => s.length > 0)
					.map((s, i) => ({ id: i, body: s }))
					.map(({ id, body }) => (
						<p key={id}>{body}</p>
					))}
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
