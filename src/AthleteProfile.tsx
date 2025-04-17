import { useEffect, useRef, useState } from 'react';
import './Components.css';
import type { Stat } from '$lib/components/StatCard';
import StatCard from '$lib/components/StatCard';
import { Link } from 'react-router-dom'; // Assuming this is the Link component being used
import clsx from 'clsx';
import AthleteCard, { type Athlete } from '$lib/components/AthleteCard';
import amos from '$lib/assets/amos-aguilera.webp';
import CallToAction from '$lib/components/CallToAction';

export default function AthleteProfile() {
	const baseballStats: Stat[] = [
		{
			id: 0,
			name: 'Body',
			body: '6-3, 200 pounds. Strong frame with present strength.',
		},
		{
			id: 1,
			name: 'Hit',
			body: 'RHH. Slightly open stance that evens out when he strides. Hands rest away from back shoulder. Higher launch angle that produces a lot of fly balls. 64.3 mph bat speed with 12g of rotational acceleration.',
		},
		{
			id: 2,
			name: 'Power',
			body: '89 mph max exit velocity (78 avg.); 339-foot max batted distance. Consistently pulls the ball.',
		},
		{
			id: 3,
			name: 'Arm',
			body: 'RH. INF - 71.00 mph. Side arm release across the infield.',
		},
		{
			id: 4,
			name: 'Defense',
			body: 'Calm footwork through the play.',
		},
	];

	const generalStats: Stat[] = [
		{ id: 0, name: 'Speed', body: '7.02 seconds in the 60-yard dash.' },
		{ id: 1, name: 'Stride', body: 'Long and tall strides.' },
	];

	return (
		<div>
			<section
				style={{
					padding: '2rem',
					maxWidth: '1200px',
					margin: '0 auto',
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
				}}
			>
				{/* Top Section */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: '2rem',
					}}
				>
					<div style={{ flex: '1' }}>
						<h1 style={{ fontSize: '1.75rem', color: 'var(--cl-accent)' }}>
							AMOS AGUILERA
						</h1>
						<p>1B | Jurupa Hills High School</p>
						<div
							style={{
								display: 'flex',
								gap: '0.5rem',
								flexWrap: 'wrap',
								marginTop: '0.5rem',
							}}
						>
							<span
								style={{
									background: 'var(--cl-raise)',
									padding: '0.25rem 0.5rem',
									borderRadius: '0.5rem',
								}}
							>
								Football
							</span>
							<span
								style={{
									background: 'var(--cl-raise)',
									padding: '0.25rem 0.5rem',
									borderRadius: '0.5rem',
								}}
							>
								NIL
							</span>
							<span
								style={{
									background: 'var(--cl-raise)',
									padding: '0.25rem 0.5rem',
									borderRadius: '0.5rem',
								}}
							>
								Team Lead
							</span>
						</div>
					</div>

					<img
						src={amos}
						alt='Amos Aguilera'
						style={{
							width: '690px',
							borderRadius: '0.5rem',
							objectFit: 'cover',
						}}
					/>
				</div>

				{/* Stats Header */}
				<h2
					style={{
						textAlign: 'center',
						color: 'var(--cl-accent)',
						fontSize: '1.5rem',
					}}
				>
					Stats
				</h2>

				{/* Stat Cards */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '2rem',
					}}
				>
					<StatCard
						title='Baseball'
						icon='tabler:ball-baseball'
						stats={baseballStats}
					/>
					<StatCard
						title='General Stats'
						icon='tabler:activity'
						stats={generalStats}
					/>
				</div>
			</section>

			{/* Bio Section */}
			<section
				style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
			>
				<h2
					style={{
						fontFamily: 'var(--ff-header)',
						color: 'var(--cl-accent)',
						marginBottom: '1rem',
					}}
				>
					Premiere Pinch-Hitter Pro
				</h2>

				<p style={{ textAlign: 'left', marginBottom: '1rem' }}>
					Amos Aguilera is a 6'1", 170-pound first baseman from Fontana, CA,
					with a tall, projectable frame and room to add strength. A multi-sport
					athlete competing in basketball and wrestling, he brings athleticism,
					coordination, and toughness to the baseball field. Defensively, he has
					soft hands, solid footwork, and a strong feel for the glove, making
					him a reliable presence at first base. His short arm action leads to
					accurate throws, and with further development—particularly by driving
					through his target—he can add more velocity.
				</p>

				<p style={{ textAlign: 'left' }}>
					At the plate, Aguilera is a right-handed hitter with a slightly open
					stance and a small leg lift trigger for timing. His rotational swing
					and strong hands generate solid bat speed, allowing him to drive the
					ball into the gaps. With further refinement—such as incorporating a
					deeper hand load and working through the ball more efficiently—he has
					the potential to unlock even greater power. His multi-sport background
					enhances his strength, agility, and competitiveness, making him a
					well-rounded athlete with significant upside as he continues to
					develop.
				</p>

				<div style={{ marginTop: '2rem' }}>
					<CallToAction icon='tabler:mail-forward' to='/contact'>
						Want to Get in Touch with This Athlete? Contact Us Now
					</CallToAction>
				</div>
			</section>
		</div>
	);
}
