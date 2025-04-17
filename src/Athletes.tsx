import './Athletes.css';
import AthleteCard from '$lib/components/AthleteCard';
import ContactForm from '$lib/components/ContactForm';
import { ContactInfoItem } from '$lib/components/ContactInfo';
import { useState } from 'react';

export default function Athletes() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample athlete data - replace with your actual data source
  const athletes = [
    {
      id: 1,
      name: 'AMOS AGUILERA',
      position: '1B',
      school: 'Jurupa Hills High School',
      tags: ['Baseball', 'NIL', 'Multi-Sport'],
      image: '/images/athletes/amos-aguilera.jpg'
    },
    {
      id: 2,
      name: 'JOHN MEOWER',
      position: 'Quarterback',
      school: 'UCLA',
      tags: ['Football', 'HS'],
      image: '/images/athletes/john-meower.jpg'
    },
    {
      id: 3,
      name: 'EDGAR ALLEN POE',
      position: 'Team Spirit',
      school: 'University of Sussex',
      tags: ['Basketball', 'College', 'MVP'],
      image: '/images/athletes/edgar-allen-poe.jpg'
    },
    {
      id: 4,
      name: 'JEREMY STYLES',
      position: 'Peak Riddler',
      school: 'University of Jazz',
      tags: ['Football', 'HS', 'Star Player'],
      image: '/images/athletes/jeremy-styles.jpg'
    }
  ];

  // Filter athletes based on search query
  const filteredAthletes = athletes.filter(athlete => 
    athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    athlete.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    athlete.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
    athlete.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="Athletes-body">
      <section className="Athletes-hero">
        <h1>Our Elite Athletes</h1>
        
        <div className="Athletes-description">
          <p>
            At Players Club Management, we take pride in representing a 
            diverse roster of talented student-athletes. Our athletes are more 
            than just competitors—they are leaders, influencers, and future 
            business moguls.
          </p>
          <p>
            Discover the remarkable talents of our athletes who are redefining 
            excellence in their sports. Each athlete embodies dedication, skill, 
            and the pursuit of greatness.
          </p>
        </div>

        <div className="Athletes-search">
          <input 
            type="text" 
            placeholder="Search athletes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="Athletes-searchInput"
          />
          <span className="Athletes-searchIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>
      </section>

      <section className="Athletes-grid">
        {filteredAthletes.map(athlete => (
          <AthleteCard 
            key={athlete.id}
            name={athlete.name}
            position={athlete.position}
            school={athlete.school}
            tags={athlete.tags}
            image={athlete.image}
          />
        ))}
      </section>

      <section className="Athletes-footer">
        <div className="Athletes-contactInfo">
          <h2>Our Contact Info</h2>
          <div className="Athletes-socialLinks">
            <a href="#" className="Athletes-socialLink">
              <span className="Athletes-socialIcon">📍</span>
              @example
            </a>
            <a href="#" className="Athletes-socialLink">
              <span className="Athletes-socialIcon">𝕏</span>
              @example
            </a>
            <a href="#" className="Athletes-socialLink">
              <span className="Athletes-socialIcon">📸</span>
              @example
            </a>
            <a href="#" className="Athletes-socialLink">
              <span className="Athletes-socialIcon">👤</span>
              @example
            </a>
            <a href="#" className="Athletes-socialLink">
              <span className="Athletes-socialIcon">📺</span>
              @example
            </a>
            <ContactInfoItem
              icon="tabler:mail"
              text="playersclubmgmtsjz@gmail.com"
              to="mailto:playersclubmgmtsjz@gmail.com"
            />
            <ContactInfoItem
              icon="tabler:phone"
              text="(909) 232-2422"
              to="tel:+1(909)232-2422"
            />
          </div>
        </div>

        <div className="Athletes-navigation">
          <h2>Navigation</h2>
          <div className="Athletes-navLinks">
            <a href="/" className="Athletes-navLink">Home</a>
            <a href="/about" className="Athletes-navLink">About</a>
            <a href="/athletes" className="Athletes-navLink">Athletes</a>
            <a href="/events" className="Athletes-navLink">Events</a>
            <a href="/blog" className="Athletes-navLink">Blog</a>
            <a href="/privacy" className="Athletes-navLink">Privacy Policy</a>
            <a href="/terms" className="Athletes-navLink">Terms of Service</a>
          </div>
        </div>
      </section>

      <section className="Athletes-contactForm">
        <h2>Send Us a Message</h2>
        <ContactForm title="" rows={8} cols={50} />
      </section>

      <div className="Athletes-copyright">
        © 2025 Players Club Management
      </div>
    </main>
  );
}
