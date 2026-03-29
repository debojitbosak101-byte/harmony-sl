import { useState } from 'react';

const company = {
  name: 'Streamline Harmony',
  location: 'Kolkata',
  description:
    'A Kolkata-based music events company providing live artists, bands and acoustic performers for college fests, cafes, private parties and more.',
  contactEmail: 'hello@streamlineharmony.com',
  contactPhone: '+91 98765 43210'
};

const eventCards = [
  {
    title: 'College Fest Live',
    subtitle: 'Festival bands and stage acts',
    details: 'High energy performances, live vocals and crowd-pumping music for campus events.'
  },
  {
    title: 'Cafe Music Nights',
    subtitle: 'Acoustic and lounge artists',
    details: 'Soft rhythms and elegant instrumentals for cafes, restaurants, and creative spaces.'
  },
  {
    title: 'Private Showcase',
    subtitle: 'Custom performances for your celebration',
    details: 'Weddings, birthdays, corporate evenings and private gatherings with curated music.'
  }
];

const serviceTags = ['College fests', 'Cafes & lounges', 'Private parties', 'Band bookings', 'Live sound'];

const testimonials = [
  {
    name: 'Asha R.',
    role: 'College Fest Organizer',
    quote: 'Streamline Harmony made our fest magical with a power-packed band and flawless coordination.'
  },
  {
    name: 'Soham M.',
    role: 'Cafe Owner',
    quote: 'The acoustic evening was a hit – talented musicians and smooth booking made the night unforgettable.'
  },
  {
    name: 'Priya S.',
    role: 'Wedding Host',
    quote: 'We got the perfect live set for our reception. Friendly team, great artists, and amazing sound.'
  }
];

const galleryItems = [
  {
    title: 'College Fest Stage',
    subtitle: 'Vibrant live performance frames',
    label: 'Band Night',
    className: 'gallery-band'
  },
  {
    title: 'Cafe Music Session',
    subtitle: 'Warm acoustic evening scenes',
    label: 'Lounge Vibe',
    className: 'gallery-cafe'
  },
  {
    title: 'Private Showcase',
    subtitle: 'Elegant performance and lighting',
    label: 'Stage Show',
    className: 'gallery-stage'
  }
];

function App() {
  const [page, setPage] = useState('events');

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy-block">
          <p className="eyebrow">Streamline Harmony</p>
          <h1>Book Kolkata’s finest musicians for every event.</h1>
          <p className="hero-copy">
            From college festivals to cozy cafe nights, our Kolkata artists bring live music, energy, and reliability to your celebration.
          </p>
          <div className="hero-features">
            {serviceTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
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
            <div className="spotlight spotlight-left" />
            <div className="spotlight spotlight-right" />
            <div className="stage-platform">
              <span>Live Music</span>
            </div>
            <div className="audience-row" />
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
      <section className="section-card intro-card">
        <div>
          <h2>Professional event music, simple booking.</h2>
          <p>
            Streamline Harmony connects you with trusted Kolkata musicians and bands for any event. We handle the artist match,
            schedule coordination, and event-ready arrangements so you can focus on the moment.
          </p>
        </div>
        <div className="quick-stats">
          <div>
            <strong>120+</strong>
            <p>Events delivered</p>
          </div>
          <div>
            <strong>60+</strong>
            <p>Kolkata artists</p>
          </div>
          <div>
            <strong>24/7</strong>
            <p>Booking support</p>
          </div>
        </div>
      </section>

      <section className="event-list">
        {eventCards.map((item) => (
          <article key={item.title} className="event-card">
            <div className="image-block" />
            <div>
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section-card testimonials-card">
        <h2>Trusted by Kolkata event hosts</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>“{item.quote}”</p>
              <div className="testimonial-footer">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card gallery-card">
        <div className="gallery-header">
          <div>
            <h2>Hall of frames</h2>
            <p>Browse snapshots from our best Kolkata music events.</p>
          </div>
          <span className="gallery-badge">Image showcase</span>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article key={item.title} className="gallery-item">
              <div className={`gallery-photo ${item.className}`}>
                <div className="gallery-photo-label">{item.label}</div>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card wide-card">
        <h2>How we help your event shine</h2>
        <ul>
          <li>Experienced musicians for college fests, cafes, private parties and open-air shows.</li>
          <li>Flexible packages for bands, solo artists, acoustic sets, and event coordination.</li>
          <li>Local Kolkata talent with fast booking and professional sound support.</li>
        </ul>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="content-grid">
      <section className="section-card wide-card">
        <h2>Contact Streamline Harmony</h2>
        <p>Complete the form below and our team will match your event with the right musicians.</p>
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
            <input type="text" placeholder="College fest, cafe, wedding" />
          </div>
          <div>
            <label>Date / Venue</label>
            <input type="text" placeholder="Event date or location" />
          </div>
          <div>
            <label>Message</label>
            <textarea rows="5" placeholder="Share your music preferences and guest count." />
          </div>
          <button className="primary-button">Send Message</button>
        </div>
      </section>

      <section className="section-card contact-summary">
        <h3>Reach out anytime</h3>
        <p>Email: hello@streamlineharmony.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Kolkata, India</p>
        <p className="small-note">We provide artists for colleges, cafes, corporate evenings, weddings and private parties.</p>
      </section>
    </main>
  );
}

export default App;
