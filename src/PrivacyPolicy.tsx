// privacy policy page i hope
import React from 'react';
import CallToAction from '$lib/components/CallToAction';

export default function PrivacyPolicy() {
	// i am fr winging this rawdogging hoping for da best
	return (
		<div className='pp-container'>
			<h1>Players Club Management Privacy Policy</h1>
			<h2>Privacy Policy</h2>
			<p>
				This Privacy Policy explains how Players Club Management (“we”, “us”, or
				“our”) collects, uses, and discloses your Personal Information when you
				visit or make a purchase from our website (the “Site”).{' '}
			</p>
			<hr className='default' />
			<h3>Collecting Personal Information </h3>
			<p>
				When you visit our Site, we collect certain information about your
				device, your interactions with the Site, and data needed to process
				purchases or provide our services. We may also collect additional
				information if you contact us directly. “Personal Information” refers to
				any information that can uniquely identify you. Below are the types of
				Personal Information we collect and why:
			</p>
			<hr className='dashed' />
			<h4>Device Information</h4>
			<p>
				<b>Examples of data collected:</b> browser type, IP address, time zone,
				cookie data, pages/products viewed, search terms, and site interaction
				behavior.
				<b>Purpose:</b> to display our Site properly, and for analytics to
				improve user experience.
				<b>How we collect it:</b> automatically, using cookies, log files,
				pixels, tags, or other tracking technologies.
				<b>Disclosure:</b> shared with our analytics and hosting service
				providers (e.g., Google Analytics, Shopify, or other platforms we use).
			</p>
			<hr className='dashed' />
			<h4>Order & Service Information</h4>
			<p>
				<b>Examples of data collected:</b> name, billing/shipping address,
				payment details (credit card, Apple Pay, etc.), email address, and phone
				number.
				<b>Purpose:</b> to fulfill contracts, process payments, arrange services
				or product delivery, send confirmations, and communicate with you.
				<b>How we collect it:</b> directly from you when you fill out a form,
				make a purchase, or book a service.
				<b>Disclosure:</b> shared with payment processors, CRM tools, email
				marketing platforms, or other vendors necessary to deliver our services.
			</p>
			<hr className='dashed' />
			<h4>Customer Support </h4>
			<p>
				<b>Examples of data collected:</b> any personal details you share while
				requesting support (e.g., contact details, case details).
				<b>Purpose:</b> to help resolve your issues and provide better service.
				<b>How we collect it:</b> directly from you.
				<b>Disclosure:</b> may be shared with third-party support platforms we
				use.
			</p>
			<hr className='default' />
			<h3>Minors</h3>
			<p>
				Our services are not intended for individuals under the age of 13. We do
				not knowingly collect Personal Information from children. If you are a
				parent or guardian and believe your child has provided us with personal
				data, please contact us to have it removed.{' '}
			</p>
			<hr className='default' />
			<h3>Sharing Personal Information</h3>
			<p>
				We may share your Personal Information with third-party service
				providers who assist us in running our business, fulfilling our
				obligations to you, and marketing our services. For example:
			</p>
			<ul>
				<li>
					We may use Shopify (or another platform) to host and manage our
					e-commerce features.
				</li>
				<li>
					We may share data to comply with legal requirements or to enforce our
					rights.
				</li>
			</ul>
			<hr className='default' />
			<h3>Behavioral Advertising</h3>
			<p>
				We may use your Personal Information to show you relevant ads or
				marketing. This may include sharing data with:{' '}
			</p>
			<ul>
				<li>
					Google Analytics –{' '}
					<a href='https://policies.google.com/privacy'>Learn more</a> or{' '}
					<a href='https://tools.google.com/dlpage/gaoptout'>opt-out</a>
				</li>
				<li>
					Social media platforms like Facebook and Instagram for remarketing
					purposes
				</li>
			</ul>
			<p>
				You can opt out of targeted advertising by visiting the following links:
			</p>
			<ul>
				<li>
					<a href='hhttps://www.facebook.com/settings/?tab=ads'>Facebook</a>
				</li>
				<li>
					<a href='https://www.google.com/settings/ads/anonymous'>Google</a>
				</li>
				<li>
					<a href='https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads'>
						Bing
					</a>
				</li>
				<li>
					<a href='http://optout.aboutads.info/'>
						Or visit the Digital Advertising Alliance opt-out page
					</a>
				</li>
			</ul>
			<hr className='default' />
			<h3>Using Your Information</h3>
			<p>We use the information we collect to:</p>
			<ul>
				<li>Offer and deliver products or services</li>
				<li>Process payments and send receipts </li>
				<li>Fulfill orders and arrange shipping</li>
				<li>Communicate updates or promotions</li>
				<li>Improve and secure our services</li>
			</ul>
			<hr className='default' />
			<h3>Your Rights</h3>
			<h4>CCPA (if applicable)</h4>
			<p>California residents may:</p>
			<ul>
				<li>Request access to the personal data we hold</li>
				<li>Ask for corrections or deletion</li>
				<li>Opt out of the sale of personal data</li>
				<li>Designate an authorized agent to act on their behalf</li>
			</ul>
			<p>
				We do not sell personal data in the conventional sense, but we may share
				it with third parties as described.{' '}
			</p>
			<hr className='default' />
			<h3>Cookies</h3>
			<p>
				We use cookies to support site functionality, track visitor behavior,
				and enhance your experience. These may include:
			</p>
			<table>
				<thead>
					<tr>
						<th>Cookie Name</th>
						<th>Purpose</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>_session_id</td>
						<td>Maintains session data</td>
					</tr>
					<tr>
						<td>cart</td>
						<td>Tracks shopping cart contents</td>
					</tr>
					<tr>
						<td>_analytics</td>
						<td>Website usage analysis</td>
					</tr>
					<tr>
						<td>_marketing_pref</td>
						<td>Stores your ad tracking choice</td>
					</tr>
				</tbody>
			</table>
			<p>
				You can manage cookies through your browser settings. Learn more at{' '}
				<a href='http://www.allaboutcookies.org/'>www.allaboutcookies.org</a>
			</p>
			<hr className='default' />
			<h3>Do Not Track </h3>
			<p>
				We do not currently respond to "Do Not Track" signals due to a lack of
				industry standards.
			</p>
			<hr className='default' />
			<h3>Changes to This Policy</h3>
			<p>
				We may revise this Privacy Policy periodically to reflect operational,
				legal, or regulatory updates. The latest version will always be
				available on our Site.
			</p>
			<hr className='default' />
			<h3>Contact Us</h3>
			<p>
				If you have any questions about this Privacy Policy, please contact us
				at:
			</p>
			<p>
				<b>Players Club Management</b>
			</p>
			<p>
				<b>Email:</b> playersclubmgmtsjz@gmail.com
			</p>
			<p>
				<b>Address:</b> 17325 Wabash Ave, Fontana, CA 92336
			</p>
			<div style={{ marginTop: '2rem' }}>
				<CallToAction icon='tabler:mail-forward' to='/contact'>
					Want to Get in Touch with This Athlete? Contact Us Now
				</CallToAction>
			</div>
		</div>
	);
}
