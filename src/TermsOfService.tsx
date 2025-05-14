// terms of service page i hope
import CallToAction from '$lib/components/CallToAction';

export default function TermsOfService() {
    // i am fr winging this rawdogging hoping for da best
    return (
        <div className="tos-container">
            <h1>Players Club Management Terms of Service</h1>
            <h2>Terms of Service</h2>
            <p><b>Effective Date:</b> 04/29/2025</p>
            <p>              Welcome to Players Club Management ("we," "our," or "us"). These Terms of Service
                ("Terms") govern your access to and use of our website (the "Site"), services, and products. By
                visiting or using our Site, you agree to be bound by these Terms.</p>
            <p>Please read them carefully. If you do not agree to these Terms, please do not use our services or
                site.</p>
            <hr className="default" />
            <h3>1. Eligibility</h3>
            <p>To use our Site or services, you must be at least 13 years old (or the minimum age of digital
                consent in your jurisdiction). By using the Site, you represent that you meet these requirements
                and that any information you provide is accurate and complete. </p>
            <hr className="dashed" />
            <h3>2. Services We Provide</h3>
            <p>Players Club Management offers services and content related to Name, Image, and Likeness
                (NIL), including but not limited to: </p>
            <ul>
                <li>NIL representation for student-athletes</li>
                <li>Brand partnerships</li>
                <li>Social media and marketing services</li>
                <li>Sales of merchandise or digital goods</li>
                <li>Athlete bookings or appearances</li>
                <li>Educational resources</li>
            </ul>
            <p>All services are subject to change, limitation, or discontinuation at our discretion.</p>
            <hr className="dashed" />
            <h3>3. Payments & Fees </h3>
            <p>When you make a purchase or engage in a paid service through our Site, you agree to provide
                accurate payment information. All fees are due at the time of service unless otherwise stated in a
                written agreement.
                We reserve the right to modify pricing at any time. Refund policies, if any, are disclosed at
                checkout or in separate written agreements. </p>
            <hr className="dashed" />
            <h3>4. Intellectual Property </h3>
            <p>All content on this Site — including but not limited to logos, text, graphics, videos, and images
                — is owned by or licensed to Players Club Management and protected by intellectual property
                laws. You may not reproduce, distribute, or exploit any content without our prior written
                permission. </p>
            <hr className="dashed" />
            <h3>5. Athlete Representation & Agreements</h3>
            <p>If you are a student-athlete or representative seeking NIL services, any formal engagement must
                be governed by a separate NIL Representation Agreement. These Terms do not constitute a
                representation agreement.
                You are responsible for complying with your school’s or governing body’s NIL compliance
                policies. Players Club Management is not liable for violations of third-party NIL rules or
                institutional regulations.</p>
            <hr className="dashed" />
            <h3>6. User Conduct</h3>
            <p>You agree not to use the Site or our services:</p>
            <ul>
                <li>For any unlawful purpose</li>
                <li>To solicit others to perform or participate in unlawful acts</li>
                <li>To violate any international, federal, state, or local regulations</li>
                <li>To infringe upon our intellectual property rights or those of others</li>
                <li>To harass, abuse, insult, harm, or defame others</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit malicious code or spam</li>
            </ul>
            <p>Violation of these rules may result in termination of your access to the Site. </p>
            <hr className="dashed" />
            <h3>7. Third-Party Links and Tools</h3>
            <p>Our Site may contain links to third-party websites or tools not owned or controlled by Players
                Club Management. We are not responsible for their content, accuracy, or practices. Use them at
                your own risk.</p>
            <hr className="dashed" />
            <h3>8. Disclaimers</h3>
            <p>We provide our Site and services “as is” and “as available” without warranties of any kind, either
                express or implied. We do not guarantee that the Site will be uninterrupted, secure, or error-free. </p>
            <p>Players Club Management does not guarantee any specific NIL deal or financial outcome from
                representation or promotion services.</p>
            <hr className="dashed" />
            <h3>9. Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, Players Club Management and its affiliates, partners,
                officers, and employees shall not be liable for any indirect, incidental, or consequential damages
                arising from your use of the Site or our services.</p>
            <hr className="dashed" />
            <h3>10. Indemnification</h3>
            <p>You agree to indemnify and hold harmless Players Club Management from any claim, demand,
                or damages, including attorney’s fees, arising out of your use of the Site or your violation of
                these Terms.</p>
            <hr className="dashed" />
            <h3>11. Termination</h3>
            <p>We reserve the right to suspend or terminate your access to the Site or services for any reason,
                including a breach of these Terms.</p>
            <hr className="dashed" />
            <h3>12. Governing Law</h3>
            <p>These Terms are governed by and interpreted under the laws of the State of California, without
                regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of courts
                located in California for any disputes. </p>
            <hr className="dashed" />
            <h3>13. Changes to These Terms</h3>
            <p>We may update these Terms from time to time to reflect operational or legal changes. It is your
                responsibility to review them periodically. Continued use of the Site constitutes acceptance of
                the revised Terms. </p>
            <hr className="dashed" />
            <h3>14. Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><b>Players Club Management</b></p>
            <p><b>Email:</b> playersclubmgmtsjz@gmail.com </p>
            <p><b>Address:</b> 17325 Wabash Ave, Fontana, CA 92336</p>
            <div style={{ marginTop: '2rem' }}>
                <CallToAction icon='tabler:mail-forward' to='/contact'>
                    Want to Get in Touch with This Athlete? Contact Us Now
                </CallToAction>
            </div>
        </div>
    )
}
