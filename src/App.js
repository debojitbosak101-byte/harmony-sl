import { useState } from 'react';

const company = {
  name: 'Streamline Harmony',
  location: 'Kolkata',
  description:
    'A Kolkata-based events company providing musicians and bands for college fests, cafes, private parties and more.',
  contactEmail: 'hello@streamlineharmony.com',
  contactPhone: '+91 98765 43210'
};

const eventCards = [
  {
    title: 'College Fest Live',
    subtitle: 'Bands and singers for campus celebrations',
    details: 'Energy, excitement and music for college festivals and youth events.'
  },
  {
    title: 'Cafe Music Nights',
    subtitle: 'Acoustic sets and soothing lounge vibes',
    details: 'Perfect performers for cafes, eateries and creative hangouts.'
  },
  {
    title: 'Private Showcase',
    subtitle: 'Custom performances for your special day',
    details: 'Experienced musicians ready for weddings, birthdays, and events.'
  }
];

function App() {
  const [page, setPage] = useState('events');

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div>
          <p className="eyebrow">Streamline Harmony</p>
          <h1>Musician booking made easy in Kolkata</h1>
          <p className="hero-copy">
            Need a band for your college fest? Want live music for your cafe? We connect you with the best Kolkata musicians at every event.
          </p>
          <div className="nav-buttons">
            <button onClick={() => setPage('events')} className={page === 'events' ? 'active' : ''}>
              Event Services
            </button>
            <button onClick={() => setPage('contact')} className={page === 'contact' ? 'active' : ''}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hall-frame">
            <div className="stage-light" />
            <div className="stage-light stage-right" />
            <div className="stage-platform">
              <span>Live Music</span>
            </div>
          </div>
        </div>
      </header>

      {page === 'events' ? <EventPage /> : <ContactPage />}

      <footer className="footer-bar">
        <span>{company.name} — Kolkata-based music event partners.</span>
      </footer>
    </div>
  );
}

function EventPage() {
  return (
    <main className="content-grid">
      <section className="section-card">
        <h2>Our Event Services</h2>
        <p>
          Streamline Harmony helps you host memorable music events across Kolkata. We provide talented bands, solo artists,
          DJs, and acoustic performers tailored to your venue.
        </p>
      </section>

      <section className="event-list">
        {eventCards.map((item) => (
          <article key={item.title} className="event-card">
            <div className="image-block" />
            <h3>{item.title}</h3>
            <p className="subtitle">{item.subtitle}</p>
            <p>{item.details}</p>
          </article>
        ))}
      </section>

      <section className="section-card wide-card">
        <h2>Why choose Streamline Harmony?</h2>
        <ul>
          <li>Local Kolkata musicians with live event experience</li>
          <li>Flexible performers for college fests, cafes, and private parties</li>
          <li>Fast booking, reliable coordination, and quality sound</li>
        </ul>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="content-grid">
      <section className="section-card wide-card">
        <h2>Contact Us</h2>
        <p>Tell us about your event and we will connect you with the ideal musicians.</p>
        <div className="contact-panel">
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label>Event type</label>
            <input type="text" placeholder="College fest, cafe, party" />
          </div>
          <div>
            <label>Message</label>
            <textarea rows="4" placeholder="Share your event date, venue and music style." />
          </div>
          <button className="primary-button">Send Message</button>
        </div>
      </section>

      <section className="section-card">
        <h3>Reach out</h3>
        <p>Email: hello@streamlineharmony.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Kolkata, India</p>
      </section>
    </main>
  );
}

export default App;
