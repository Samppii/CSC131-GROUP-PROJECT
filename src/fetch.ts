import type { APIAthlete } from '$lib/athletes';
import amos from '$lib/assets/amos-aguilera.webp';
import amos_1 from '$lib/assets/amos-1.jpeg';
import amos_2 from '$lib/assets/amos-2.jpeg';
import amos_3 from '$lib/assets/amos-3.jpeg';
import amos_4 from '$lib/assets/amos-4.jpeg';
import amos_5 from '$lib/assets/amos-5.jpeg';
import amos_6 from '$lib/assets/amos-6.jpeg';
import amos_7 from '$lib/assets/amos-7.jpeg';
import amos_8 from '$lib/assets/amos-8.jpeg';
import amos_9 from '$lib/assets/amos-9.jpeg';
import amos_10 from '$lib/assets/amos-10.jpeg';

type Fetch = typeof fetch;

const ATHLETE: APIAthlete = {
	id: 1,
	first_name: 'Amos',
	last_name: 'Aguilera',
	tags: ['Baseball', 'NIL', 'Team Lead'].join('\n'),
	position: '1B',
	image: amos,
	school: 'Jurupa Hills High School',
	class_of: 2026,
	weight_lbs: 200,
	height_inches: 76,
	hometown: 'Fontana, CA',
	interests: [
		'Christian/Believes in the lord',
		'Fitness',
		'WWE',
		'Recovery & Wellness',
	].join('\n'),
	summary:
		'Amos Aguilera is a 6\'1", 170-pound first baseman from Fontana, CA, with a tall, projectable frame and room to add strength. A multi-sport athlete competing in basketball and wrestling, he brings athleticism, coordination, and toughness to the baseball field. Defensively, he has soft hands, solid footwork, and a strong feel for the glove, making him a reliable presence at first base. His short arm action leads to accurate throws, and with further development—particularly by driving through his target—he can add more velocity.\nAt the plate, Aguilera is a right-handed hitter with a slightly open stance and a small leg lift trigger for timing. His rotational swing and strong hands generate solid bat speed, allowing him to drive the ball into the gaps. With further refinement—such as incorporating a deeper hand load and working through the ball more efficiently—he has the potential to unlock even greater power. His multi-sport background enhances his strength, agility, and competitiveness, making him a well-rounded athlete with significant upside as he continues to develop.',
	tagline: 'Premiere Pinch-Hitter Pro',
	sports: [
		{
			id: 0,
			name: 'Baseball',
			icon: 'tabler:ball-baseball',
			stats: [
				{
					id: 0,
					header: 'Hit',
					body: 'RHH. Slightly open stance that evens out when he strides. Hands rest away from back shoulder. Higher launch angle that produces a lot of fly balls. 64.3 mph bat speed with 12g of rotational acceleration.',
				},
				{
					id: 1,
					header: 'Power',
					body: '89 mph max exit velocity (78 avg.); 339-foot max batted distance. Consistently pulls the ball.',
				},
				{
					id: 2,
					header: 'Arm',
					body: 'RH. INF - 71.00 mph. Side arm release across the infield.',
				},

				{ id: 3, header: 'Defense', body: 'Calm footwork through the play.' },
			],
		},
		{
			id: 1,
			name: 'Physical',
			icon: 'tabler:run',
			stats: [
				{
					id: 0,
					header: 'Body',
					body: '6-3, 200 pounds. Strong frame with present strength.',
				},
				{
					id: 1,
					header: 'Athletics',
					body: '7.55 runner in the 60-yard dash; Long, tall strides.',
				},
			],
		},
	],
	social_accounts: [
		{ id: 0, social_name: 'Instagram', handle: 'famous___amos00' },
	],
	galleries: [
		{ id: 0, image: amos_1, alt: 'Amos making a basketball shot.' },
		{ id: 1, image: amos_2, alt: 'Amos doing a layup.' },
		{ id: 2, image: amos_3, alt: 'Amos on the basketball court.' },
		{ id: 3, image: amos_4, alt: 'Amos with his coach on the baseball field.' },
		{ id: 4, image: amos_5, alt: 'Amos up to bat.' },
		{ id: 5, image: amos_6, alt: 'Amos fielding for his team.' },
		{ id: 6, image: amos_7, alt: 'Amos on the baseball grounds.' },
		{ id: 7, image: amos_8, alt: 'Amos in the ring.' },
		{ id: 8, image: amos_9, alt: 'Amos sparring with a partner.' },
		{ id: 9, image: amos_10, alt: 'Amos after a deadlift.' },
	],
};

function wrapFetch(_fetch: Fetch, _baseURL: string): Fetch {
	return async (url, ..._params) => {
		let res: unknown;
		if (url.toString().startsWith('/api/athletes')) {
			res = [ATHLETE];
		} else {
			res = ATHLETE;
		}

		return new Response(JSON.stringify(res));

		// if (url.toString().startsWith('/')) return fetch(baseURL + url, ...params);
		// else return fetch(url, ...params);
	};
}

export function setupFetch(fetch: Fetch, baseURL: string) {
	const newFetch = wrapFetch(fetch, baseURL);
	globalThis.fetch = newFetch;
}
